package com.buddhahr.dashboard.dto;

import com.buddhahr.application.entity.ApplicationStatus;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class RecentApplicationResponse {

    private Long applicationId;

    private String applicantName;

    private String jobTitle;

    private ApplicationStatus status;

    private LocalDateTime appliedAt;

}
