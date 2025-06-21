package com.polycruz.pojo;

import lombok.Data;

@Data
public class FeeBreakdown {
    private String kind;
    private int bps;
    private String recipient;
    private String rawAmount;
    private String source;
}
