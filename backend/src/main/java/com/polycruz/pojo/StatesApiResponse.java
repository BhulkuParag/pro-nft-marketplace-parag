package com.polycruz.pojo;

import lombok.Data;

import java.util.Map;

@Data
public class StatesApiResponse {
    private StatsWrapper data;

    @Data
    public static class StatsWrapper {
        private Map<String, TimeFrame> stats;
    }
}
