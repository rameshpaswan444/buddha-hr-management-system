package com.buddhahr.auth.service;

import com.buddhahr.auth.dto.request.ForgotPasswordRequest;
import com.buddhahr.auth.dto.request.LoginRequest;
import com.buddhahr.auth.dto.request.ResetPasswordRequest;
import com.buddhahr.auth.dto.response.LoginResponse;

public interface AuthService {

    LoginResponse login(LoginRequest request);
    void forgotPassword(ForgotPasswordRequest request);

    void resetPassword(ResetPasswordRequest request);
}
