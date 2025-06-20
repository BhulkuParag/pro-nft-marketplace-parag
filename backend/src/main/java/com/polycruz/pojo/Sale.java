package com.polycruz.pojo;

import lombok.Data;

@Data
public class Sale {
    private String id;
    private String tokenSetId;
    private String collectionId;
    private String collectionName;
    private String timestamp;
    private SaleToken token;
    private SalePrice price;
    private SaleMaker maker;
    private SaleTaker taker;
}
