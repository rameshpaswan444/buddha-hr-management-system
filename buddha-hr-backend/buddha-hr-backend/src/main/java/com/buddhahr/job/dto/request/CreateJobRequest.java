package com.buddhahr.job.dto.request;

import com.buddhahr.job.EmploymentType;
import com.buddhahr.job.entity.JobCategory;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
public class CreateJobRequest {

    @NotBlank(message = "Job title is required")
    private String title;

    @NotNull(message = "Company is required")
    private Long companyId;

    @NotBlank(message = "Location is required")
    private String location;

    @NotNull(message = "Employment type is required")
    private EmploymentType employmentType;

    @NotNull(message = "Category is required")
    private JobCategory category;

    private String experience;

    private BigDecimal salary;

    private Integer vacancies;

    private String description;

    private String requirements;

    private LocalDate deadline;
}
