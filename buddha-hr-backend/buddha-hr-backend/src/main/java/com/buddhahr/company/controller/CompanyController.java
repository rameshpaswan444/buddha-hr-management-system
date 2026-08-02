package com.buddhahr.company.controller;

import com.buddhahr.company.dto.request.CompanyRequest;
import com.buddhahr.company.dto.response.CompanyResponse;
import com.buddhahr.company.service.CompanyService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/companies")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class CompanyController {

    private final CompanyService companyService;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public CompanyResponse createCompany(

            @RequestParam String name,

            @RequestParam String website,

            @RequestParam String email,

            @RequestParam String phone,

            @RequestParam String address,

            @RequestParam String description,

            @RequestParam(required = false) MultipartFile logo) throws IOException {

        CompanyRequest request = CompanyRequest.builder()
                .name(name)
                .website(website)
                .email(email)
                .phone(phone)
                .address(address)
                .description(description)
                .build();

        return companyService.createCompany(request, logo);
    }

    @PutMapping(
            value="/{id}",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public CompanyResponse updateCompany(

            @PathVariable Long id,

            @RequestParam String name,

            @RequestParam String website,

            @RequestParam String email,

            @RequestParam String phone,

            @RequestParam String address,

            @RequestParam String description,

            @RequestParam(required = false)
            MultipartFile logo

    ) throws IOException {

        CompanyRequest request = CompanyRequest.builder()
                .name(name)
                .website(website)
                .email(email)
                .phone(phone)
                .address(address)
                .description(description)
                .build();

        return companyService.updateCompany(id, request, logo);
    }

    @DeleteMapping("/{id}")
    public void deleteCompany(
            @PathVariable Long id) {

        companyService.deleteCompany(id);
    }

    @GetMapping("/{id}")
    public CompanyResponse getCompany(
            @PathVariable Long id) {

        return companyService.getCompany(id);
    }

    @GetMapping
    public Page<CompanyResponse> getAllCompanies(

            @RequestParam(defaultValue = "0") int page,

            @RequestParam(defaultValue = "10") int size,

            @RequestParam(defaultValue = "name") String sortBy,

            @RequestParam(defaultValue = "asc") String direction) {

        return companyService.getAllCompanies(
                page,
                size,
                sortBy,
                direction
        );
    }

    @GetMapping("/search")
    public Page<CompanyResponse> searchCompanies(

            @RequestParam String keyword,

            @RequestParam(defaultValue = "0") int page,

            @RequestParam(defaultValue = "10") int size) {

        return companyService.searchCompanies(
                keyword,
                page,
                size
        );
    }

    @GetMapping("/active")
    public Page<CompanyResponse> getActiveCompanies(

            @RequestParam(defaultValue = "0") int page,

            @RequestParam(defaultValue = "10") int size) {

        return companyService.getActiveCompanies(
                page,
                size
        );
    }

}
