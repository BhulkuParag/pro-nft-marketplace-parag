package com.polycruz.pojo;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TrendingApiResponse {
	
	private List<CollectionData> collections;

    // Getter and Setter
    public List<CollectionData> getCollections() {
        return collections;
    }

    public void setCollections(List<CollectionData> collections) {
        this.collections = collections;
    }

}
