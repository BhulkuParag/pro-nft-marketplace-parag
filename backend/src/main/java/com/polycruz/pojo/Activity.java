package com.polycruz.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Activity {
    private String type;
    private String fromAddress;
    private String toAddress;
    private Price price;
    private Source fillSource;
    private int amount;
    private long timestamp;
    private String createdAt;
    private String contract;
    private SaleToken token;
    private CollectionData collection;
    private Order order;
    private String txHash;
    private int logIndex;
    private int batchIndex;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String comment;
}

