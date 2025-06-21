package com.polycruz.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.polycruz.service.*;
import com.polycruz.pojo.TrendingApiResponse;
import com.polycruz.pojo.CollectionsV7Response;
import com.polycruz.pojo.SalesApiResponse;
import com.polycruz.pojo.TokenResponse;
import com.polycruz.pojo.TrendingMintsResponse;


import com.polycruz.utils.ResponseTransformer;
import com.polycruz.utils.TechResponse;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/reservoir")
@RequiredArgsConstructor 
public class ReservoirController {
    private final VendorService vendorService;
    private final ResponseTransformer transformer;

    @GetMapping("/trending-api")
    public ResponseEntity<TechResponse<TrendingApiResponse>> getTrending() {
        return new ResponseEntity<>(transformer.transform(vendorService.getTrending24h()),
                HttpStatus.OK);
    }
    
    @GetMapping("/top-sales")
    public ResponseEntity<TechResponse<SalesApiResponse>> getTopSales(
            @RequestParam long startTimestamp,
            @RequestParam(defaultValue = "10") int limit,
            @RequestParam(defaultValue = "0") int offset
    ) {
        return new ResponseEntity<>(transformer.transform(vendorService.getSales(startTimestamp, limit, offset)),
                HttpStatus.OK);
    }
    
    @GetMapping("/trending-mints")
    public  ResponseEntity<TechResponse<TrendingMintsResponse>> getTrendingMints() {
        return new ResponseEntity<>(transformer.transform(vendorService.fetchTrendingMints()),
                HttpStatus.OK);
    }
    
    @GetMapping("/collections/v7")
    @Operation( summary = "2.Collection Details a.overview")
    public ResponseEntity<TechResponse<CollectionsV7Response>> getCollectionsV7(
    		@RequestParam(value = "contract",defaultValue = "0x5af0d9827e0c53e4799bb226655a1de152a425a5", required = false) String contract) {
        return new ResponseEntity<>(transformer.transform(vendorService.fetchCollections(contract)),
                HttpStatus.OK);
    }
    
    @GetMapping("/tokens")
    @Operation( summary = "2.Collection Details b.Items")
    public ResponseEntity<TechResponse<TokenResponse>> getTokens(
            @RequestParam(value = "collection",defaultValue = "0x5af0d9827e0c53e4799bb226655a1de152a425a5", required = false) String collection,
            @RequestParam(value = "sortBy", defaultValue = "floorAskPrice") String sortBy,
            @RequestParam(value = "limit", defaultValue = "40") int limit) {

        return new ResponseEntity<>(transformer.transform(vendorService.fetchTokens(collection, sortBy, limit)),HttpStatus.OK);
    }
}


