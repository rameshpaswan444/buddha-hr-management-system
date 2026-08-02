package com.buddhahr.company.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CompanyResponse {

    private Long id;

    private String name;

    private String website;

    private String logoUrl;

    private String email;

    private String phone;

    private String address;

    private String description;

    private Boolean active;

}
