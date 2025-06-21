package com.polycruz.pojo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class TokenMetadata {
    private String tokenId;
    private String image;
    private String name;
    private String description;
    private boolean isSpam;
    private boolean isNsfw;
}