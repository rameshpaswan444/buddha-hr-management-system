package com.buddhahr.mail.service;

import com.buddhahr.contact.entity.ContactMessage;

public interface EmailService {

    void sendPasswordResetEmail(
            String to,
            String resetLink
    );

    void sendContactMessageNotification(ContactMessage savedMessage);
}