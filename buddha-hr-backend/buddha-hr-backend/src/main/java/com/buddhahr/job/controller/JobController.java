package com.buddhahr.job.controller;

import com.buddhahr.job.EmploymentType;
import com.buddhahr.job.dto.request.CreateJobRequest;
import com.buddhahr.job.dto.response.JobResponse;
import com.buddhahr.job.entity.JobCategory;
import com.buddhahr.job.service.JobService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class JobController {

    private final JobService jobService;

    @PostMapping
    public JobResponse createJob(@Valid @RequestBody CreateJobRequest request) {
        return jobService.createJob(request);
    }

    @GetMapping
    public Page<JobResponse> getJobs(

            @RequestParam(required = false) String keyword,

            @RequestParam(required = false) JobCategory category,

            @RequestParam(required = false) String location,

            @RequestParam(required = false) EmploymentType employmentType,

            @RequestParam(defaultValue = "0") int page,

            @RequestParam(defaultValue = "10") int size,

            @RequestParam(defaultValue = "createdAt") String sortBy,

            @RequestParam(defaultValue = "desc") String direction
    ) {

        boolean hasFilter =
                (keyword != null && !keyword.isBlank()) ||
                        category != null ||
                        (location != null && !location.isBlank()) ||
                        employmentType != null;

        if (hasFilter) {

            return jobService.searchJobs(
                    keyword,
                    category,
                    location,
                    employmentType,
                    page,
                    size
            );

        }

        return jobService.getAllJobs(
                page,
                size,
                sortBy,
                direction
        );

    }

    @GetMapping("/{id}")
    public JobResponse getJobById(@PathVariable Long id) {
        return jobService.getJobById(id);
    }

    @PutMapping("/{id}")
    public JobResponse updateJob(
            @PathVariable Long id,
            @Valid @RequestBody CreateJobRequest request) {

        return jobService.updateJob(id, request);
    }

    @PatchMapping("/{id}/archive")
    public void archiveJob(@PathVariable Long id) {
        jobService.archiveJob(id);
    }

    @PatchMapping("/{id}/restore")
    public void restoreJob(@PathVariable Long id) {
        jobService.restoreJob(id);
    }

    @GetMapping("/admin")
    public Page<JobResponse> getAllJobsForAdmin(

            @RequestParam(defaultValue = "0") int page,

            @RequestParam(defaultValue = "10") int size,

            @RequestParam(defaultValue = "createdAt") String sortBy,

            @RequestParam(defaultValue = "desc") String direction
    ) {

        return jobService.getAllJobsForAdmin(
                page,
                size,
                sortBy,
                direction
        );

    }

}
