package com.polycruz.pojo;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Token {
	 private int chainId;
	    private String contract;
	    private String tokenId;
	    private String name;
	    private String description;
	    private String image;
	    private String imageSmall;
	    private String imageLarge;
	    private Metadata metadata;
	    private String kind;
	    private boolean isFlagged;
	    private boolean isSpam;
	    private boolean isNsfw;
	    private boolean metadataDisabled;
	    private String lastFlagUpdate;
	    private String lastFlagChange;
	    private String supply;
	    private String remainingSupply;
	    private double rarity;
	    private int rarityRank;
	    private Collection collection;
	    private String owner;
	    private String mintedAt;
	    private String createdAt;
	    private Integer decimals;
	    private List<Object> mintStages;

}
