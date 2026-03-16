package com.auth.authentication.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class PublicController {
    @GetMapping("/public")
    public String publicContent() {
        return "Public content accessible to everyone";
    }
}
