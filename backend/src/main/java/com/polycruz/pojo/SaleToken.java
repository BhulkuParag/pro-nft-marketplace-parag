package com.polycruz.pojo;

import lombok.Data;

@Data
public class SaleToken {
    private String contract;
    private String tokenId;
    private String name;
    private String image;
    private TokenMetadata metadata;
}