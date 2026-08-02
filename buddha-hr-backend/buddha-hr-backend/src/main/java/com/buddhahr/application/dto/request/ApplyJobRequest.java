package com.buddhahr.application.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ApplyJobRequest {

    @NotNull(message = "Job ID is required")
    private Long jobId;

    private String coverLetter;

}