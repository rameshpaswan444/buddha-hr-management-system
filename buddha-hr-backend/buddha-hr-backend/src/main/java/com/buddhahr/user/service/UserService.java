package com.buddhahr.user.service;

import com.buddhahr.user.dto.request.RegisterRequest;
import com.buddhahr.user.dto.request.UpdateUserRequest;
import com.buddhahr.user.dto.request.UpdateUserRoleRequest;
import com.buddhahr.user.dto.response.UserResponse;
import org.springframework.data.domain.Page;

public interface UserService {

    UserResponse register(RegisterRequest request);

    Page<UserResponse> getAllUsers(
            int page,
            int size,
            String sortBy,
            String direction
    );

    UserResponse getUserById(Long id);

    UserResponse updateUser(
            Long id,
            UpdateUserRequest request
    );
    UserResponse updateUserRole(
            Long id,
            UpdateUserRoleRequest request
    );

    void deleteUser(Long id);
}

