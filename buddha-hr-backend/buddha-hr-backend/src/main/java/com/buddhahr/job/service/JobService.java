package com.buddhahr.job.service;

import com.buddhahr.job.EmploymentType;
import com.buddhahr.job.dto.request.CreateJobRequest;
import com.buddhahr.job.dto.response.JobResponse;
import com.buddhahr.job.entity.JobCategory;
import org.springframework.data.domain.Page;

import java.util.List;

public interface JobService {

    JobResponse createJob(CreateJobRequest request);

    Page<JobResponse> getAllJobs(
            int page,
            int size,
            String sortBy,
            String direction
    );

    JobResponse getJobById(Long id);

    JobResponse updateJob(Long id, CreateJobRequest request);

  Page<JobResponse> searchJobs(
        String keyword,
        JobCategory category,
        String location,
        EmploymentType employmentType,
        int page,
        int size
 );
    Page<JobResponse> getAllJobsForAdmin(
            int page,
            int size,
            String sortBy,
            String direction
    );

    void archiveJob(Long id);
    void restoreJob(Long id);

}



