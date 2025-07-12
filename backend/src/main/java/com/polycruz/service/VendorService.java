package com.polycruz.service;

import java.lang.reflect.Array;
import java.net.URI;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.*;
import org.springframework.retry.annotation.Backoff;
import org.springframework.retry.annotation.Retryable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.polycruz.ReservoirChain;
import com.polycruz.config.ReservoirApiProperties;
import com.polycruz.exception.PolycruzSystemException;
import com.polycruz.pojo.ActivityResponse;
import com.polycruz.pojo.CollectionSearchResponse;
import com.polycruz.pojo.CollectionsV7Response;
import com.polycruz.pojo.MarketMetricResponse;
import com.polycruz.pojo.MergedMetricResponse;
import com.polycruz.pojo.MetricDetail;
import com.polycruz.pojo.MetricValue;
import com.polycruz.pojo.NftCollectionResponse;
import com.polycruz.pojo.NftPriceEstimateResponse;
import com.polycruz.pojo.ChainStatsResponse;
import com.polycruz.pojo.CollectionSearchResponse;
import com.polycruz.pojo.CollectionsV7Response;
import com.polycruz.pojo.NftCollectionResponse;
import com.polycruz.pojo.NftSalesResponse;
import com.polycruz.pojo.ReservoirRawStatsResponse;
import com.polycruz.pojo.SalesApiResponse;
import com.polycruz.pojo.TokenDetail;
import com.polycruz.pojo.TokenResponse;
import com.polycruz.pojo.TopTradersResponse;
import com.polycruz.pojo.TransformedStatsResponse;
import com.polycruz.pojo.TrendingApiResponse;
import com.polycruz.pojo.TrendingMintsResponse;
import com.polycruz.utils.StatsTransformer;
import com.polycruz.pojo.TrendingApiResponse;
import com.polycruz.pojo.TrendingMintsResponse;
import org.springframework.web.client.RestTemplate;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Retryable(value = { HttpServerErrorException.GatewayTimeout.class }, maxAttempts = 3, backoff = @Backoff(delay = 2000))
public class VendorService {

	private static final String API_KEY = "tuF8lxipeseroFej7cowemOsaplfripoCugaKesosPa";
	private static final String BASE_URL = "https://api.unleashnfts.com/api/v2/";
	private final RestTemplate restTemplate;
	private final ReservoirApiProperties apiProperties;

	public TrendingApiResponse getTrendingCollections(ReservoirChain chain, String period, String sortBy) {
		System.out.println("chain.getBaseUrl() " + chain.getBaseUrl());
		String url = chain.getBaseUrl() + apiProperties.getTrendingApi();
		Map<String, String> params = new HashMap<>();
		params.put("period", period);
		params.put("sortBy", sortBy);

		return restTemplate.getForObject(url, TrendingApiResponse.class, params);
	}

	public SalesApiResponse getSalesData(ReservoirChain chain, long startTimestamp, String sortBy, String sortDirection,
			int limit, int offset, boolean includeTokenMetadata) {

		String url = chain.getBaseUrl() + apiProperties.getTopSales();

		Map<String, Object> params = new HashMap<>();
		params.put("startTimestamp", startTimestamp);
		params.put("sortBy", sortBy);
		params.put("sortDirection", sortDirection);
		params.put("limit", limit);
		params.put("offset", offset);
		params.put("includeTokenMetadata", includeTokenMetadata);

		return restTemplate.getForObject(url, SalesApiResponse.class, params);
	}

	public TrendingMintsResponse getTrendingMints(ReservoirChain chain, String period, int limit, String sortDirection,
			int offset) {

		String url = chain.getBaseUrl() + apiProperties.getTrendingMints();

		Map<String, Object> uriVariables = new HashMap<>();
		uriVariables.put("period", period);
		uriVariables.put("limit", limit);
		uriVariables.put("sortDirection", sortDirection);
		uriVariables.put("offset", offset);

		return restTemplate.getForObject(url, TrendingMintsResponse.class, uriVariables);
	}

	public CollectionsV7Response fetchCollections(ReservoirChain chain, String contract) {
		URI uri = UriComponentsBuilder.fromHttpUrl(chain.getBaseUrl() + apiProperties.getCollectionsV7Url())
				.queryParam("contract", contract).build().encode().toUri();

		return restTemplate.getForObject(uri, CollectionsV7Response.class);
	}

	public TokenResponse fetchTokens(ReservoirChain chain, String collection, String sortBy, int limit) {
		String uri = UriComponentsBuilder.fromHttpUrl(chain.getBaseUrl() + apiProperties.getTokens())
				.queryParam("collection", collection).queryParam("sortBy", sortBy).queryParam("limit", limit)
				.toUriString();

		return restTemplate.getForObject(uri, TokenResponse.class);
	}

	public TokenResponse fetchTokenData(ReservoirChain chain, String tokens, String sortBy) {
		String uri = UriComponentsBuilder.fromHttpUrl(chain.getBaseUrl() + apiProperties.getTokens())
				.queryParam("tokens", tokens).queryParam("sortBy", sortBy).toUriString();

		return restTemplate.getForObject(uri, TokenResponse.class);
	}

	public NftSalesResponse fetchNftSales(ReservoirChain chain, boolean includeTokenMetadata) {
		String baseUrl = chain.getBaseUrl() + apiProperties.getSalesUrl();

		URI uri = UriComponentsBuilder.fromHttpUrl(baseUrl).queryParam("includeTokenMetadata", includeTokenMetadata)
				.build().toUri();

		ResponseEntity<NftSalesResponse> response = restTemplate.exchange(uri, HttpMethod.GET, null,
				new ParameterizedTypeReference<>() {
				});

		return response.getBody();
	}

	public ActivityResponse fetchActivity(ReservoirChain chain, String sortBy, Boolean includeMetadata, String types) {
		String baseUrl = chain.getBaseUrl() + apiProperties.getActivityUrl();

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

	// public TokenDetail fetchTokenDetails(ReservoirChain chain,String currency) {
	// String baseUrl = chain.getBaseUrl() + apiProperties.getTokenDetailUrl();
	// System.out.println("base url - " +baseUrl);
	// UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(baseUrl);
	// if (currency != null && !currency.isBlank()) {
	// builder.queryParam("currency", currency);
	// }
	//
	// URI uri = builder.build().toUri();
	// System.out.println("uri - " +uri);
	// ResponseEntity<TokenDetail> response = restTemplate.exchange(
	// uri,
	// HttpMethod.GET,
	// null,
	// new ParameterizedTypeReference<>() {}
	// );
	// if(response.getStatusCode().in != 200) {
	//
	// }
	// System.out.println(response.getStatusCode());
	// return response.getBody();
	// }

	public TokenDetail fetchTokenDetails(ReservoirChain chain, String currency) {
		String baseUrl = chain.getBaseUrl() + apiProperties.getTokenDetailUrl();
		System.out.println("base url - " + baseUrl);

		try {
			UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(baseUrl);
			if (currency != null && !currency.isBlank()) {
				builder.queryParam("currency", currency);
			}

			URI uri = builder.build().toUri();
			System.out.println("uri - " + uri);

			ResponseEntity<TokenDetail> response = restTemplate.exchange(uri, HttpMethod.GET, null,
					new ParameterizedTypeReference<>() {
					});

			if (response.getStatusCode() != HttpStatus.OK) {
				System.err.println("Non-OK status received: " + response.getStatusCode());
				throw new PolycruzSystemException("Failed to fetch token details: " + response.getStatusCode());
			}

			return response.getBody();

		} catch (HttpClientErrorException e) {
			System.err.println("Client error: " + e.getStatusCode() + " - " + e.getResponseBodyAsString());
			throw new PolycruzSystemException(e.getMessage());
		} catch (HttpServerErrorException e) {
			System.err.println("Server error: " + e.getStatusCode() + " - " + e.getResponseBodyAsString());
			throw new PolycruzSystemException("Server error while fetching token details", e);
		} catch (RestClientException e) {
			System.err.println("Rest client error: " + e.getMessage());
			throw new PolycruzSystemException("Unknown error while fetching token details", e);
		}
	}

	public TransformedStatsResponse getStatesStats(ReservoirChain chain) {
		String url = chain.getBaseUrl() + apiProperties.getStatsUrl();

		ReservoirRawStatsResponse response = restTemplate.getForObject(url, ReservoirRawStatsResponse.class);
		return StatsTransformer.transform(response);

	}

	private String toLabel(String name) {
		StringBuilder label = new StringBuilder();
		for (char c : name.toCharArray()) {
			if (Character.isUpperCase(c))
				label.append(" ");
			label.append(c);
		}
		String result = label.toString().trim();
		return Character.toUpperCase(result.charAt(0)) + result.substring(1);
	}

	public NftCollectionResponse getAiValuationOnLoad(ReservoirChain chain) {
		String url = chain.getBaseUrl() + apiProperties.getAiValuationonLoad();

		try {
			return restTemplate.getForObject(url, NftCollectionResponse.class);
		} catch (HttpClientErrorException | HttpServerErrorException e) {
			String errorBody = e.getResponseBodyAsString();
			System.err.println("HTTP error while fetching AI valuation: " + e.getStatusCode() + " - " + errorBody);
			throw new PolycruzSystemException(
					String.format("HTTP error while fetching AI valuation: %s", errorBody));
		} catch (ResourceAccessException e) {
			// Typically indicates connection timeout or unreachable host
			throw new PolycruzSystemException("Network error accessing AI valuation endpoint: " + e.getMessage());
		} catch (Exception e) {
			// Fallback for unexpected errors
			throw new PolycruzSystemException(
					"Unexpected error occurred while fetching AI valuation: " + e.getMessage());
		}
	}

	public ChainStatsResponse getChainStats(ReservoirChain chain) {
		String url = chain.getBaseUrl() + apiProperties.getStatsUrl();

		Map<String, Object> uriVariables = new HashMap<>();

		return restTemplate.getForObject(url, ChainStatsResponse.class, uriVariables);
	}

	// public NftCollectionResponse getAiValuationOnLoad(ReservoirChain chain) {
	// String url = chain.getBaseUrl() + apiProperties.getAiValuationonLoad();
	// ;
	//
	// return restTemplate.getForObject(url, NftCollectionResponse.class);
	// }

	public NftCollectionResponse getAiValuationOnLoad(ReservoirChain chain) {
		String url = chain.getBaseUrl() + apiProperties.getAiValuationonLoad();

		try {
			return restTemplate.getForObject(url, NftCollectionResponse.class);
		} catch (HttpClientErrorException | HttpServerErrorException e) {
			String errorBody = e.getResponseBodyAsString();
			System.err.println("HTTP error while fetching AI valuation: " + e.getStatusCode() + " - " + errorBody);
			throw new PolycruzSystemException(
					String.format("HTTP error while fetching AI valuation: %s", errorBody));
		} catch (ResourceAccessException e) {
			// Typically indicates connection timeout or unreachable host
			throw new PolycruzSystemException("Network error accessing AI valuation endpoint: " + e.getMessage());
		} catch (Exception e) {
			// Fallback for unexpected errors
			throw new PolycruzSystemException(
					"Unexpected error occurred while fetching AI valuation: " + e.getMessage());
		}
	}

	public TopTradersResponse fetchTopTraders(ReservoirChain chain, String period) {
		String url = chain.getBaseUrl() + apiProperties.getTopTrader();
		Map<String, Object> uriVariables = new HashMap<>();
		uriVariables.put("period", period);
		return restTemplate.getForObject(url, TopTradersResponse.class, uriVariables);
	}

	public ActivityResponse fetchActivities(ReservoirChain chain, String collection, String sale) {
		String url = chain.getBaseUrl() + apiProperties.getCollectionActivity(); // e.g.,
																					// https://api.reservoir.tools/collections/activity/v6

		URI uri = UriComponentsBuilder.fromHttpUrl(url).queryParam("collection", collection).queryParam("types", sale)
				.build().encode().toUri();

		System.out.println("Final URI: " + uri);

		return restTemplate.getForObject(uri, ActivityResponse.class);
	}

	public CollectionSearchResponse fetchCollectionsSearch(ReservoirChain chain, String prefix) {
		String url = chain.getBaseUrl() + apiProperties.getCollectionSearch(); // e.g.,
																				// https://api.reservoir.tools/collections/activity/v6
		chain.getChainId();

		URI uri = UriComponentsBuilder.fromHttpUrl(url).queryParam("chains", chain.getChainId())
				.queryParam("prefix", prefix)
				.build().encode().toUri();

		System.out.println("uri " + uri);

		return restTemplate.getForObject(uri, CollectionSearchResponse.class);
	}

	public List<String> fetchChain() {
		return Arrays.stream(ReservoirChain.values()).map(Enum::name).collect(Collectors.toList());

	}

	public String callUnleashApi(String cleanPath, Map<String, String> queryParams) {
		String url = BASE_URL + cleanPath;

		UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(url);
		if (queryParams != null) {
			queryParams.forEach(builder::queryParam);
		}

		HttpHeaders headers = new HttpHeaders();
		headers.set("X-API-KEY", API_KEY);
		headers.setContentType(MediaType.APPLICATION_JSON);

		HttpEntity<?> entity = new HttpEntity<>(headers);

		ResponseEntity<String> response = restTemplate.exchange(
				builder.toUriString(),
				HttpMethod.GET,
				entity,
				String.class);

		return response.getBody();
	}

	public NftPriceEstimateResponse getNftPriceEstimate(String blockchain, String address, String tokenId) {
		String url = String.format(
				"https://api.unleashnfts.com/api/v1/nft/%s/%s/%s/price-estimate",
				blockchain, address, tokenId);

		HttpHeaders headers = new HttpHeaders();
		headers.set("x-api-key", "tuF8lxipeseroFej7cowemOsaplfripoCugaKesosPa");
		headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

		HttpEntity<Void> entity = new HttpEntity<>(headers);

		try {
			ResponseEntity<NftPriceEstimateResponse> response = restTemplate.exchange(
					url,
					HttpMethod.GET,
					entity,
					NftPriceEstimateResponse.class);

			return response.getBody();
		} catch (HttpClientErrorException.NotFound ex) {
			// Log and return null or custom response
			System.out.println("NFT Price not found: " + ex.getResponseBodyAsString());
			return null;
		}
	}

	public MarketMetricResponse getMarketMetrics(String currency, String blockchain, String timeRange) {
		String metrics = String.join(",",
				"holders_change", "marketcap_change", "sales_change", "traders_change",
				"traders_buyers_change", "traders_sellers_change", "transactions_change",
				"transfers_change", "volume_change", "washtrade_assets_change",
				"whales_change", "washtrade_volume_change");

		String url = String.format(
				"https://analytic.polycruz.io/api/unleash/market/metrics?currency=%s&blockchain=%s&metrics=%s&time_range=%s",
				currency, blockchain, metrics, timeRange);

		ResponseEntity<MarketMetricResponse> response = restTemplate.exchange(
				url,
				HttpMethod.GET,
				null,
				MarketMetricResponse.class);

		return response.getBody();
	}

	public MarketMetricResponse getMarketMetrics(String currency, String blockchain, String timeRange,
			boolean includeWashtrade) {
		String metrics = String.join(",",
				"holders", "marketcap", "sales", "traders", "traders_buyers", "traders_sellers",
				"transactions", "transfers", "volume", "whales", "washtrade_assets", "washtrade_volume");

		String url = String.format(
				"https://analytic.polycruz.io/api/unleash/market/metrics?currency=%s&blockchain=%s&metrics=%s&time_range=%s&include_washtrade=%s",
				currency, blockchain, metrics, timeRange, includeWashtrade);

		ResponseEntity<MarketMetricResponse> response = restTemplate.exchange(
				url,
				HttpMethod.GET,
				null,
				MarketMetricResponse.class);

		return response.getBody();
	}

	public MarketMetricResponse getMarketMetrics2(String currency, String blockchain, String timeRange,
			boolean includeWashtrade) {
		String metrics = String.join(",",
				"holders", "marketcap", "sales", "traders", "traders_buyers", "traders_sellers",
				"transactions", "transfers", "volume", "whales", "washtrade_assets", "washtrade_volume");

		String url = String.format(
				"https://analytic.polycruz.io/api/unleash/market/metrics?currency=%s&blockchain=%s&metrics=%s&time_range=%s&include_washtrade=%s",
				currency, blockchain, metrics, timeRange, includeWashtrade);

		ResponseEntity<MarketMetricResponse> response = restTemplate.exchange(
				url,
				HttpMethod.GET,
				null,
				MarketMetricResponse.class);

		return response.getBody();
	}

	public MergedMetricResponse mergeMetrics(
			MarketMetricResponse responseChange,
			MarketMetricResponse responseAbsolute,
			MarketMetricResponse responseAllTime) {
		MergedMetricResponse merged = new MergedMetricResponse();
		Map<String, MetricDetail> mergedMap = new HashMap<>();

		Map<String, MetricValue> changeMap = responseChange.getMetric_values();
		Map<String, MetricValue> currentMap = responseAbsolute.getMetric_values();
		Map<String, MetricValue> allTimeMap = responseAllTime.getMetric_values();

		for (String key : currentMap.keySet()) {
			MetricDetail detail = new MetricDetail();

			// Set value/unit from currentMap (e.g., holders, volume, etc.)
			MetricValue current = currentMap.get(key);
			if (current != null) {
				detail.setValue(current.getValue());
				detail.setUnit(current.getUnit());
			}

			// Set change/changeUnit from changeMap (e.g., holders_change, etc.)
			String changeKey = key + "_change";
			MetricValue change = changeMap.get(changeKey);
			if (change != null) {
				detail.setChange(change.getValue());
				detail.setChangeUnit(change.getUnit());
			}

			mergedMap.put(key, detail);
		}

		merged.setMetric_values(mergedMap);
		return merged;
	}

	public ActivityResponse getUserActivity(String walletAddress, String sortBy, boolean includeMetadata) {
		String url = "https://api.reservoir.tools/users/activity/v6"
				+ "?users=" + walletAddress
				+ "&sortBy=" + sortBy
				+ "&includeMetadata=" + includeMetadata;

		HttpHeaders headers = new HttpHeaders();
		headers.set("accept", "application/json");
		headers.set("x-api-key", "2fb57ee0-63ec-53bb-9311-5a0cc6b8bc49"); // optional, depends on Reservoir

		HttpEntity<String> entity = new HttpEntity<>(headers);

		ResponseEntity<ActivityResponse> response = restTemplate.exchange(
				url,
				HttpMethod.GET,
				entity,
				ActivityResponse.class);

		return response.getBody();
	}
}
