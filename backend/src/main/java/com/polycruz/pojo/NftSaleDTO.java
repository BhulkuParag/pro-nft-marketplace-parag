package com.polycruz.pojo;

import java.math.BigDecimal;
import java.util.List;

public class NftSaleDTO {
    private String id;
    private String saleId;
    private SaleToken token;
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
}

