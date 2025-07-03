package com.polycruz.pojo;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class CollectionInfo {
	 private int chainId;
     private String id;
     private String slug;
     private String createdAt;
     private String updatedAt;
     private String name;
     private String symbol;
     private String contractDeployedAt;
     private String image;
     private String banner;
     private String twitterUrl;
     private String discordUrl;
     private String externalUrl;
     private String twitterUsername;
     private String openseaVerificationStatus;
     private String magicedenVerificationStatus;
     private String description;
     private boolean metadataDisabled;
     private boolean isSpam;
     private boolean isNsfw;
     private boolean isMinting;
     private List<String> sampleImages;
     private String tokenCount;
     private String onSaleCount;
     private String primaryContract;
     private String tokenSetId;
     private String creator;
     private boolean isSharedContract;
     private Royalties royalties;
     private AllRoyalties allRoyalties;
     private FloorAsk floorAsk;
     private TopBid topBid;
     private Rank rank;
     private Volume volume;
     private VolumeChange volumeChange;
     private FloorSale floorSale;
     private FloorSaleChange floorSaleChange;
     private boolean collectionBidSupported;
     private int ownerCount;
     private String contractKind;
     private Long mintedTimestamp;
     private long lastMintTimestamp;
     private List<Object> mintStages;
     private String supply;
     private String remainingSupply;
     private String contract;
     private String allTimeVolume;
     private Double floorAskPrice; 
     
}
