package com.buddhahr.dashboard.serviceImpl;

import com.buddhahr.application.entity.ApplicationStatus;
import com.buddhahr.application.repository.ApplicationRepository;
import com.buddhahr.company.repository.CompanyRepository;
import com.buddhahr.dashboard.dto.*;
import com.buddhahr.dashboard.service.DashboardService;
import com.buddhahr.job.repository.JobRepository;
import com.buddhahr.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DashboardServiceImpl implements DashboardService {

    private final UserRepository userRepository;

    private final JobRepository jobRepository;

    private final ApplicationRepository applicationRepository;

    private final CompanyRepository companyRepository;

    @Override
    public DashboardResponse getDashboard() {

        return DashboardResponse.builder()

                .summary(getSummary())

                .applicationStatus(getApplicationStatus())

                .recentApplications(getRecentApplications())

                .recentUsers(getRecentUsers())

                .mostAppliedJobs(getMostAppliedJobs())

                .monthlyRecruitment(getMonthlyRecruitment())

                .build();

    }

    @Override
    public DashboardSummaryResponse getSummary() {

        return DashboardSummaryResponse.builder()

                .totalCompanies(companyRepository.count())

                .totalJobs(jobRepository.count())

                .totalApplications(applicationRepository.count())

                .totalUsers(userRepository.count())

                .build();

    }

    @Override
    public List<RecentApplicationResponse> getRecentApplications() {

       return applicationRepository
                        .findAllByOrderByCreatedAtDesc(PageRequest.of(0, 10))
                        .stream()
                        .map(application -> RecentApplicationResponse.builder()
                                .applicationId(application.getId())
                                .applicantName(
                                        application.getApplicant().getFirstName()
                                                + " "
                                                + application.getApplicant().getLastName()
                                )
                                .jobTitle(application.getJob().getTitle())
                                .status(application.getStatus())
                                .appliedAt(application.getCreatedAt())
                                .build())
                        .toList();
    }

    @Override
    public List<RecentUserResponse> getRecentUsers() {

        return userRepository
                        .findAllByOrderByCreatedAtDesc(PageRequest.of(0, 10))
                        .stream()
                        .map(user -> RecentUserResponse.builder()
                                .id(user.getId())
                                .fullName(
                                        user.getFirstName()
                                                + " "
                                                + user.getLastName()
                                )
                                .email(user.getEmail())
                                .role(user.getRole().getName().name())
                                .registeredAt(user.getCreatedAt())
                                .build())
                        .toList();
    }

    @Override
    public ApplicationStatusSummary getApplicationStatus() {

        return ApplicationStatusSummary.builder()

                .applied(
                        applicationRepository.countByStatus(
                                ApplicationStatus.APPLIED))

                .underReview(
                        applicationRepository.countByStatus(
                                ApplicationStatus.UNDER_REVIEW))

                .shortlisted(
                        applicationRepository.countByStatus(
                                ApplicationStatus.SHORTLISTED))

                .interviewScheduled(
                        applicationRepository.countByStatus(
                                ApplicationStatus.INTERVIEW_SCHEDULED))

                .selected(
                        applicationRepository.countByStatus(
                                ApplicationStatus.SELECTED))

                .rejected(
                        applicationRepository.countByStatus(
                                ApplicationStatus.REJECTED))

                .build();

    }

    @Override
    public List<MostAppliedJobResponse> getMostAppliedJobs() {

        return
                applicationRepository.findMostAppliedJobs(
                        PageRequest.of(0, 5)
                );
    }

    @Override
    public List<MonthlyRecruitmentResponse> getMonthlyRecruitment() {

        int currentYear = LocalDate.now().getYear();

        return
                applicationRepository.getMonthlyRecruitment(currentYear)
                        .stream()
                        .map(row -> new MonthlyRecruitmentResponse(
                                ((Integer) row[0]),
                                ((Long) row[1])
                        ))
                        .toList();
    }

}
