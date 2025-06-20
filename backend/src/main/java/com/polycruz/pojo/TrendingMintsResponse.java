package com.polycruz.pojo;

import lombok.Data;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class TrendingMintsResponse {
    private List<TrendingMint> collections;
}
