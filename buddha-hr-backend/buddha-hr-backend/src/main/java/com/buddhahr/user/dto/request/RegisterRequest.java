package com.buddhahr.user.dto.request;

import com.buddhahr.user.entity.Gender;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class RegisterRequest {

    @NotBlank(message = "First name is required")
    private String firstName;

    @NotBlank(message = "Last name is required")
    private String lastName;

    @Email(message = "Invalid email")
    @NotBlank(message = "Email is required")
    private String email;

    @Pattern(
            regexp = "^(98|97)\\d{8}$",
            message = "Enter a valid Nepal phone number"
    )
    private String phone;

    @NotBlank(message = "Address is required.")
    private String address;

    private LocalDate dateOfBirth;

    private Gender gender;

    @Size(min = 8, message = "Password must be at least 8 characters")
    private String password;
}
