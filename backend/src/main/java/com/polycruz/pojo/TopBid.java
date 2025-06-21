package com.polycruz.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class TopBid {
	
	private String id;
    private String sourceDomain;
    private Price price;
    private String maker;
    private long validUntil;
    private long validFrom;

}
