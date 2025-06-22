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
	
	String jsonString = "{"
		    + "\"id\":\"0xf70f3455a8137dbc9e9c15a62fb8a51ccd980f5b\","
		    + "\"image\":\"https://i.seadn.io/s/raw/files/9d83ed2f93f1b0c2e4e6d0c7b8cfd12e.gif?w=500&auto=format\","
		    + "\"banner\":\"https://i.seadn.io/s/primary-drops/0xf70f3455a8137dbc9e9c15a62fb8a51ccd980f5b/34880992:about:media:0be519eb-1173-4de4-928c-19621db35597.png?w=500&auto=format\","
		    + "\"name\":\"KABOOM!\","
		    + "\"description\":\"? KABOOM! � The NFT Collection That Blows Itself Up ?\\nKABOOM!, the only NFT collection that�s built to self-destruct � literally. Every piece in this collection is a ticking time bomb, and when it goes off� rewards explode out.\\nHere�s how it works:\\n1. Buy a Bomb NFT ?\\n2. List it for sale on OpenSea (because that�s how you arm it only with the right price)\\n3. Wait for the detonation (we�ll handle that part ?)\\n4. Receive random rewards straight to your wallet! ?\\n\\n? REWARDS THAT DROP WHEN BOMBS GO BOOM\\nEvery explosion has a chance to drop:\\n* ? ETH directly to your wallet\\n* ?? Limited-edition KABOOM! art\\n* ? Mystery NFTs from wild collabs\\n* ?? Future whitelist spots\\n* ? Totally unpredictable weirdness\\nThe more bombs that go off, the bigger the chaos.?It�s like an airdrop � with TNT.\\n\\nThis is not your average NFT drop. This is KABOOM!?We�re here to leave OpenSea a little scorched.?Join the chaos. Embrace the blast.\","
		    + "\"isSpam\":false,"
		    + "\"isMinting\":true,"
		    + "\"onSaleCount\":1024,"
		    + "\"volumeChange\":{\"1day\":0,\"7day\":49.964414466798466,\"30day\":0.01327007996243771},"
		    + "\"collectionVolume\":{\"1day\":0.0043,\"7day\":0.0043,\"30day\":0.00542,\"allTime\":0.462},"
		    + "\"contractKind\":\"erc721\","
		    + "\"tokenCount\":\"10093\","
		    + "\"ownerCount\":356,"
		    + "\"sampleImages\":["
		    + "\"https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf2qdgt8DpT0d%2FNncYTOKOdWl%2BZ3E%2BZMjBRvrhURHLh8o9KZEzXqa9fBfbRK9cYlJ%2FP83jrKfRKwSzwxHKdQbG%2FA6H%2FICqf%2FdZ85bmn7WbCBF\","
		    + "\"https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf2qdgt8DpT0d%2FNncYTOKOdWl%2BZ3E%2BZMjBRvrhURHLh8o9KZEzXqa9fBfbRK9cYlJ%2FP83jrKfRKwSzwxHKdQbG%2FA6H%2FICqf%2FdZ85bmn7WbCBF\","
		    + "\"https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf2qdgt8DpT0d%2FNncYTOKOdWl%2BZ3E%2BZMjBRvrhURHLh8o9KZEzXqa9fBfbRK9cYlJ%2FP83jrKfRKwSzwxHKdQbG%2FA6H%2FICqf%2FdZ85bmn7WbCBF\","
		    + "\"https://img.reservoir.tools/images/v2/mainnet/i9YO%2F4yHXUdJsWcTqhqvf2qdgt8DpT0d%2FNncYTOKOdWl%2BZ3E%2BZMjBRvrhURHLh8o9KZEzXqa9fBfbRK9cYlJ%2FP83jrKfRKwSzwxHKdQbG%2FA6H%2FICqf%2FdZ85bmn7WbCBF\""
		    + "],"
		    + "\"mintType\":\"paid\","
		    + "\"mintPrice\":{"
		    + "\"currency\":{\"contract\":\"0x0000000000000000000000000000000000000000\",\"name\":\"Ether\",\"symbol\":\"ETH\",\"decimals\":18},"
		    + "\"amount\":{\"raw\":\"1000000000000000\",\"decimal\":0.001,\"usd\":2.52218,\"native\":null}"
		    + "},"
		    + "\"maxSupply\":200000000,"
		    + "\"mintStandard\":\"seadrop-v1.0\","
		    + "\"createdAt\":\"2025-04-19T12:02:04.649Z\","
		    + "\"startDate\":\"2025-04-19T12:00:00.000Z\","
		    + "\"endDate\":\"2026-04-19T12:00:00.000Z\","
		    + "\"mintCount\":1713,"
		    + "\"sixHourCount\":1713,"
		    + "\"oneHourCount\":0,"
		    + "\"mintVolume\":0,"
		    + "\"openseaVerificationStatus\":\"not_requested\","
		    + "\"magicedenVerificationStatus\":null,"
		    + "\"mintedTimestamp\":1745064119,"
		    + "\"lastMintTimestamp\":1750499027,"
		    + "\"mintStages\":[{"
		    + "\"stage\":\"public-sale\","
		    + "\"kind\":\"public\","
		    + "\"standard\":\"seadrop-v1.0\","
		    + "\"tokenId\":null,"
		    + "\"price\":{"
		    + "\"currency\":{\"contract\":\"0x0000000000000000000000000000000000000000\",\"name\":\"Ether\",\"symbol\":\"ETH\",\"decimals\":18},"
		    + "\"amount\":{\"raw\":\"1000000000000000\",\"decimal\":0.001,\"usd\":2.52218,\"native\":null}"
		    + "},"
		    + "\"pricePerQuantity\":null,"
		    + "\"startTime\":1745064000,"
		    + "\"endTime\":1776600000,"
		    + "\"maxMints\":200000000,"
		    + "\"maxMintsPerWallet\":500"
		    + "}],"
		    + "\"floorAsk\":{"
		    + "\"id\":\"0xb124d984e734b9468db55313669b1fa6004cbf1b11930425c317b048998afa51\","
		    + "\"sourceDomain\":\"opensea.io\","
		    + "\"price\":{"
		    + "\"currency\":{\"contract\":\"0x0000000000000000000000000000000000000000\",\"name\":\"Ether\",\"symbol\":\"ETH\",\"decimals\":18},"
		    + "\"amount\":{\"raw\":\"85990000000000\",\"decimal\":0.00009,\"usd\":0.21688,\"native\":0.00009}"
		    + "}},"
		    + "\"creator\":\"0x8a3ea79c0c6521b3a4a868e8f964f4da8cd422a7\""
		    + "};";


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
}
