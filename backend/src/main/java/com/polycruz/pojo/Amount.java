package com.polycruz.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Amount {
	
	 private String raw;
	    private Double decimal;
	    private Double usd;
	    @JsonProperty("native")
	    private Double nativeCurrency;

}
