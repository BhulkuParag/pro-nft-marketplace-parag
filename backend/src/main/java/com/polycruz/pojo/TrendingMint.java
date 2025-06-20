package com.polycruz.pojo;


import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class TrendingMint {
	 private String id;
	    private String image;
	    private String banner;
	    private String name;
	    private String description;
	    private boolean isSpam;
	    private boolean isMinting;
	    private Integer onSaleCount;
	    private VolumeChange volumeChange;
	    private CollectionVolume collectionVolume;
	    private String contractKind;
	    private String tokenCount;
	    private Integer ownerCount;
	    private List<String> sampleImages;
	    private String mintType;
	    private MintPrice mintPrice;
	    private Integer maxSupply;
	    private String mintStandard;
	    private String createdAt;
	    private Long startDate;
	    private Long endDate;
	    private int mintCount;
	    private int sixHourCount;
	    private int oneHourCount;
	    private double mintVolume;
	    private String openseaVerificationStatus;
	    private String magicedenVerificationStatus;
	    private Integer mintedTimestamp;
	    private Integer lastMintTimestamp;
	    private List<MintStage> mintStages;
	    private FloorAsk floorAsk;
	    private String creator;
}