package com.polycruz.pojo;

import lombok.Data;
import java.util.List;
import java.util.Map;

@Data
public class TransformedStatsResponse {
    private TransformedData data;

    @Data
    public static class TransformedData {
        private Map<String, List<StatItem>> stats;
    }
}

