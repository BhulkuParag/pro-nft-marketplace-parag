package com.polycruz.pojo;

import java.util.Map;

import lombok.Data;

@Data
public class MarketMetricResponse {
    private Map<String, MetricValue> metric_values;

    
}
