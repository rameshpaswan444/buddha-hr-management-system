package com.buddhahr.company.service;

import com.buddhahr.company.dto.request.CompanyRequest;
import com.buddhahr.company.dto.response.CompanyResponse;
import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface CompanyService {

    CompanyResponse createCompany(
            CompanyRequest request,
            MultipartFile logo
    ) throws IOException;

    CompanyResponse updateCompany(Long id,
                  CompanyRequest request,
                  MultipartFile logo)throws IOException;

    void deleteCompany(Long id);

    CompanyResponse getCompany(Long id);

    Page<CompanyResponse> getAllCompanies(
            int page,
            int size,
            String sortBy,
            String direction
    );

    Page<CompanyResponse> searchCompanies(
            String keyword,
            int page,
            int size
    );

    Page<CompanyResponse> getActiveCompanies(
            int page,
            int size
    );

}
