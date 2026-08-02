package com.buddhahr.job.dto.response;

import com.buddhahr.job.EmploymentType;
import com.buddhahr.job.entity.JobCategory;
import lombok.Builder;
import lombok.Getter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Builder
public class JobResponse {

    private Long id;

    private String title;

    private Long companyId;

    private String companyName;

    private String location;

    private EmploymentType employmentType;

    private JobCategory category;

    private String experience;

    private BigDecimal salary;

    private Integer vacancies;

    private String description;

    private String requirements;

    private LocalDate deadline;

    private Boolean active;

}
