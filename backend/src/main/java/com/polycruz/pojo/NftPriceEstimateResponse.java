package com.polycruz.pojo;

import lombok.Data;

@Data
public class NftPriceEstimateResponse {
    private MetadataEstimate metadataEstimate;
    private MetricValues metric_values;
}
