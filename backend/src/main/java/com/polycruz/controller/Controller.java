package com.polycruz.controller;

import com.polycruz.pojo.ActivityResponse;
import com.polycruz.pojo.TokenDetail;
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
public class Controller {

    private final Service service;
    private final ResponseTransformer transformer;

    @GetMapping("/activity")
    @Operation( summary = "2.Collection Details e. Activity")
    public ResponseEntity<TechResponse<ActivityResponse>> getActivity(
            @RequestParam(required = false, defaultValue = "eventTimestamp") String sortBy,
            @RequestParam(required = false, defaultValue = "false") Boolean includeMetadata,
            @RequestParam(required = false) String types
    ) {
        return new ResponseEntity<>(transformer.transform(service.fetchActivity(sortBy, includeMetadata, types)), HttpStatus.CREATED);
    }

    @GetMapping("/token-details")
    @Operation( summary = "2.Collection Details d. ")
    public ResponseEntity<TechResponse<TokenDetail>> getTokenDetails(
            @RequestParam(required = false) String currency
    ) {
        return new ResponseEntity<>(transformer.transform(service.fetchTokenDetails(currency)), HttpStatus.CREATED);
    }

}
