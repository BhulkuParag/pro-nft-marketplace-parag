package com.polycruz.pojo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TopBid {
	
	private String id;
    private String sourceDomain;
    private Price price;
    private String maker;
    private String validUntil;

}
