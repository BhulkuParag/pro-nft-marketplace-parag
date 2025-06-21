package com.polycruz.controller;

import com.polycruz.pojo.ActivityResponse;
import com.polycruz.pojo.NftSalesResponse;
import com.polycruz.pojo.TrendingMintsResponse;
import com.polycruz.service.ChetanService;
import com.polycruz.service.Service;
import com.polycruz.utils.ResponseTransformer;
import com.polycruz.utils.TechResponse;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class ChetanController {

    private final ChetanService service;
    private final ResponseTransformer transformer;

    @GetMapping("/nft-sales")
    @Operation(summary = "1.Listing Table b.NFT Sales")
    public ResponseEntity<TechResponse<NftSalesResponse>> getNftSales(
            @RequestParam(required = false, defaultValue = "true") boolean includeTokenMetadata
    ) {
        return new ResponseEntity<>(transformer.transform(service.fetchNftSales(includeTokenMetadata)), HttpStatus.CREATED);
    }

}
