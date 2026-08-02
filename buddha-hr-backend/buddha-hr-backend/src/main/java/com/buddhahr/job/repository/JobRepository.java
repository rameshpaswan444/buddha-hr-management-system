package com.buddhahr.job.repository;

import com.buddhahr.job.EmploymentType;
import com.buddhahr.job.entity.Job;
import com.buddhahr.job.entity.JobCategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface JobRepository extends JpaRepository<Job, Long> {

    boolean existsByCompanyId(Long companyId);
    long countByActiveTrue();

    @Query("""
            SELECT j
            FROM Job j
            WHERE j.active = true
            AND (:keyword IS NULL OR LOWER(j.title) LIKE LOWER(CONCAT('%', :keyword, '%')))
            AND (:category IS NULL OR j.category = :category)
            AND (:location IS NULL OR j.location = :location)
            AND (:employmentType IS NULL OR j.employmentType = :employmentType)
            """)
    Page<Job> searchJobs(
            @Param("keyword") String keyword,
            @Param("category") JobCategory category,
            @Param("location") String location,
            @Param("employmentType") EmploymentType employmentType,
            Pageable pageable
    );

    Page<Job> findByActiveTrue(Pageable pageable);
}
