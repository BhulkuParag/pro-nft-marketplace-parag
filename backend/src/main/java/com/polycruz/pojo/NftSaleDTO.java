package com.polycruz.pojo;

import java.math.BigDecimal;
import java.util.List;

public class NftSaleDTO {
    private String id;
    private String saleId;
    private Token token;
    private String orderId;
    private String orderSource;
    private String orderSide;
    private String orderKind;
    private String from;
    private String to;
    private String amount;
    private String fillSource;
    private long block;
    private String txHash;
    private int logIndex;
    private int batchIndex;
    private long timestamp;
    private Price price;
    private int washTradingScore;
    private int marketplaceFeeBps;
    private boolean paidFullRoyalty;
    private List<FeeBreakdown> feeBreakdown;
    private String comment;
    private boolean isDeleted;
    private String createdAt;
    private String updatedAt;

    // Nested DTOs
    public static class Token {
        private String contract;
        private String tokenId;
        private String name;
        private String image;
        private Collection collection;

        public static class Collection {
            private String id;
            private String name;

            // Getters and Setters
        }

        // Getters and Setters
    }

    public static class Price {
        private Currency currency;
        private Amount amount;
        private Amount netAmount;

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

        // Getters and Setters
    }

    public static class FeeBreakdown {
        private String kind;
        private int bps;
        private String recipient;
        private String rawAmount;
        private String source;

        // Getters and Setters
    }

    // Getters and Setters for all fields
}

