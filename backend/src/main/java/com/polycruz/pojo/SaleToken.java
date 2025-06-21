package com.polycruz.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class SaleToken {
    private String contract;

    @JsonProperty("tokenId")
    private String tokenId;

    @JsonProperty("tokenName")
    private String name;

    @JsonProperty("tokenImage")
    private String image;
    private TokenMetadata metadata;
    private boolean isSpam;
    private boolean isNsfw;
    private double rarityScore;
    private int rarityRank;

}