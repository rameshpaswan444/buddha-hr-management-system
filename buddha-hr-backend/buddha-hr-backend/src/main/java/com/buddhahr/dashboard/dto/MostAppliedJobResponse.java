package com.buddhahr.dashboard.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MostAppliedJobResponse {

    private String jobTitle;

    private Long applicationCount;

}
