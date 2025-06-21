package com.polycruz.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;


@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Price {
	
	private Currency currency;
    private Amount amount;
    private Amount netAmount;

}
