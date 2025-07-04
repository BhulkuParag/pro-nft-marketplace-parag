package com.polycruz.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.polycruz.ReservoirChain;
import com.polycruz.pojo.ActivityResponse;
import com.polycruz.pojo.ChainStatsResponse;
import com.polycruz.pojo.CollectionSearchResponse;
import com.polycruz.pojo.CollectionsV7Response;
import com.polycruz.pojo.NftCollectionResponse;
import com.polycruz.pojo.NftSalesResponse;
import com.polycruz.pojo.SalesApiResponse;
import com.polycruz.pojo.TokenDetail;
import com.polycruz.pojo.TokenResponse;
import com.polycruz.pojo.TopTradersResponse;
import com.polycruz.pojo.TrendingApiResponse;
import com.polycruz.pojo.TrendingMintsResponse;
import com.polycruz.service.VendorService;
import com.polycruz.utils.ResponseTransformer;
import com.polycruz.utils.TechResponse;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/reservoir")
@RequiredArgsConstructor 
public class ReservoirController {
    private final VendorService vendorService;
    private final ResponseTransformer transformer;

    
    
    @GetMapping("/trending-api")
    @Operation( summary = "1.Listing Table a.Trending Collections")
    public ResponseEntity<TechResponse<TrendingApiResponse>> getTrendingCollections(
    		@RequestParam ReservoirChain chain,
    		  @RequestParam(defaultValue = "24h") String period,
    	        @RequestParam(defaultValue = "volume") String sortBy
    		) {
        return new ResponseEntity<>(transformer.transform(vendorService.getTrendingCollections(chain,period, sortBy)),
                HttpStatus.OK);
    }
    
    @GetMapping("/top-sales")
    @Operation( summary = "1.Listing Table c. Top Sales")
    public ResponseEntity<TechResponse<SalesApiResponse>>  fetchSales(
    		@RequestParam ReservoirChain chain,
            @RequestParam(defaultValue = "1749689257") long startTimestamp,
            @RequestParam(defaultValue = "price") String sortBy,
            @RequestParam(defaultValue = "desc") String sortDirection,
            @RequestParam(defaultValue = "10") int limit,
            @RequestParam(defaultValue = "0") int offset,
            @RequestParam(defaultValue = "true") boolean includeTokenMetadata
        ) {
        return new ResponseEntity<>(transformer.transform(vendorService.getSalesData(chain,
                startTimestamp, sortBy, sortDirection, limit, offset, includeTokenMetadata
                )),
                HttpStatus.OK);
    }
    
    @GetMapping("/trending-mints")
    @Operation( summary = "1.Listing Table d. Top Mint Ranking")
    public  ResponseEntity<TechResponse<TrendingMintsResponse>> getTrendingMints(
    		@RequestParam ReservoirChain chain,
    		 @RequestParam(defaultValue = "24h") String period,
             @RequestParam(defaultValue = "10") int limit,
             @RequestParam(defaultValue = "desc") String sortDirection,
             @RequestParam(defaultValue = "0") int offset
    		) {
        return new ResponseEntity<>(transformer.transform(vendorService.getTrendingMints(chain,period, limit, sortDirection, offset)),
                HttpStatus.OK);
    }
    
    @GetMapping("/collections/v7")
    @Operation( summary = "2.Collection Details a.overview")
    public ResponseEntity<TechResponse<CollectionsV7Response>> getCollectionsV7(
    		@RequestParam ReservoirChain chain,
    		@RequestParam(value = "contract",defaultValue = "0x5af0d9827e0c53e4799bb226655a1de152a425a5", required = false) String contract) {
        return new ResponseEntity<>(transformer.transform(vendorService.fetchCollections(chain,contract)),
                HttpStatus.OK);
    }
    
    @GetMapping("/tokens")
    @Operation( summary = "2.Collection Details b.Items")
    public ResponseEntity<TechResponse<TokenResponse>> getTokens(
    		@RequestParam ReservoirChain chain,
            @RequestParam(value = "collection",defaultValue = "0x5af0d9827e0c53e4799bb226655a1de152a425a5", required = false) String collection,
            @RequestParam(value = "sortBy", defaultValue = "floorAskPrice") String sortBy,
            @RequestParam(value = "limit", defaultValue = "40") int limit) {

        return new ResponseEntity<>(transformer.transform(vendorService.fetchTokens(chain,collection, sortBy, limit)),HttpStatus.OK);
    }
    
    @GetMapping("/tokens/item-details")
    @Operation( summary = "2.Collection Details c.Items details")
    public ResponseEntity<TechResponse<TokenResponse>> getTokenData(
    		@RequestParam ReservoirChain chain,
            @RequestParam(defaultValue = "0x5af0d9827e0c53e4799bb226655a1de152a425a5:9099") String tokens,
            @RequestParam(defaultValue = "floorAskPrice") String sortBy) {

    	return new ResponseEntity<>(transformer.transform(vendorService.fetchTokenData(chain,tokens, sortBy)),HttpStatus.OK);
        
    }
    
    @GetMapping("/nft-sales")
    @Operation(summary = "1.Listing Table b.NFT Sales")
    public ResponseEntity<TechResponse<NftSalesResponse>> getNftSales(
    		@RequestParam ReservoirChain chain,
            @RequestParam(required = false, defaultValue = "true") boolean includeTokenMetadata
    ) {
        return new ResponseEntity<>(transformer.transform(vendorService.fetchNftSales(chain,includeTokenMetadata)), HttpStatus.OK);
    }
    
    @GetMapping("/activity")
    @Operation(summary = "2.Collection Details e.Activity with all sorting")
    public ResponseEntity<TechResponse<ActivityResponse>> getActivity(
    		@RequestParam ReservoirChain chain,
            @RequestParam(required = false, defaultValue = "eventTimestamp") String sortBy,
            @RequestParam(required = false, defaultValue = "false") Boolean includeMetadata,
            @Parameter(
                    description = "Type of event. Example: ask_cancel",
                    schema = @Schema(allowableValues = {"ask_cancel", "sale", "mint","transfer","ask","bid","bid_cancel"},
                    defaultValue = "")
            		)
            @RequestParam(required = false) String types
    ) {
        return new ResponseEntity<>(transformer.transform(vendorService.fetchActivity(chain,sortBy, includeMetadata, types)), HttpStatus.OK);
    }

     @GetMapping("/token-detail")
    @Operation( summary = "2.Collection Details d. ")
    public ResponseEntity<TechResponse<TokenDetail>> getTokenDetails(
    		@RequestParam ReservoirChain chain,
            @RequestParam(required = false,defaultValue = "eth") String currency
    ) {
        return new ResponseEntity<>(transformer.transform(vendorService.fetchTokenDetails(chain,currency)), HttpStatus.OK);
    }
     
     @GetMapping("/stats")
     @Operation(summary = "chain stats v1")
     public ResponseEntity<TechResponse<ChainStatsResponse>> getChainStats(@RequestParam ReservoirChain chain
            
     ) {
         return new ResponseEntity<>(transformer.transform(vendorService.getChainStats(chain)), HttpStatus.OK);
     }
     
     @GetMapping("/collection/v1")
     @Operation(summary = "AI Valuation a. on load")
     public ResponseEntity<TechResponse<NftCollectionResponse>> getCollectionData(@RequestParam ReservoirChain chain
            
     ) {
    	 return new ResponseEntity<>(transformer.transform(vendorService.getAiValuationOnLoad(chain)), HttpStatus.OK);
     }
     
     @GetMapping("/top-traders")
     @Operation( summary = "AI Valuation 2) standard a) Holders")
     public ResponseEntity<TechResponse<TopTradersResponse>> getTopTraders(
    		 @RequestParam ReservoirChain chain,
     		  @RequestParam(defaultValue = "7d") String period
     	       
     		) {
         return new ResponseEntity<>(transformer.transform(vendorService.fetchTopTraders(chain,period)),
                 HttpStatus.OK);
     }
     
     @GetMapping("/collection/activity")
     @Operation( summary = "AI Valuation 2) standard b) Top sales c) listing d) transfer")
     public ResponseEntity<TechResponse<ActivityResponse>> fetchActivities(
    		 @RequestParam ReservoirChain chain,
     		  @RequestParam(defaultValue = "0xbd3531da5cf5857e7cfaa92426877b022e612cf8") String collection,
     		 @RequestParam(defaultValue = "sale") String type
     	       
     		) {
         return new ResponseEntity<>(transformer.transform(vendorService.fetchActivities(chain,collection,type)),
                 HttpStatus.OK);
     }
     
     @GetMapping("/collection/search")
     @Operation( summary = "AI Valuation 3) Main Search API a) onChange (search input) ")
     public ResponseEntity<TechResponse<CollectionSearchResponse>> fetchCollectionsSearch(
    		 @RequestParam ReservoirChain chain,
     		  @RequestParam(defaultValue = "1") String chains,
     		 @RequestParam(defaultValue = "pudgy") String prefix
     	       
     		) {
         return new ResponseEntity<>(transformer.transform(vendorService.fetchCollectionsSearch(chain,Integer.valueOf(chains), prefix)),
                 HttpStatus.OK);
     }

}


