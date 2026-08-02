package com.buddhahr.user.mapper;

import com.buddhahr.user.dto.request.RegisterRequest;
import com.buddhahr.user.dto.request.UpdateUserRequest;
import com.buddhahr.user.dto.response.UserResponse;
import com.buddhahr.user.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface UserMapper {

    User toEntity(RegisterRequest request);

    @Mapping(target = "role", source = "role.name")
    @Mapping(target = "enabled", source = "enabled")
    @Mapping(target = "createdAt", source = "createdAt")
    UserResponse toResponse(User user);

    @Mapping(target = "address", source = "address")
    @Mapping(target = "dateOfBirth", source = "dateOfBirth")
    @Mapping(target = "gender", source = "gender")
    @Mapping(target = "enabled", source = "enabled")
    @Mapping(target = "firstName", source = "firstName")
    @Mapping(target = "lastName", source = "lastName")
    @Mapping(target = "email", source = "email")
    @Mapping(target = "phone", source = "phone")
    void updateUserFromRequest(
            UpdateUserRequest request,
            @MappingTarget User user
    );
}
