package com.polycruz.pojo;

import java.util.List;

import lombok.Data;

@Data
public  class Attribute {
    private String key;
    private String value;
    private int tokenCount;
    private int onSaleCount;
    private List<String> sampleImages;
    private List<FloorAsk> floorAsks;
}
