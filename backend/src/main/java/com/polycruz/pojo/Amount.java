package com.polycruz.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Amount {
	
	 private String raw;
	    private double decimal;
	    private double usd;
	    @JsonProperty("native")
	    private double nativeCurrency;
//	    private double nativeAmount;

//	    @JsonProperty("native")
//	    public double getNativeCurrency() {
//	        return nativeCurrency;
//	    }

//	    public void setNativeCurrency(double nativeCurrency) {
//	        this.nativeCurrency = nativeCurrency;
//	    }
	    
//	    public void setNative(double nativeVal) {
//            this.nativeAmount = nativeVal;
//        }

}
