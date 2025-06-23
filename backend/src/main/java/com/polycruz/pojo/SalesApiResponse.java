package com.polycruz.pojo;

import lombok.Data;
import java.util.List;

@Data
public class SalesApiResponse {
    private List<Sale> sales;
}
