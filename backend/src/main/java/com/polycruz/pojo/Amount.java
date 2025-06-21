package com.polycruz.pojo;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter

public class Amount {
	
	 private String raw;
	    private double decimal;
	    private double usd;
	    private double nativeCurrency;

	    @JsonProperty("native")
	    public double getNativeCurrency() {
	        return nativeCurrency;
	    }

	    public void setNativeCurrency(double nativeCurrency) {
	        this.nativeCurrency = nativeCurrency;
	    }

}
