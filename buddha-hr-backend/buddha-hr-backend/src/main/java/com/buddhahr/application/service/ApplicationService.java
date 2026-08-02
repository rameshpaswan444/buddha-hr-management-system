package com.buddhahr.application.service;

import com.buddhahr.application.dto.response.ApplicationResponse;
import com.buddhahr.application.entity.ApplicationStatus;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ApplicationService {

    ApplicationResponse applyJob(
            Long jobId,
            String coverLetter,
            MultipartFile resume
    ) throws IOException;

    List<ApplicationResponse> getAllApplications();

    ApplicationResponse getApplication(Long id);

    ApplicationResponse updateStatus(
            Long id,
            ApplicationStatus status
    );

}
