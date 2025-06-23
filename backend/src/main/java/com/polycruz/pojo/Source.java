package com.polycruz.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Source {
    private String id;
    private String domain;
    private String name;
    private String icon;
    private String url;
}











