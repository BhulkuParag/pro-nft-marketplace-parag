package com.polycruz.service;

import java.net.URI;
import java.util.HashMap;
import java.util.Map;
import java.util.*;
import java.util.stream.Collectors;

import com.polycruz.pojo.*;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.retry.annotation.Backoff;
import org.springframework.retry.annotation.Retryable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.util.UriComponentsBuilder;

import com.polycruz.config.ReservoirApiProperties;
import com.polycruz.pojo.ActivityResponse;
import com.polycruz.pojo.ChainStatsResponse;
import com.polycruz.pojo.CollectionsV7Response;
import com.polycruz.pojo.NftSalesResponse;
import com.polycruz.pojo.SalesApiResponse;
import com.polycruz.pojo.TokenDetail;
import com.polycruz.pojo.TokenResponse;
import com.polycruz.pojo.TrendingApiResponse;
import com.polycruz.pojo.TrendingMintsResponse;
import com.polycruz.exception.PolycruzSystemException;
import org.springframework.web.client.RestTemplate;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Retryable(value = { HttpServerErrorException.GatewayTimeout.class }, maxAttempts = 3, backoff = @Backoff(delay = 2000))
public class VendorService {

	private final RestTemplate restTemplate;
	private final ReservoirApiProperties apiProperties;

	public TrendingApiResponse getTrendingCollections(String period, String sortBy) {
		String url = apiProperties.getTrendingApi();
		Map<String, String> params = new HashMap<>();
		params.put("period", period);
		params.put("sortBy", sortBy);

		return restTemplate.getForObject(url, TrendingApiResponse.class, params);
	}

	public SalesApiResponse getSalesData(long startTimestamp, String sortBy, String sortDirection, int limit,
			int offset,
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

		ResponseEntity<TokenDetail> response = restTemplate.exchange(
				uri,
				HttpMethod.GET,
				null,
				new ParameterizedTypeReference<>() {
				});
		return response.getBody();
	}

	public ChainStatsResponse getChainStats() {
		String url = apiProperties.getStatsUrl();

		Map<String, Object> uriVariables = new HashMap<>();

		return restTemplate.getForObject(url, ChainStatsResponse.class, uriVariables);
	}

	public NftPriceEstimateResponse getNftPriceEstimate(String blockchain, String address, String tokenId) {
		String url = String.format(
				"https://api.unleashnfts.com/api/v1/nft/%s/%s/%s/price-estimate",
				blockchain, address, tokenId);

		HttpHeaders headers = new HttpHeaders();
		headers.set("x-api-key", "tuF8lxipeseroFej7cowemOsaplfripoCugaKesosPa");
		headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

		HttpEntity<Void> entity = new HttpEntity<>(headers);

		ResponseEntity<NftPriceEstimateResponse> response = restTemplate.exchange(
				url,
				HttpMethod.GET,
				entity,
				NftPriceEstimateResponse.class);

		return response.getBody();
	}

}
