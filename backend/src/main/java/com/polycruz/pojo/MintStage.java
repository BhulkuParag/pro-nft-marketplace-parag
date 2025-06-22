package com.polycruz.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class MintStage {
    private String stage;
    private String kind;
    private String standard;
    private String tokenId;
    private MintPrice price;
    private Object pricePerQuantity;
    private Long startTime;
    private Long endTime;
    private Long maxMints;
    private Integer maxMintsPerWallet;
}
