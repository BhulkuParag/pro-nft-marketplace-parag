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
	                registry.addMapping("/**") // Applies to all routes
	                        .allowedOrigins("*") // Allow all origins (public access)
	                        .allowedMethods("*")
	                        .allowedHeaders("*") // Allow all headers
	                        .exposedHeaders("*") // Expose all headers
	                        .allowCredentials(false); // no cookies or auth headers
	            }
	        };
	    }
}


