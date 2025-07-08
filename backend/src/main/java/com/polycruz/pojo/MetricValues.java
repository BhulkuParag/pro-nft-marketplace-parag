package com.polycruz.pojo;

import lombok.Data;

@Data
public class MetricValues {
    private PriceData price_estimate;
    private PriceData price_estimate_upper_bound;
    private PriceData price_estimate_lower_bound;
    private PriceData prediction_percentile;
    private PriceData collection_drivers;
    private PriceData nft_sales_drivers;
    private PriceData nft_rarity_drivers;
}
