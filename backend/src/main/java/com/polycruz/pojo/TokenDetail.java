package com.polycruz.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class TokenDetail {

    private String name;
    private String collection_name;
    private String address;
    private String token_id;
    private int chain_id;
    private String minted_date;
    private String mint_date;
    private String token_image_url;
    private String thumbnail_url;
    private List<String> thumbnail_palette;
    private boolean verified;
    private double rarity_score;
    private int rarity_rank;
    private List<SocialMedia> social_media;
    private List<MarketplaceLink> marketplace_links;
    private Price price_latest;
    private Price price_fair_estimate;
    private int hold_time_current;
    private int hold_time_longest;
    private String owned_by;
    private int past_owner_count;

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class SocialMedia {
        private String platform;
        private String url;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class MarketplaceLink {
        // Define fields here when data is available
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Price {
        private String value;
        private String unit;
    }

}
