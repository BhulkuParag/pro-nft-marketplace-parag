package com.polycruz.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Currency {
	
	private String contract;
    private String name;
    private String symbol;
    private Integer decimals;

}
