package com.buddhahr.role.repository;

import com.buddhahr.role.entity.Role;
import com.buddhahr.role.entity.RoleType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findByName(RoleType name);
}
