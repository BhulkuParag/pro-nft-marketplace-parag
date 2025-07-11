package com.polycruz.pojo;

import lombok.Data;
import java.util.Map;

@Data
public class ReservoirRawStatsResponse {
    private Map<String, TimeFrameStats> stats;

    @Data
    public static class TimeFrameStats {
        private int mintCount;
        private int saleCount;
        private int totalCount;
        private double mintVolume;
        private double saleVolume;
        private double totalVolume;
    }
}

