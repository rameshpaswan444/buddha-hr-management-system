package com.buddhahr.dashboard.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class RecentUserResponse {

    private Long id;

    private String fullName;

    private String email;

    private String role;

    private LocalDateTime registeredAt;

}
