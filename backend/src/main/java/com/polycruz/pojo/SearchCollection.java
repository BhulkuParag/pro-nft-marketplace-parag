package com.polycruz.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class SearchCollection {
	
	 private Integer chainId;
     private String id;
     private String name;
     private String image;
     private String openseaVerificationStatus;
     private String tokenCount;
     private String allTimeVolume;
     private Double floorAskPrice; 
     private String contract;
     
     
     

}
