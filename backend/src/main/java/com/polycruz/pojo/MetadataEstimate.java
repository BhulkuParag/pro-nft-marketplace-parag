package com.polycruz.pojo;

import lombok.Data;

import java.util.List;

@Data
public class MetadataEstimate {
    private String address;
    private String token_id;
    private String name;
    private String collection_name;
    private String chain_id;
    private String minted_date;
    private String token_image_url;
    private String thumbnail_url;
    private List<String> thumbnail_palette;
    private boolean verified;
}
