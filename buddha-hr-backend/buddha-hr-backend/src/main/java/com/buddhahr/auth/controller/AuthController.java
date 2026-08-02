package com.buddhahr.auth.controller;

import com.buddhahr.auth.dto.request.ForgotPasswordRequest;
import com.buddhahr.auth.dto.request.LoginRequest;
import com.buddhahr.auth.dto.request.ResetPasswordRequest;
import com.buddhahr.auth.dto.response.LoginResponse;
import com.buddhahr.auth.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public LoginResponse login(
            @Valid @RequestBody LoginRequest request
    ) {

        return authService.login(request);

    }

    @PostMapping("/forgot-password")
    public void forgotPassword(
            @Valid @RequestBody ForgotPasswordRequest request
    ) {

        authService.forgotPassword(request);

    }

    @PostMapping("/reset-password")
    public void resetPassword(
            @Valid @RequestBody ResetPasswordRequest request
    ) {

        authService.resetPassword(request);

    }
}
