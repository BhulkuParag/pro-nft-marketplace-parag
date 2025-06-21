package com.polycruz.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Data
@ConfigurationProperties(prefix = "reservoir")
public class ReservoirApiProperties {
    private String trendingMintsUrl;
    private String collectionsV7Url;
    private String tokens;
}
