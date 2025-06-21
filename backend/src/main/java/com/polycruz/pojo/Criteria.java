package com.polycruz.pojo;

public class Criteria {
    private String kind;
    private Data data;

    public static class Data {
        private CollectionData collection;
        private TokenMetadata token;
    }
}
