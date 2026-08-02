package com.buddhahr.dashboard.dto;
import lombok.Builder;
import lombok.Getter;
import java.util.List;

@Getter
@Builder
public class DashboardResponse {

    private DashboardSummaryResponse summary;

    private ApplicationStatusSummary applicationStatus;

    private List<RecentApplicationResponse> recentApplications;

    private List<RecentUserResponse> recentUsers;

    private List<MostAppliedJobResponse> mostAppliedJobs;

    private List<MonthlyRecruitmentResponse> monthlyRecruitment;

}