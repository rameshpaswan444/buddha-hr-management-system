package com.buddhahr.mail.serviceImpl;

import com.buddhahr.contact.entity.ContactMessage;
import com.buddhahr.mail.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailServiceImpl implements EmailService {

    private final JavaMailSender mailSender;

    @Override
    public void sendPasswordResetEmail(
            String to,
            String resetLink
    ) {

        SimpleMailMessage message =
                new SimpleMailMessage();

        message.setTo(to);

        message.setSubject("Password Reset Request");

        message.setText(
                "Hello,\n\n"
                        + "Click the link below to reset your password:\n\n"
                        + resetLink
                        + "\n\n"
                        + "This link expires in 15 minutes.\n\n"
                        + "If you didn't request this, simply ignore this email."
        );

        mailSender.send(message);

    }

    @Override
    public void sendContactMessageNotification(
            ContactMessage contactMessage
    ) {

        SimpleMailMessage mail = new SimpleMailMessage();

        mail.setTo("raj168ramesh@gmail.com");   // <-- Replace with your company email

        mail.setSubject(
                "New Contact Message - " +
                        contactMessage.getSubject()
        );

        mail.setText(
                "A new contact message has been received.\n\n" +

                        "Name: " + contactMessage.getFullName() + "\n" +

                        "Email: " + contactMessage.getEmail() + "\n" +

                        "Phone: " + contactMessage.getPhone() + "\n\n" +

                        "Subject: " + contactMessage.getSubject() + "\n\n" +

                        "Message:\n" +

                        contactMessage.getMessage()
        );

        mailSender.send(mail);

    }
}
