package com.buddhahr.application.mapper;

import com.buddhahr.application.dto.response.ApplicationResponse;
import com.buddhahr.application.entity.Application;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ApplicationMapper {

    @Mapping(target = "jobId", source = "job.id")
    @Mapping(target = "jobTitle", source = "job.title")
    @Mapping(target = "applicantName",
            expression = "java(application.getApplicant().getFirstName() + \" \" + application.getApplicant().getLastName())")
    @Mapping(target = "applicantEmail", source = "applicant.email")
    @Mapping(target = "resumePath", source = "resumePath")
    ApplicationResponse toResponse(Application application);

}
