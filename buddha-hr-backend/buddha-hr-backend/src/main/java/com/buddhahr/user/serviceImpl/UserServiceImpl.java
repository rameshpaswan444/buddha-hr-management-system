package com.buddhahr.user.serviceImpl;

import com.buddhahr.exception.EmailAlreadyExistsException;
import com.buddhahr.exception.PhoneAlreadyExistsException;
import com.buddhahr.exception.ResourceNotFoundException;
import com.buddhahr.role.entity.Role;
import com.buddhahr.role.entity.RoleType;
import com.buddhahr.role.repository.RoleRepository;
import com.buddhahr.user.dto.request.RegisterRequest;
import com.buddhahr.user.dto.request.UpdateUserRequest;
import com.buddhahr.user.dto.request.UpdateUserRoleRequest;
import com.buddhahr.user.dto.response.UserResponse;
import com.buddhahr.user.entity.User;
import com.buddhahr.user.mapper.UserMapper;
import com.buddhahr.user.repository.UserRepository;
import com.buddhahr.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {


    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;


    @Override
    public UserResponse register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new EmailAlreadyExistsException("Email already exists.");
        }

        if (userRepository.existsByPhone(request.getPhone())) {
            throw new PhoneAlreadyExistsException("Phone number already exists.");
        }

        Role role = roleRepository.findByName(RoleType.JOB_SEEKER)
                .orElseThrow(() -> new ResourceNotFoundException("Role not found"));

        User user = userMapper.toEntity(request);

        user.setPassword(passwordEncoder.encode(request.getPassword()));

        user.setRole(role);

        User savedUser = userRepository.save(user);

        return userMapper.toResponse(savedUser);
    }

    @Override
    public Page<UserResponse> getAllUsers(
            int page,
            int size,
            String sortBy,
            String direction
    ) {

        Sort sort = direction.equalsIgnoreCase("desc")
                ? Sort.by(sortBy).descending()
                : Sort.by(sortBy).ascending();

        Pageable pageable = PageRequest.of(page, size, sort);

        Page<User> users = userRepository.findAll(pageable);

        return users.map(userMapper::toResponse);
    }

    @Override
    public UserResponse getUserById(Long id) {

        User user = userRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("User not found."));

        return userMapper.toResponse(user);
    }

    @Override
    public UserResponse updateUser(
            Long id,
            UpdateUserRequest request
    ) {

        User user = userRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("User not found."));

        if (userRepository.existsByEmailAndIdNot(request.getEmail(), id)) {
            throw new EmailAlreadyExistsException(
                    "Email already exists.");
        }

        if (userRepository.existsByPhoneAndIdNot(request.getPhone(), id)) {
            throw new PhoneAlreadyExistsException(
                    "Phone number already exists.");
        }

        userMapper.updateUserFromRequest(request, user);

        User updatedUser = userRepository.save(user);

        return userMapper.toResponse(updatedUser);
    }

    @Override
    public UserResponse updateUserRole(
            Long id,
            UpdateUserRoleRequest request
    ) {

        User user = userRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("User not found."));

        Role role = roleRepository.findByName(request.getRole())
                .orElseThrow(() ->
                        new ResourceNotFoundException("Role not found."));

        user.setRole(role);

        User updatedUser = userRepository.save(user);

        return userMapper.toResponse(updatedUser);
    }

    @Override
    public void deleteUser(Long id) {

        User user = userRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("User not found."));

        userRepository.delete(user);
    }
}
