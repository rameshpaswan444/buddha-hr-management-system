package com.buddhahr.application.controller;

import com.buddhahr.application.dto.response.ApplicationResponse;
import com.buddhahr.application.entity.ApplicationStatus;
import com.buddhahr.application.service.ApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/applications")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class ApplicationController {

    private final ApplicationService applicationService;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ApplicationResponse applyJob(

            @RequestParam Long jobId,

            @RequestParam(required = false) String coverLetter,

            @RequestParam("resume") MultipartFile resume

    ) throws IOException {

        return applicationService.applyJob(
                jobId,
                coverLetter,
                resume
        );
    }

    @GetMapping
    public List<ApplicationResponse> getAllApplications() {
        return applicationService.getAllApplications();
    }

    @GetMapping("/{id}")
    public ApplicationResponse getApplication(
            @PathVariable Long id) {

        return applicationService.getApplication(id);
    }

    @PatchMapping("/{id}/status")
    public ApplicationResponse updateStatus(

            @PathVariable Long id,

            @RequestParam ApplicationStatus status) {

        return applicationService.updateStatus(id, status);
    }
}
