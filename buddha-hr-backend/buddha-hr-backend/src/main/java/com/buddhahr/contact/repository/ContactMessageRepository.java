package com.buddhahr.contact.repository;

import com.buddhahr.contact.entity.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactMessageRepository
        extends JpaRepository<ContactMessage, Long> {

    long countByIsReadFalse();

}
