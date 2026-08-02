package com.buddhahr.dashboard.service;

import com.buddhahr.dashboard.dto.*;

import java.util.List;

public interface DashboardService {

    DashboardResponse getDashboard();

    DashboardSummaryResponse getSummary();

    List<RecentApplicationResponse> getRecentApplications();

    List<RecentUserResponse> getRecentUsers();

    ApplicationStatusSummary getApplicationStatus();

    List<MostAppliedJobResponse> getMostAppliedJobs();

    List<MonthlyRecruitmentResponse> getMonthlyRecruitment();

}
