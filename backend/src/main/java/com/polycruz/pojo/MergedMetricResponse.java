package com.polycruz.pojo;

import java.util.Map;

import lombok.Data;

@Data
public class MergedMetricResponse {

    private Map<String, MetricDetail> metric_values;

    public Map<String, MetricDetail> getMetric_values() {
        return metric_values;
    }

    public void setMetric_values(Map<String, MetricDetail> metric_values) {
        this.metric_values = metric_values;
    }

//    public static class MetricDetail {
//        private Double value;
//        private String unit;
//        private Double change;
//        private String changeUnit;
//
//        public Double getValue() {
//            return value;
//        }
//
//        public void setValue(Double value) {
//            this.value = value;
//        }
//
//        public String getUnit() {
//            return unit;
//        }
//
//        public void setUnit(String unit) {
//            this.unit = unit;
//        }
//
//        public Double getChange() {
//            return change;
//        }
//
//        public void setChange(Double change) {
//            this.change = change;
//        }
//
//        public String getChangeUnit() {
//            return changeUnit;
//        }
//
//        public void setChangeUnit(String changeUnit) {
//            this.changeUnit = changeUnit;
//        }
//    }
}


