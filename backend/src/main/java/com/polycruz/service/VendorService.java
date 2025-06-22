package com.polycruz.service;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.polycruz.config.ReservoirApiProperties;
import com.polycruz.pojo.ActivityResponse;
import com.polycruz.pojo.CollectionsV7Response;
import com.polycruz.pojo.NftSalesResponse;
import com.polycruz.pojo.SalesApiResponse;
import com.polycruz.pojo.TokenDetail;
import com.polycruz.pojo.TokenResponse;
import com.polycruz.pojo.TrendingApiResponse;
import com.polycruz.pojo.TrendingMint;
import com.polycruz.pojo.TrendingMintsResponse;

import lombok.RequiredArgsConstructor;
import org.springframework.web.util.UriComponentsBuilder;
import java.net.URI;
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class VendorService {

	private final RestTemplate restTemplate = new RestTemplate();
	private final ReservoirApiProperties apiProperties;
	
	
	public TrendingApiResponse getTrendingCollections(String period, String sortBy) {
		String url = apiProperties.getTrendingApi();
		Map<String, String> params = new HashMap<>();
		params.put("period", period);
		params.put("sortBy", sortBy);

		return restTemplate.getForObject(url, TrendingApiResponse.class, params);
	}


	public SalesApiResponse getSalesData(long startTimestamp, String sortBy, String sortDirection, int limit, int offset,
			boolean includeTokenMetadata) {
		String url = apiProperties.getTopSales();

		Map<String, Object> params = new HashMap<>();
		params.put("startTimestamp", startTimestamp);
		params.put("sortBy", sortBy);
		params.put("sortDirection", sortDirection);
		params.put("limit", limit);
		params.put("offset", offset);
		params.put("includeTokenMetadata", includeTokenMetadata);

		return restTemplate.getForObject(url, SalesApiResponse.class, params);
	}

	public TrendingMintsResponse getTrendingMints(String period, int limit, String sortDirection, int offset) {
        String url = apiProperties.getTrendingMints();

        Map<String, Object> uriVariables = new HashMap<>();
        uriVariables.put("period", period);
        uriVariables.put("limit", limit);
        uriVariables.put("sortDirection", sortDirection);
        uriVariables.put("offset", offset);

        return restTemplate.getForObject(url, TrendingMintsResponse.class, uriVariables);
    }

	public CollectionsV7Response fetchCollections(String contract) {
		URI uri = UriComponentsBuilder.fromHttpUrl(apiProperties.getCollectionsV7Url()).queryParam("contract", contract)
				.build().encode().toUri();

		return restTemplate.getForObject(uri, CollectionsV7Response.class);
	}

	public TokenResponse fetchTokens(String collection, String sortBy, int limit) {
		String uri = UriComponentsBuilder.fromHttpUrl(apiProperties.getTokens()).queryParam("collection", collection)
				.queryParam("sortBy", sortBy).queryParam("limit", limit).toUriString();

		return restTemplate.getForObject(uri, TokenResponse.class);
	}

	public TokenResponse fetchTokenData(String tokens, String sortBy) {
		String uri = UriComponentsBuilder.fromHttpUrl(apiProperties.getTokens()).queryParam("tokens", tokens)
				.queryParam("sortBy", sortBy).toUriString();

		return restTemplate.getForObject(uri, TokenResponse.class);
	}

	public NftSalesResponse fetchNftSales(boolean includeTokenMetadata) {
		String baseUrl = apiProperties.getSalesUrl();

		URI uri = UriComponentsBuilder.fromHttpUrl(baseUrl).queryParam("includeTokenMetadata", includeTokenMetadata)
				.build().toUri();
		System.out.println("Calling URL: " + uri);
		ResponseEntity<NftSalesResponse> response = restTemplate.exchange(uri, HttpMethod.GET, null,
				new ParameterizedTypeReference<>() {
				});

		return response.getBody();
	}

	public ActivityResponse fetchActivity(String sortBy, Boolean includeMetadata, String types) {
		String baseUrl = apiProperties.getActivityUrl();

		UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(baseUrl);
		if (sortBy != null && !sortBy.isBlank()) {
			builder.queryParam("sortBy", sortBy);
		}
		if (includeMetadata != null) {
			builder.queryParam("includeMetadata", includeMetadata);
		}
		if (types != null && !types.isBlank()) {
			builder.queryParam("types", types);
		}

		URI uri = builder.build().toUri();
		System.out.println("Calling URL: " + uri);
		ResponseEntity<ActivityResponse> response = restTemplate.exchange(uri, HttpMethod.GET, null,
				new ParameterizedTypeReference<>() {
				});
		return response.getBody();
	}

	public TokenDetail fetchTokenDetails(String currency) {
        String baseUrl = apiProperties.getTokenDetailUrl();

        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(baseUrl);
        if (currency != null && !currency.isBlank()) {
            builder.queryParam("currency", currency);
        }

        URI uri = builder.build().toUri();
        System.out.println("Calling URL: " + uri);
        ResponseEntity<TokenDetail> response = restTemplate.exchange(
                uri,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<>() {}
        );
        return response.getBody();
    }

}
