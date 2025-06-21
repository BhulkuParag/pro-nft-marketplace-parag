package com.polycruz.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class AmountVolume {
    private double oneDay;
    private double sevenDay;
    private double thirtyDay;
    private double allTime;
}

