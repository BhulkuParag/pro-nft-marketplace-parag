package com.polycruz.pojo;


import java.time.Instant;
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
	    private Boolean isSpam;
	    private Boolean isMinting;
	    private Integer onSaleCount;
	    private VolumeChange volumeChange;
	    private CollectionVolume collectionVolume;
	    private String contractKind;
	    private String tokenCount;
	    private Integer ownerCount;
	    private List<String> sampleImages;
	    private String mintType;
	    private MintPrice mintPrice;
	    private Long maxSupply;
	    private String mintStandard;
	    private Instant createdAt;
	    private Instant  startDate;
	    private Instant endDate;
	    private Integer mintCount;
	    private Integer sixHourCount;
	    private Integer oneHourCount;
	    private Double mintVolume;
	    private String openseaVerificationStatus;
	    private Object magicedenVerificationStatus;
	    private Long mintedTimestamp;
	    private Long lastMintTimestamp;
	    private List<MintStage> mintStages;
	    private FloorAsk floorAsk;
	    private String creator;
}