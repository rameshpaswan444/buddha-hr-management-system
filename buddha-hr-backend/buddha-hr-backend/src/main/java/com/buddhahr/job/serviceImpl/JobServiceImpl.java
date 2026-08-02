package com.buddhahr.job.serviceImpl;

import com.buddhahr.company.entity.Company;
import com.buddhahr.company.repository.CompanyRepository;
import com.buddhahr.exception.ResourceNotFoundException;
import com.buddhahr.job.EmploymentType;
import com.buddhahr.job.dto.request.CreateJobRequest;
import com.buddhahr.job.dto.response.JobResponse;
import com.buddhahr.job.entity.Job;
import com.buddhahr.job.entity.JobCategory;
import com.buddhahr.job.mapper.JobMapper;
import com.buddhahr.job.repository.JobRepository;
import com.buddhahr.job.service.JobService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JobServiceImpl implements JobService {

    private final JobRepository jobRepository;
    private final JobMapper jobMapper;
    private final CompanyRepository companyRepository;

    @Override
    public JobResponse createJob(CreateJobRequest request) {

        Company company = companyRepository.findById(request.getCompanyId())
                .orElseThrow(() ->
                        new ResourceNotFoundException("Company not found."));

        Job job = jobMapper.toEntity(request);

        job.setCompany(company);

        Job savedJob = jobRepository.save(job);

        return jobMapper.toResponse(savedJob);
    }
    @Override
    public Page<JobResponse> getAllJobs(
            int page,
            int size,
            String sortBy,
            String direction
    ) {

        Sort sort = direction.equalsIgnoreCase("desc")
                ? Sort.by(sortBy).descending()
                : Sort.by(sortBy).ascending();

        Pageable pageable = PageRequest.of(page, size, sort);

        return jobRepository.findByActiveTrue(pageable)
                .map(jobMapper::toResponse);
    }

    @Override
    public JobResponse getJobById(Long id) {

        Job job = jobRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Job not found."));

        return jobMapper.toResponse(job);
    }

    @Override
    public JobResponse updateJob(Long id, CreateJobRequest request) {

        Job job = jobRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Job not found."));

        Company company = companyRepository.findById(request.getCompanyId())
                .orElseThrow(() ->
                        new ResourceNotFoundException("Company not found."));

        job.setTitle(request.getTitle());
        job.setCompany(company);
        job.setLocation(request.getLocation());
        job.setEmploymentType(request.getEmploymentType());
        job.setCategory(request.getCategory());
        job.setExperience(request.getExperience());
        job.setSalary(request.getSalary());
        job.setVacancies(request.getVacancies());
        job.setDescription(request.getDescription());
        job.setRequirements(request.getRequirements());
        job.setDeadline(request.getDeadline());

        Job updatedJob = jobRepository.save(job);

        return jobMapper.toResponse(updatedJob);
    }

    @Override
    public void archiveJob(Long id) {

        Job job = jobRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Job not found."));

        job.setActive(false);

        jobRepository.save(job);
    }

    @Override
    public void restoreJob(Long id) {

        Job job = jobRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Job not found."));

        job.setActive(true);

        jobRepository.save(job);
    }

    @Override
    public Page<JobResponse> searchJobs(
            String keyword,
            JobCategory category,
            String location,
            EmploymentType employmentType,
            int page,
            int size
    ) {

        Pageable pageable = PageRequest.of(page, size);

        Page<Job> jobs = jobRepository.searchJobs(
                keyword == null || keyword.isBlank() ? null : keyword,
                category,
                location == null || location.isBlank() ? null : location,
                employmentType,
                pageable
        );

        return jobs.map(jobMapper::toResponse);
    }

    @Override
    public Page<JobResponse> getAllJobsForAdmin(
            int page,
            int size,
            String sortBy,
            String direction
    ) {

        Sort sort = direction.equalsIgnoreCase("desc")
                ? Sort.by(sortBy).descending()
                : Sort.by(sortBy).ascending();

        Pageable pageable = PageRequest.of(page, size, sort);

        return jobRepository.findAll(pageable)
                .map(jobMapper::toResponse);
    }
}
