package com.buddhahr.contact.mapper;

import com.buddhahr.contact.dto.request.CreateContactMessageRequest;
import com.buddhahr.contact.dto.response.ContactMessageResponse;
import com.buddhahr.contact.entity.ContactMessage;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ContactMessageMapper {

    ContactMessage toEntity(CreateContactMessageRequest request);

    ContactMessageResponse toResponse(ContactMessage contactMessage);

}
