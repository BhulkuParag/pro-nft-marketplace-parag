package com.polycruz.pojo;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public  class Royalties {
    private String recipient;
    private List<Breakdown> breakdown;
    private int bps;
}
