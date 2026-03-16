package com.auth.authentication.dto;

import java.time.Instant;
import com.auth.authentication.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    private String email;

    private String name;

    private String password;

    private Instant createdAt = Instant.now();

    private Role role;
}
