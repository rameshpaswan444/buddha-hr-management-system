package com.buddhahr.contact.controller;

import com.buddhahr.contact.dto.request.CreateContactMessageRequest;
import com.buddhahr.contact.dto.response.ContactMessageResponse;
import com.buddhahr.contact.service.ContactMessageService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class ContactMessageController {

    private final ContactMessageService contactMessageService;

    @PostMapping
    public ContactMessageResponse createMessage(
            @Valid @RequestBody CreateContactMessageRequest request
    ) {

        return contactMessageService.createMessage(request);

    }

    @GetMapping
    public Page<ContactMessageResponse> getAllMessages(

            @RequestParam(defaultValue = "0") int page,

            @RequestParam(defaultValue = "10") int size,

            @RequestParam(defaultValue = "createdAt") String sortBy,

            @RequestParam(defaultValue = "desc") String direction

    ) {

        return contactMessageService.getAllMessages(
                page,
                size,
                sortBy,
                direction
        );

    }

    @GetMapping("/{id}")
    public ContactMessageResponse getMessageById(
            @PathVariable Long id
    ) {

        return contactMessageService.getMessageById(id);

    }

    @PutMapping("/{id}/read")
    public ContactMessageResponse markAsRead(
            @PathVariable Long id
    ) {

        return contactMessageService.markAsRead(id);

    }

    @DeleteMapping("/{id}")
    public void deleteMessage(
            @PathVariable Long id
    ) {

        contactMessageService.deleteMessage(id);

    }

}
