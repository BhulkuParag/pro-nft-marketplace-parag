package com.polycruz.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@JsonIgnoreProperties(ignoreUnknown = true)
public class Amount {
	
	 private String raw;
	    private double decimal;
	    private double usd;
		@JsonProperty("native")
	    private double nativeCurrency;

}
