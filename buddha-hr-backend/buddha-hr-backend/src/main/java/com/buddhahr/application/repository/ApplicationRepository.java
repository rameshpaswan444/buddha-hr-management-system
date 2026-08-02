package com.buddhahr.application.repository;

import com.buddhahr.application.entity.Application;
import com.buddhahr.application.entity.ApplicationStatus;
import com.buddhahr.dashboard.dto.MostAppliedJobResponse;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ApplicationRepository extends JpaRepository<Application, Long> {

    Optional<Application> findByApplicantIdAndJobId(
            Long applicantId,
            Long jobId
    );

    long count();

    long countByStatus(ApplicationStatus status);

    List<Application> findAllByOrderByCreatedAtDesc(Pageable pageable);

    @Query("""
       SELECT new com.buddhahr.dashboard.dto.MostAppliedJobResponse(
           a.job.title,
           COUNT(a)
       )
       FROM Application a
       GROUP BY a.job.id, a.job.title
       ORDER BY COUNT(a) DESC
       """)
    List<MostAppliedJobResponse> findMostAppliedJobs(Pageable pageable);

    @Query("""
       SELECT
           MONTH(a.createdAt),
           COUNT(a)
       FROM Application a
       WHERE YEAR(a.createdAt) = :year
       GROUP BY MONTH(a.createdAt)
       ORDER BY MONTH(a.createdAt)
       """)
    List<Object[]> getMonthlyRecruitment(@Param("year") int year);



}
