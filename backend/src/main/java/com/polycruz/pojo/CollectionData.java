package com.polycruz.pojo;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class CollectionData {
	
	private double volume;
    private double volumePercentChange;
    private int count;
    private int countPercentChange;
    private String id;
    private String image;
    private List<String> sampleImages;
    private boolean isSpam;
    private String openseaVerificationStatus;
    private String magicedenVerificationStatus;
    private String name;
    private int onSaleCount;
    private VolumeChange volumeChange;
    private CollectionVolume collectionVolume;
    private double floorAskPercentChange;
    private int tokenCount;
    private int ownerCount;
    private String banner;
    private String description;
    private FloorAsk floorAsk;
    private TopBid topBid;
    private boolean isNsfw;

    @JsonProperty("id")
    public String getId() {
        return id;
    }

    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @JsonProperty("image")
    public String getImage() {
        return image;
    }
}
