package com.polycruz.controller;

import com.polycruz.utils.ResponseTransformer;
import com.polycruz.utils.TechResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.polycruz.pojo.SalesApiResponse;
import com.polycruz.pojo.TrendingApiResponse;
import com.polycruz.pojo.TrendingMintsResponse;
import com.polycruz.service.VendorService;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/v1/reservoir")
@RequiredArgsConstructor 
public class ReservoirController {
    private final VendorService vendorService;
    private final ResponseTransformer transformer;

    @GetMapping("/trending-api")
    public ResponseEntity<TechResponse<TrendingApiResponse>> getTrending() {
        return new ResponseEntity<>(transformer.transform(vendorService.getTrending24h()),
                HttpStatus.CREATED);
    }
    
    @GetMapping("/top")
    public ResponseEntity<TechResponse<SalesApiResponse>> getTopSales(
            @RequestParam long startTimestamp,
            @RequestParam(defaultValue = "10") int limit,
            @RequestParam(defaultValue = "0") int offset
    ) {
        return new ResponseEntity<>(transformer.transform(vendorService.getSales(startTimestamp, limit, offset)),
                HttpStatus.CREATED);
    }
    
    @GetMapping("/trending-mints")
    public  ResponseEntity<TechResponse<TrendingMintsResponse>> getTrendingMints() {
        return new ResponseEntity<>(transformer.transform(vendorService.fetchTrendingMints()),
                HttpStatus.CREATED);
    }
}


