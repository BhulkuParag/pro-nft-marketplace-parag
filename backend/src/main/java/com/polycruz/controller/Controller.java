package com.polycruz.controller;

import com.polycruz.pojo.ActivityResponse;
import com.polycruz.pojo.TrendingMintsResponse;
import com.polycruz.service.Service;
import com.polycruz.utils.ResponseTransformer;
import com.polycruz.utils.TechResponse;
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

    @GetMapping("/token-activity")
    public ResponseEntity<TechResponse<ActivityResponse>> getAskCancel(
            @RequestParam(required = false, defaultValue = "eventTimestamp") String sortBy,
            @RequestParam(required = false, defaultValue = "true") boolean includeMetadata,
            @RequestParam(required = false, defaultValue = "ask_cancel") String types
    ) {
        return new ResponseEntity<>(transformer.transform(service.fetchAskCancel(sortBy, includeMetadata, types)), HttpStatus.CREATED);
    }

}
