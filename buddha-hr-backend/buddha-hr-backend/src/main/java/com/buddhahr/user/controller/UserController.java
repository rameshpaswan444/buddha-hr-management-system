package com.buddhahr.user.controller;
import com.buddhahr.user.dto.request.RegisterRequest;
import com.buddhahr.user.dto.request.UpdateUserRequest;
import com.buddhahr.user.dto.request.UpdateUserRoleRequest;
import com.buddhahr.user.dto.response.UserResponse;
import com.buddhahr.user.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserService userService;

    @PostMapping("/register")
    public UserResponse register(@Valid @RequestBody RegisterRequest request) {

        return userService.register(request);

    }

    @GetMapping
    public Page<UserResponse> getAllUsers(

            @RequestParam(defaultValue = "0") int page,

            @RequestParam(defaultValue = "10") int size,

            @RequestParam(defaultValue = "createdAt") String sortBy,

            @RequestParam(defaultValue = "desc") String direction
    ) {

        return userService.getAllUsers(
                page,
                size,
                sortBy,
                direction
        );
    }

    @GetMapping("/{id}")
    public UserResponse getUserById(
            @PathVariable Long id
    ) {

        return userService.getUserById(id);
    }

    @PutMapping("/{id}")
    public UserResponse updateUser(

            @PathVariable Long id,

            @Valid @RequestBody UpdateUserRequest request
    ) {

        return userService.updateUser(id, request);
    }

    @PatchMapping("/{id}/role")
    public UserResponse updateUserRole(

            @PathVariable Long id,

            @Valid @RequestBody UpdateUserRoleRequest request
    ) {

        return userService.updateUserRole(id, request);

    }

    @DeleteMapping("/{id}")
    public void deleteUser(
            @PathVariable Long id
    ) {

        userService.deleteUser(id);
    }
}
