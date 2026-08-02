package com.buddhahr.application.serviceImpl;

import com.buddhahr.application.dto.response.ApplicationResponse;
import com.buddhahr.application.entity.Application;
import com.buddhahr.application.entity.ApplicationStatus;
import com.buddhahr.application.mapper.ApplicationMapper;
import com.buddhahr.application.repository.ApplicationRepository;
import com.buddhahr.application.service.ApplicationService;
import com.buddhahr.exception.DuplicateApplicationException;
import com.buddhahr.exception.ResourceNotFoundException;
import com.buddhahr.job.entity.Job;
import com.buddhahr.job.repository.JobRepository;
import com.buddhahr.user.entity.User;
import com.buddhahr.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ApplicationServiceImpl implements ApplicationService {

    private final ApplicationRepository applicationRepository;
    private final JobRepository jobRepository;
    private final UserRepository userRepository;
    private final ApplicationMapper applicationMapper;

    @Override
    public ApplicationResponse applyJob(
            Long jobId,
            String coverLetter,
            MultipartFile resume) throws IOException {

        String uploadDir = "uploads/resumes/";

        java.nio.file.Files.createDirectories(
                java.nio.file.Paths.get(uploadDir)
        );
        String fileName = System.currentTimeMillis()
                + "_"
                + resume.getOriginalFilename();

        Path filePath = Paths.get(uploadDir, fileName);

        resume.transferTo(filePath);

        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();

        User user = userRepository.findByEmail(authentication.getName())
                .orElseThrow(() ->
                        new ResourceNotFoundException("User not found."));

        Job job = jobRepository.findById(jobId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Job not found."));

        applicationRepository
                .findByApplicantIdAndJobId(user.getId(), job.getId())
                .ifPresent(application -> {
                    throw new DuplicateApplicationException(
                            "You have already applied for this job."
                    );
                });

        Application application = Application.builder()
                .job(job)
                .applicant(user)
                .coverLetter(coverLetter)
                .resumePath("/uploads/resumes/" + fileName)
                .build();

        Application savedApplication =
                applicationRepository.save(application);

        return applicationMapper.toResponse(savedApplication);

    }

    @Override
    public List<ApplicationResponse> getAllApplications() {

        return applicationRepository.findAll()
                .stream()
                .map(applicationMapper::toResponse)
                .toList();
    }

    @Override
    public ApplicationResponse getApplication(Long id) {

        Application application = applicationRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Application not found."));

        return applicationMapper.toResponse(application);
    }

    @Override
    public ApplicationResponse updateStatus(
            Long id,
            ApplicationStatus status) {

        Application application = applicationRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Application not found."));

        application.setStatus(status);

        return applicationMapper.toResponse(
                applicationRepository.save(application)
        );
    }
}
