package com.buddhahr.company.mapper;

import com.buddhahr.company.dto.request.CompanyRequest;
import com.buddhahr.company.dto.response.CompanyResponse;
import com.buddhahr.company.entity.Company;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CompanyMapper {

    Company toEntity(CompanyRequest request);

    CompanyResponse toResponse(Company company);

}
