package com.buddhahr.dashboard.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ApplicationStatusSummary {

    private Long applied;

    private Long underReview;

    private Long shortlisted;

    private Long interviewScheduled;

    private Long selected;

    private Long rejected;

}
