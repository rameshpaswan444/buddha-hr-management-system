package com.buddhahr.dashboard.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class DashboardSummaryResponse {

    private Long totalCompanies;

    private Long totalJobs;

    private Long totalApplications;

    private Long totalUsers;

}
