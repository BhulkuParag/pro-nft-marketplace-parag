package com.polycruz.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class Currency {
	
	private String contract;
    private String name;
    private String symbol;
    private int decimals;

}
