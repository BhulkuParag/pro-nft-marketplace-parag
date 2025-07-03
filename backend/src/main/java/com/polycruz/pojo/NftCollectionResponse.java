package com.polycruz.pojo;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class NftCollectionResponse {

    @JsonProperty("contract_address")
    private String contractAddress;

    private String name;

    @JsonProperty("chain_id")
    private int chainId;

    private String category;

    @JsonProperty("thumbnail_url")
    private String thumbnailUrl;

    @JsonProperty("thumbnail_palette")
    private List<String> thumbnailPalette;

    private boolean verified;

    @JsonProperty("nft_count")
    private int nftCount;

    @JsonProperty("start_date")
    private LocalDateTime startDate;

    private String description;

    @JsonProperty("social_media")
    private List<SocialMedia> socialMedia;

    @JsonProperty("marketplace_links")
    private List<Object> marketplaceLinks; // Use a specific class if structure is known
}

