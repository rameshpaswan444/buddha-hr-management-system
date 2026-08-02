package com.buddhahr.contact.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
public class ContactMessageResponse {

    private Long id;

    private String fullName;

    private String email;

    private String phone;

    private String subject;

    private String message;

    private Boolean isRead;

    private LocalDateTime createdAt;

}
