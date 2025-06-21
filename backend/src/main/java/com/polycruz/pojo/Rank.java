package com.polycruz.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Rank {
	
	private int _1day;
    private int _7day;
    private int _30day;
    private int allTime;

}
