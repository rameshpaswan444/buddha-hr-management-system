package com.buddhahr.application.dto.response;

import com.buddhahr.application.entity.ApplicationStatus;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ApplicationResponse {

    private Long id;

    private Long jobId;

    private String jobTitle;

    private String applicantName;

    private String applicantEmail;

    private String coverLetter;

    private String resumePath;

    private ApplicationStatus status;

}
