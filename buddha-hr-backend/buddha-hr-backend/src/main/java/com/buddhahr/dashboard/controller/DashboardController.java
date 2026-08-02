package com.buddhahr.dashboard.controller;

import com.buddhahr.application.dto.response.ApplicationResponse;
import com.buddhahr.dashboard.dto.*;
import com.buddhahr.dashboard.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class DashboardController {

    private final DashboardService dashboardService;

    @GetMapping
    public DashboardResponse getDashboard() {

        return dashboardService.getDashboard();

    }

    @GetMapping("/summary")
    public DashboardSummaryResponse getSummary() {
        return dashboardService.getSummary();
    }

    @GetMapping("/recent-applications")
    public List<RecentApplicationResponse> getRecentApplications() {
        return dashboardService.getRecentApplications();
    }

    @GetMapping("/recent-users")
    public List<RecentUserResponse> getRecentUsers() {
        return dashboardService.getRecentUsers();
    }

    @GetMapping("/application-status")
    public ApplicationStatusSummary getApplicationStatus() {
        return dashboardService.getApplicationStatus();
    }

    @GetMapping("/most-applied-jobs")
    public List<MostAppliedJobResponse> getMostAppliedJobs() {
        return dashboardService.getMostAppliedJobs();
    }

    @GetMapping("/monthly-recruitment")
    public List<MonthlyRecruitmentResponse> getMonthlyRecruitment() {
        return dashboardService.getMonthlyRecruitment();
    }


}
