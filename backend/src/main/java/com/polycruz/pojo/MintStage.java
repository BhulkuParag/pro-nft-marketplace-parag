package com.polycruz.pojo;

import lombok.Data;

@Data
public class MintStage {
    private String stage;
    private String kind;
    private String standard;
    private String tokenId;
    private MintPrice price;
    private Integer pricePerQuantity;
    private Long startTime;
    private Long endTime;
    private Integer maxMints;
    private Integer maxMintsPerWallet;
}
