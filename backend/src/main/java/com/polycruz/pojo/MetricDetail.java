package com.polycruz.pojo;

import lombok.Data;

@Data
public  class MetricDetail {
    private double value;
    private String unit;
    private Double change;
    private String changeUnit;
}