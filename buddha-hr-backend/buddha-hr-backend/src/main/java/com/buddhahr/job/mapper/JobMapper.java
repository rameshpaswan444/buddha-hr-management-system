package com.buddhahr.job.mapper;

import com.buddhahr.job.dto.request.CreateJobRequest;
import com.buddhahr.job.dto.response.JobResponse;
import com.buddhahr.job.entity.Job;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface JobMapper {

    @Mapping(target = "company", ignore = true)
    Job toEntity(CreateJobRequest request);

    @Mapping(target = "companyId", source = "company.id")
    @Mapping(target = "companyName", source = "company.name")
    @Mapping(target = "active", source = "active")
    JobResponse toResponse(Job job);
}