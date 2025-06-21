package com.polycruz.service;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.polycruz.config.ReservoirApiProperties;
import com.polycruz.pojo.CollectionsV7Response;
import com.polycruz.pojo.SalesApiResponse;
import com.polycruz.pojo.TokenResponse;
import com.polycruz.pojo.TrendingApiResponse;
import com.polycruz.pojo.TrendingMintsResponse;

import lombok.RequiredArgsConstructor;
import org.springframework.web.util.UriComponentsBuilder;
import java.net.URI;

@Service
@RequiredArgsConstructor
public class VendorService {
	
	private final RestTemplate restTemplate = new RestTemplate();
	private final ReservoirApiProperties apiProperties;
	
	
	 	public TrendingApiResponse getTrending24h() {
	        String url = "https://api.reservoir.tools/collections/trending/v1?period=24h&sortBy=volume";
	        RestTemplate restTemplate = new RestTemplate();
	        return restTemplate.getForObject(url, TrendingApiResponse.class);
	    }
	 	
	 	public SalesApiResponse getSales(long startTimestamp, int limit, int offset) {
	        String url = String.format(
	                "https://api.reservoir.tools/sales/v6?startTimestamp=%d&sortBy=price&sortDirection=desc&limit=%d&offset=%d&includeTokenMetadata=true",
	                startTimestamp, limit, offset
	        );
	        return restTemplate.getForObject(url, SalesApiResponse.class);
	    }
	 	
//	 	public TrendingMintsResponse getTrendingMints() {
//	 		ResponseEntity<String> raw = restTemplate.getForEntity(apiProperties.getTrendingMintsUrl(), String.class);
//	 		System.out.println("RAW: " + raw.getBody());
//	        return restTemplate.getForObject(apiProperties.getTrendingMintsUrl(), TrendingMintsResponse.class);
//	    }
	 	
	 	public TrendingMintsResponse fetchTrendingMints() {
	 	    String baseUrl = apiProperties.getTrendingMintsUrl();

	 	    URI uri = UriComponentsBuilder.fromHttpUrl(baseUrl)
	 	    		  .queryParam("period", "24h") 
	 	            .queryParam("limit", 10)
	 	            .queryParam("sortDirection", "desc")
	 	            .queryParam("offset", 0)
	 	            .build()
	 	            .toUri();
	 	   System.out.println("Calling URL: " + uri);
	 	    ResponseEntity<TrendingMintsResponse> response = restTemplate.exchange(
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
	 	
	 	public CollectionsV7Response fetchCollections(String contract) {
	        URI uri = UriComponentsBuilder.fromHttpUrl(apiProperties.getCollectionsV7Url())
	            .queryParam("contract", contract)
	            .build()
	            .encode()
	            .toUri();
	        
	        ResponseEntity<String> response2 = restTemplate.exchange(
	 			    uri,
	 			    HttpMethod.GET,
	 			   null,
	 			    String.class
	 			);
	 			System.out.println("Raw JSON: " + response2.getBody());
	 	    

	        return restTemplate.getForObject(uri, CollectionsV7Response.class);
	    }
	 	
	 	public TokenResponse fetchTokens(String collection, String sortBy, int limit) {
	        String uri = UriComponentsBuilder.fromHttpUrl(apiProperties.getTokens())
	                .queryParam("collection", collection)
	                .queryParam("sortBy", sortBy)
	                .queryParam("limit", limit)
	                .toUriString();

	        return restTemplate.getForObject(uri, TokenResponse.class);
	    }

}
