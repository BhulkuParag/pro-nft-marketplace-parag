package com.polycruz;

import java.util.Arrays;

import com.polycruz.exception.PolycruzBusinessException;

public enum ReservoirChain {
	ETHEREUM("ethereum", "https://api.reservoir.tools", 1), 
	BNB("bnb", "https://api-bsc.reservoir.tools", 56),
	POLYGON("polygon", "https://api-polygon.reservoir.tools", 137),
	BASE("base", "https://api-base.reservoir.tools", 8453),
	APECHAIN("apechain", "https://api-apechain.reservoir.tools", 999), // Replace with correct ID if known
	ARBITRUM("arbitrum", "https://api-arbitrum.reservoir.tools", 42161),
	BERACHAIN("berachain", "https://api-berachain.reservoir.tools", 80085),
	BLAST("blast", "https://api-blast.reservoir.tools", 81457),
	AVALANCHE("avalanche", "https://api-avalanche.reservoir.tools", 43114),
	FLOW("flow", "https://api-flow.reservoir.tools", 99999), // Placeholder, not EVM
	LINEA("linea", "https://api-linea.reservoir.tools", 59144),
	NEBULA("nebula", "https://api-nebula.reservoir.tools", 999), // Unknown ID
	OPTIMISM("optimism", "https://api-optimism.reservoir.tools", 10),
	POLYGON_ZKEVM("polygon_zkevm", "https://api-polygon-zkevm.reservoir.tools", 1101),
	SEI("sei", "https://api-sei.reservoir.tools", 999), // Non-EVM, placeholder
	ZORA("zora", "https://api-zora.reservoir.tools", 7777777),
	ZKSYNC("zksync", "https://api-zksync.reservoir.tools", 324);

	private final String name;
	private final String baseUrl;
	private final int chainId;

	ReservoirChain(String name, String baseUrl, int chainId) {
		this.name = name;
		this.baseUrl = baseUrl;
		this.chainId = chainId;
	}

	public String getName() {
		return name;
	}

	public String getBaseUrl() {
		return baseUrl;
	}

	public int getChainId() {
		return chainId;
	}

	public static String getBaseUrl(String name) {
	    return Arrays.stream(values())
	        .filter(chain -> chain.name.equalsIgnoreCase(name))
	        .map(chain -> chain.baseUrl)
	        .findFirst()
	        .orElseThrow(() -> new PolycruzBusinessException("Unsupported chain: " + name));
	}


	public static ReservoirChain fromName(String name) {
		for (ReservoirChain c : values()) {
			if (c.name.equalsIgnoreCase(name))
				return c;
		}
		throw new PolycruzBusinessException("Unsupported chain: " + name);
	}
	
	



	
}
