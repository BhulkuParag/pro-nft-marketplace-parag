package com.polycruz.pojo;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class Stats {
    @JsonProperty("1day")
    private TimeFrame oneDay;

    @JsonProperty("7day")
    private TimeFrame sevenDay;
}
