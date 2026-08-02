package com.buddhahr.company.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class CompanyRequest {

    @NotBlank(message = "Company name is required")
    private String name;

    private String website;

    private String logoUrl;

    @Email(message = "Invalid email")
    private String email;

    private String phone;

    private String address;

    private String description;

}
