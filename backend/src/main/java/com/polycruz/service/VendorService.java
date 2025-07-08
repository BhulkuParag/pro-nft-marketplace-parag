package com.polycruz.service;

import java.lang.reflect.Array;
import java.lang.reflect.Field;
import java.net.URI;
import java.util.*;
import java.util.stream.Collectors;

import com.polycruz.pojo.*;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.retry.annotation.Backoff;
import org.springframework.retry.annotation.Retryable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestClientException;
import org.springframework.web.util.UriComponentsBuilder;

import com.polycruz.ReservoirChain;
import com.polycruz.config.ReservoirApiProperties;
import com.polycruz.exception.PolycruzSystemException;
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

//	public TokenDetail fetchTokenDetails(ReservoirChain chain,String currency) {
//        String baseUrl = chain.getBaseUrl() + apiProperties.getTokenDetailUrl();
//        System.out.println("base url - " +baseUrl);
//        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(baseUrl);
//        if (currency != null && !currency.isBlank()) {
//            builder.queryParam("currency", currency);
//        }
//
//        URI uri = builder.build().toUri();
//        System.out.println("uri - " +uri);
//        ResponseEntity<TokenDetail> response = restTemplate.exchange(
//                uri,
//                HttpMethod.GET,
//                null,
//                new ParameterizedTypeReference<>() {}
//        );
//        if(response.getStatusCode().in != 200) {
//        	
//        }
//        System.out.println(response.getStatusCode());
//        return response.getBody();
//    }

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

//	public ChainStatsResponse getChainStats(ReservoirChain chain) {
//		String url = chain.getBaseUrl() + apiProperties.getStatsUrl();
//
//		Map<String, Object> uriVariables = new HashMap<>();
//
//		return restTemplate.getForObject(url, ChainStatsResponse.class, uriVariables);
//	}

	public StatesApiResponse getStatesStats(ReservoirChain chain) {
		String url = chain.getBaseUrl() + apiProperties.getStatsUrl();
		return restTemplate.getForObject(url, StatesApiResponse.class);
	}

	public StatesApiRawResponse transformStatsToListFormat(StatesApiResponse input) {
		Map<String, TimeFrame> originalStats = input.getData().getStats();
		Map<String, List<StatesApiRawResponse.StatItem>> transformedStats = new HashMap<>();

		for (Map.Entry<String, TimeFrame> entry : originalStats.entrySet()) {
			List<StatesApiRawResponse.StatItem> items = new ArrayList<>();
			Field[] fields = entry.getValue().getClass().getDeclaredFields();

			for (Field field : fields) {
				field.setAccessible(true);
				try {
					Object value = field.get(entry.getValue());
					String name = field.getName();
					String label = toLabel(name);
					items.add(new StatesApiRawResponse.StatItem(label, name, value));
				} catch (IllegalAccessException e) {
					e.printStackTrace();
				}
			}

			transformedStats.put(entry.getKey(), items);
		}

		StatesApiRawResponse raw = new StatesApiRawResponse();
		StatesApiRawResponse.StatsWrapper wrapper = new StatesApiRawResponse.StatsWrapper();
		wrapper.setStats(transformedStats);
		raw.setData(wrapper);
		return raw;
	}

	private String toLabel(String name) {
		StringBuilder label = new StringBuilder();
		for (char c : name.toCharArray()) {
			if (Character.isUpperCase(c)) label.append(" ");
			label.append(c);
		}
		String result = label.toString().trim();
		return Character.toUpperCase(result.charAt(0)) + result.substring(1);
	}

//	public NftCollectionResponse getAiValuationOnLoad(ReservoirChain chain) {
//		String url = chain.getBaseUrl() + apiProperties.getAiValuationonLoad();
//		;
//
//		return restTemplate.getForObject(url, NftCollectionResponse.class);
//	}
	
	public NftCollectionResponse getAiValuationOnLoad(ReservoirChain chain) {
	    String url = chain.getBaseUrl() + apiProperties.getAiValuationonLoad();

	    try {
	        return restTemplate.getForObject(url, NftCollectionResponse.class);
	    } catch (HttpClientErrorException | HttpServerErrorException e) {
	        String errorBody = e.getResponseBodyAsString();
	        System.err.println("HTTP error while fetching AI valuation: " + e.getStatusCode() + " - " + errorBody);
	        throw new PolycruzSystemException(
	            String.format("HTTP error while fetching AI valuation: %s", errorBody)
	        );
	    } catch (ResourceAccessException e) {
	        // Typically indicates connection timeout or unreachable host
	        throw new PolycruzSystemException("Network error accessing AI valuation endpoint: " + e.getMessage());
	    } catch (Exception e) {
	        // Fallback for unexpected errors
	        throw new PolycruzSystemException("Unexpected error occurred while fetching AI valuation: " + e.getMessage());
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
		
		URI uri = UriComponentsBuilder.fromHttpUrl(url).queryParam("chains", chain.getChainId()).queryParam("prefix", prefix)
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
				String.class
		);

		return response.getBody();
	}

	public NftPriceEstimateResponse getNftPriceEstimate(String blockchain, String address, String tokenId) {
		String url = String.format(
				"https://api.unleashnfts.com/api/v1/nft/%s/%s/%s/price-estimate",
				blockchain, address, tokenId
		);

		HttpHeaders headers = new HttpHeaders();
		headers.set("x-api-key", "tuF8lxipeseroFej7cowemOsaplfripoCugaKesosPa");
		headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

		HttpEntity<Void> entity = new HttpEntity<>(headers);

		ResponseEntity<NftPriceEstimateResponse> response = restTemplate.exchange(
				url,
				HttpMethod.GET,
				entity,
				NftPriceEstimateResponse.class
		);

		return response.getBody();
	}



}
