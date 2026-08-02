package com.buddhahr.contact.service;

import com.buddhahr.contact.dto.request.CreateContactMessageRequest;
import com.buddhahr.contact.dto.response.ContactMessageResponse;
import org.springframework.data.domain.Page;

public interface ContactMessageService {

    ContactMessageResponse createMessage(
            CreateContactMessageRequest request
    );

    Page<ContactMessageResponse> getAllMessages(
            int page,
            int size,
            String sortBy,
            String direction
    );

    ContactMessageResponse getMessageById(Long id);

    ContactMessageResponse markAsRead(Long id);

    void deleteMessage(Long id);

}
