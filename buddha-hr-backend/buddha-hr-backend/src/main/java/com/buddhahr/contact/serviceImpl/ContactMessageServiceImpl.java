package com.buddhahr.contact.serviceImpl;

import com.buddhahr.contact.dto.request.CreateContactMessageRequest;
import com.buddhahr.contact.dto.response.ContactMessageResponse;
import com.buddhahr.contact.entity.ContactMessage;
import com.buddhahr.contact.mapper.ContactMessageMapper;
import com.buddhahr.contact.repository.ContactMessageRepository;
import com.buddhahr.contact.service.ContactMessageService;

import com.buddhahr.exception.ResourceNotFoundException;
import com.buddhahr.mail.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContactMessageServiceImpl
        implements ContactMessageService {

    private final ContactMessageRepository repository;

    private final ContactMessageMapper mapper;

    private final EmailService emailService;

    @Override
    public ContactMessageResponse createMessage(
            CreateContactMessageRequest request
    ) {

        ContactMessage contactMessage =
                mapper.toEntity(request);

        ContactMessage savedMessage =
                repository.save(contactMessage);

        emailService.sendContactMessageNotification(
                savedMessage
        );

        return mapper.toResponse(savedMessage);

    }

    @Override
    public Page<ContactMessageResponse> getAllMessages(
            int page,
            int size,
            String sortBy,
            String direction
    ) {

        Sort sort = direction.equalsIgnoreCase("asc")
                ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();

        Pageable pageable =
                PageRequest.of(page, size, sort);

        return repository.findAll(pageable)
                .map(mapper::toResponse);

    }

    @Override
    public ContactMessageResponse getMessageById(Long id) {

        ContactMessage message =
                repository.findById(id)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Message not found."
                                ));

        return mapper.toResponse(message);

    }

    @Override
    public ContactMessageResponse markAsRead(Long id) {

        ContactMessage message =
                repository.findById(id)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Message not found."
                                ));

        message.setIsRead(true);

        return mapper.toResponse(
                repository.save(message)
        );

    }

    @Override
    public void deleteMessage(Long id) {

        ContactMessage message =
                repository.findById(id)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Message not found."
                                ));

        repository.delete(message);

    }

}