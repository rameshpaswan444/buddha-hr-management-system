package com.buddhahr.auth.serviceImpl;

import com.buddhahr.auth.dto.request.ForgotPasswordRequest;
import com.buddhahr.auth.dto.request.LoginRequest;
import com.buddhahr.auth.dto.request.ResetPasswordRequest;
import com.buddhahr.auth.dto.response.LoginResponse;
import com.buddhahr.auth.entity.PasswordResetToken;
import com.buddhahr.auth.repository.PasswordResetTokenRepository;
import com.buddhahr.auth.security.JwtService;
import com.buddhahr.auth.service.AuthService;
import com.buddhahr.exception.ResourceNotFoundException;
import com.buddhahr.mail.service.EmailService;
import com.buddhahr.user.entity.User;
import com.buddhahr.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {


    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final UserRepository userRepository;
    private final PasswordResetTokenRepository passwordResetTokenRepository;
    private final EmailService emailService;
    private final PasswordEncoder passwordEncoder;

    @Override
    public LoginResponse login(LoginRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        String token = jwtService.generateToken(user.getEmail());

        return LoginResponse.builder()
                .token(token)
                .type("Bearer")
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .role(user.getRole().getName().name())
                .build();
    }

    @Override
    public void forgotPassword(ForgotPasswordRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new ResourceNotFoundException("User not found."));

        // Delete previous reset token if it exists
        passwordResetTokenRepository.findByUser(user)
                .ifPresent(passwordResetTokenRepository::delete);

        // Generate new token
        String token = UUID.randomUUID().toString();

        PasswordResetToken passwordResetToken =
                PasswordResetToken.builder()
                        .token(token)
                        .expiryDate(
                                LocalDateTime.now().plusMinutes(15)
                        )
                        .user(user)
                        .build();

        passwordResetTokenRepository.save(passwordResetToken);

        String resetLink =
                "http://localhost:5173/reset-password?token=" + token;

        emailService.sendPasswordResetEmail(
                user.getEmail(),
                resetLink
        );

    }
    @Override
    public void resetPassword(ResetPasswordRequest request) {

        PasswordResetToken passwordResetToken =
                passwordResetTokenRepository
                        .findByToken(request.getToken())
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Invalid reset token."
                                ));

        if (passwordResetToken.getExpiryDate().isBefore(LocalDateTime.now())) {

            passwordResetTokenRepository.delete(passwordResetToken);

            throw new RuntimeException("Reset token has expired.");

        }

        User user = passwordResetToken.getUser();

        user.setPassword(
                passwordEncoder.encode(request.getNewPassword())
        );

        userRepository.save(user);

        passwordResetTokenRepository.delete(passwordResetToken);

    }
}
