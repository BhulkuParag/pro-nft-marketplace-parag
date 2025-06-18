package com.polycruz.pojo;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

public class NftCollectionDTO {

    private BigDecimal volume;
    private Double volumePercentChange;
    private int count;
    private Double countPercentChange;
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
    private Double floorAskPercentChange;
    private int tokenCount;
    private int ownerCount;
    private String banner;
    private String description;
    private FloorAsk floorAsk;
    private TopBid topBid;

    // Nested Classes
    public static class VolumeChange {
        private BigDecimal _1day;
        private BigDecimal _7day;
        private BigDecimal _30day;

        // Getters and Setters
    }

    public static class CollectionVolume {
        private BigDecimal _1day;
        private BigDecimal _7day;
        private BigDecimal _30day;
        private BigDecimal allTime;

        // Getters and Setters
    }

    public static class FloorAsk {
        private String id;
        private String sourceDomain;
        private Price price;

        // Getters and Setters
    }

    public static class TopBid {
        private String id;
        private String sourceDomain;
        private Price price;
        private String maker;

        // Getters and Setters
    }

    public static class Price {
        private Currency currency;
        private Amount amount;
        private Amount netAmount; // for topBid only

        // Getters and Setters
    }

    public static class Currency {
        private String contract;
        private String name;
        private String symbol;
        private int decimals;

        // Getters and Setters
    }

    public static class Amount {
        private String raw;
        private BigDecimal decimal;
        private BigDecimal usd;
        private BigDecimal nativeAmount;

        // Getters and Setters
    }

    // Getters and Setters for all main fields
}

