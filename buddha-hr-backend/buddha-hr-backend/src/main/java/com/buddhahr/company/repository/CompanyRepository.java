package com.buddhahr.company.repository;

import com.buddhahr.company.entity.Company;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CompanyRepository extends JpaRepository<Company, Long> {

    Optional<Company> findByEmail(String email);

    Page<Company> findByNameContainingIgnoreCase(
            String keyword,
            Pageable pageable
    );

    Page<Company> findByActiveTrue(Pageable pageable);

}
