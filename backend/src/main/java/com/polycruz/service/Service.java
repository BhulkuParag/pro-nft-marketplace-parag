package com.polycruz.service;

import com.polycruz.config.ReservoirApiProperties;
import com.polycruz.pojo.ActivityResponse;
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
public class Service {

    private final RestTemplate restTemplate = new RestTemplate();
    private final ReservoirApiProperties apiProperties;

    public ActivityResponse fetchAskCancel(String sortBy, boolean includeMetadata, String types) {
        String baseUrl = apiProperties.getAskCancelUrl();

        URI uri = UriComponentsBuilder.fromHttpUrl(baseUrl)
                .queryParam("sortBy", sortBy)
                .queryParam("includeMetadata", includeMetadata)
                .queryParam("types", types)
                .build()
                .toUri();
        System.out.println("Calling URL: " + uri);
        ResponseEntity<ActivityResponse> response = restTemplate.exchange(
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
