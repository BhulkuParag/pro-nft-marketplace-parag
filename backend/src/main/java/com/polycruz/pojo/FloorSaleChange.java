package com.polycruz.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class FloorSaleChange {
	
	private double _1day;
    private double _7day;
    private double _30day;

}
