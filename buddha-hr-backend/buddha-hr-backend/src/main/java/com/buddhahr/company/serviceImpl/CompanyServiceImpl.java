package com.buddhahr.company.serviceImpl;

import com.buddhahr.common.util.FileUploadUtil;
import com.buddhahr.company.dto.request.CompanyRequest;
import com.buddhahr.company.dto.response.CompanyResponse;
import com.buddhahr.company.entity.Company;
import com.buddhahr.company.mapper.CompanyMapper;
import com.buddhahr.company.repository.CompanyRepository;
import com.buddhahr.company.service.CompanyService;
import com.buddhahr.exception.CompanyDeleteException;
import com.buddhahr.exception.DuplicateResourceException;
import com.buddhahr.exception.ResourceNotFoundException;
import com.buddhahr.job.repository.JobRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CompanyServiceImpl implements CompanyService {

    private final CompanyRepository companyRepository;
    private final CompanyMapper companyMapper;
    private final FileUploadUtil fileUploadUtil;
    private final JobRepository jobRepository;


    @Override
    public CompanyResponse createCompany(
            CompanyRequest request,
            MultipartFile logo
    ) throws IOException {

        companyRepository.findByEmail(request.getEmail())
                .ifPresent(company -> {
                    throw new DuplicateResourceException(
                            "Company with this email already exists."
                    );
                });

        Company company = companyMapper.toEntity(request);

        if (logo != null && !logo.isEmpty()) {

            String fileName = fileUploadUtil.uploadFile(
                    logo,
                    "uploads/company"
            );

            company.setLogoUrl("/uploads/company/" + fileName);
        }

        Company savedCompany = companyRepository.save(company);

        return companyMapper.toResponse(savedCompany);
    }

    @Override
    public CompanyResponse updateCompany(
            Long id,
            CompanyRequest request,
            MultipartFile logo) throws IOException {

        Company company = companyRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Company not found."));

        company.setName(request.getName());
        company.setWebsite(request.getWebsite());
        company.setEmail(request.getEmail());
        company.setPhone(request.getPhone());
        company.setAddress(request.getAddress());
        company.setDescription(request.getDescription());

        // Upload new logo only if selected
        System.out.println("Logo is null: " + (logo == null));

        if (logo != null) {
            System.out.println("Logo name: " + logo.getOriginalFilename());
            System.out.println("Logo size: " + logo.getSize());
        }
        if (logo != null && !logo.isEmpty()) {

            String uploadDir = "uploads/company/";

            Files.createDirectories(Paths.get(uploadDir));

            String fileName =
                    UUID.randomUUID() + "_" + logo.getOriginalFilename();

            Path filePath = Paths.get(uploadDir, fileName);

            logo.transferTo(filePath);

            company.setLogoUrl("/uploads/company/" + fileName);
        }

        Company updatedCompany = companyRepository.save(company);

        return companyMapper.toResponse(updatedCompany);
    }

    @Override
    public void deleteCompany(Long id) {

        Company company = companyRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Company not found."));

        if (jobRepository.existsByCompanyId(id)) {
            throw new CompanyDeleteException(
                    "Cannot delete company because it has existing job postings."
            );
        }

        if (company.getLogoUrl() != null && !company.getLogoUrl().isBlank()) {
            try {
                String filePath = company.getLogoUrl().replaceFirst("/", "");
                Files.deleteIfExists(Paths.get(filePath));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        companyRepository.delete(company);
    }

    @Override
    public CompanyResponse getCompany(Long id) {

        Company company = companyRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Company not found."));

        return companyMapper.toResponse(company);
    }

    @Override
    public Page<CompanyResponse> getAllCompanies(
            int page,
            int size,
            String sortBy,
            String direction) {

        Sort sort = direction.equalsIgnoreCase("desc")
                ? Sort.by(sortBy).descending()
                : Sort.by(sortBy).ascending();

        Pageable pageable = PageRequest.of(page, size, sort);

        return companyRepository.findAll(pageable)
                .map(companyMapper::toResponse);
    }

    @Override
    public Page<CompanyResponse> searchCompanies(
            String keyword,
            int page,
            int size) {

        Pageable pageable = PageRequest.of(
                page,
                size,
                Sort.by("name").ascending()
        );

        return companyRepository
                .findByNameContainingIgnoreCase(keyword, pageable)
                .map(companyMapper::toResponse);
    }

    @Override
    public Page<CompanyResponse> getActiveCompanies(
            int page,
            int size) {

        Pageable pageable = PageRequest.of(
                page,
                size,
                Sort.by("name").ascending()
        );

        return companyRepository
                .findByActiveTrue(pageable)
                .map(companyMapper::toResponse);
    }
}
