package com.polycruz.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class VolumeChange {
    @JsonProperty("1day")
    private Double oneDay;

    @JsonProperty("7day")
    private Double sevenDay;

    @JsonProperty("30day")
    private Double thirtyDay;

}
