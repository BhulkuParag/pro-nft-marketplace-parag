package com.polycruz.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class SaleToken {
    private String contract;
    private String tokenId;
    private String name;
    private String image;
    private TokenMetadata metadata;
    private boolean isSpam;
    private boolean isNsfw;
    private double rarityScore;
    private int rarityRank;

    @JsonProperty("tokenName")
    public String getName() {
        return name;
    }

    @JsonProperty("tokenImage")
    public String getImage() {
        return image;
    }
}