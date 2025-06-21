package com.polycruz.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public  class Breakdown {
    private int bps;
    private String recipient;
    private Boolean required; // for opensea
}
