package com.polycruz.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Collection {
    private String id;
    private String name;
    private String image;
    private String slug;
    private String symbol;
    private String creator;
    private int tokenCount;
    private boolean metadataDisabled;
    private FloorAskPrice floorAskPrice;
}
