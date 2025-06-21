package com.polycruz.pojo;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CollectionVolume {
    @JsonProperty("1day")
    private double oneDay;

    @JsonProperty("7day")
    private double sevenDay;

    @JsonProperty("30day")
    private double thirtyDay;

    private double allTime;

}
