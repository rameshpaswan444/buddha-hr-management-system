package com.buddhahr.user.dto.request;

import com.buddhahr.role.entity.RoleType;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateUserRoleRequest {

    @NotNull(message = "Role is required")
    private RoleType role;

}
