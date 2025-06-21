package com.polycruz.pojo;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class CollectionsV7Response {
    private List<CollectionInfo> collections;
//    private Metadata continuation; // e.g. nextToken or pagination field
}
