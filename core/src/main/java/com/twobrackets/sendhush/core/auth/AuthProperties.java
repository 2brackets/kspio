package com.twobrackets.sendhush.core.auth;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "app.auth")
public class AuthProperties {
    private AuthMode mode = AuthMode.LOCAL;

    public AuthMode getMode() {
        return mode;
    }

    public void setMode(AuthMode mode) {
        this.mode = mode;
    }
}
