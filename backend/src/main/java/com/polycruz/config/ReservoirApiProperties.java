package com.polycruz.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Data
@ConfigurationProperties(prefix = "reservoir")
public class ReservoirApiProperties {
    private String trendingMintsUrl;
    private String collectionsV7Url;
    private String tokens;
    private String activityUrl;
    private String askCancelUrl;
    private String salesUrl;
    private String trendingApi;
    private String topSales;
    private String trendingMints;
    private String tokenDetailUrl;
    private String apiKey;
    private String statsUrl;
    private String aiValuationonLoad;
    private String topTrader;
    private String collectionActivity;
    private String collectionSearch;
}
