package com.buddhahr.dashboard.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MonthlyRecruitmentResponse {

    private Integer month;

    private Long applications;

}
