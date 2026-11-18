package com.twobrackets.sendhush.core.auth;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Locale;

@RestController
@RequestMapping("/api/auth")
public class AuthConfigController {
    private final AuthProperties authProperties;

    public AuthConfigController(AuthProperties authProperties) {
        this.authProperties = authProperties;
    }

    @GetMapping("/config")
    public AuthConfigResponse getAuthConfig() {
        return new AuthConfigResponse(
                authProperties
                        .getMode()
                        .name()
                        .toLowerCase(Locale.ROOT));
    }
}
