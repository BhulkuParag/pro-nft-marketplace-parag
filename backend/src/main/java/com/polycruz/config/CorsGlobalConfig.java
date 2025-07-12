package com.polycruz.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsGlobalConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // all paths
                        .allowedOrigins("*") // allow all domains
                        .allowedMethods("*") // GET, POST, PUT, DELETE, etc.
                        .allowedHeaders("*"); // allow all headers
            }
        };
    }
}


