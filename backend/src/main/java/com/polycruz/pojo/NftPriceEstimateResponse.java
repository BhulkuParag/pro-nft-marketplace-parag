package com.polycruz.pojo;

import lombok.Data;

@Data
public class NftPriceEstimateResponse {
    private MetadataEstimate metadata;
    private MetricValues metric_values;
}
