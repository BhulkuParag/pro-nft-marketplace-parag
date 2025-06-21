package com.polycruz.service;

import com.polycruz.config.ReservoirApiProperties;
import com.polycruz.pojo.ActivityResponse;
import com.polycruz.pojo.NftSalesResponse;
import com.polycruz.pojo.TrendingMintsResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
public class ChetanService {

    private final RestTemplate restTemplate = new RestTemplate();
    private final ReservoirApiProperties apiProperties;

    public NftSalesResponse fetchNftSales(boolean includeTokenMetadata) {
        String baseUrl = apiProperties.getSalesUrl();

        URI uri = UriComponentsBuilder.fromHttpUrl(baseUrl)
                .queryParam("includeTokenMetadata", includeTokenMetadata)
                .build()
                .toUri();
        System.out.println("Calling URL: " + uri);
        ResponseEntity<NftSalesResponse> response = restTemplate.exchange(
                uri,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<>() {}
        );

        ResponseEntity<String> response2 = restTemplate.exchange(
                uri,
                HttpMethod.GET,
                null,
                String.class
        );
        System.out.println("Raw JSON: " + response2.getBody());
        return response.getBody();
    }

}
