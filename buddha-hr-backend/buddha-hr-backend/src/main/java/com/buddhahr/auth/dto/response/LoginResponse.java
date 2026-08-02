package com.buddhahr.auth.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class LoginResponse {

    private String token;

    private String type;

    private String firstName;

    private String lastName;

    private String email;

    private String role;
}
