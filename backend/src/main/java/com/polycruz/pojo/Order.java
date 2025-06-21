package com.polycruz.pojo;

import lombok.Data;

@Data
public class Order {
    private String id;
    private String side;
    private Source source;
    private Criteria criteria;
}


