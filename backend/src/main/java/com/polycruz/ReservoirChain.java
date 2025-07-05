package com.polycruz;

public enum ReservoirChain {

    ETHEREUM("ethereum", "https://api.reservoir.tools"),
    BNB("bnb", "https://api-bsc.reservoir.tools"),
    POLYGON("polygon", "https://api-polygon.reservoir.tools"),
    BASE("base", "https://api-base.reservoir.tools"),
    APECHAIN("apechain", "https://api-apechain.reservoir.tools"),
    ARBITRUM("arbitrum", "https://api-arbitrum.reservoir.tools"),
    BERACHAIN("berachain", "https://api-berachain.reservoir.tools"),
    BLAST("blast", "https://api-blast.reservoir.tools"),
    AVALANCHE("avalanche", "https://api-avalanche.reservoir.tools"),
    FLOW("flow", "https://api-flow.reservoir.tools"),
    LINEA("linea", "https://api-linea.reservoir.tools"),
    NEBULA("nebula", "https://api-nebula.reservoir.tools"),
    OPTIMISM("optimism", "https://api-optimism.reservoir.tools"),
    POLYGON_ZKEVM("polygon_zkevm", "https://api-polygon-zkevm.reservoir.tools"),
    SEI("sei", "https://api-sei.reservoir.tools"),
    ZORA("zora", "https://api-zora.reservoir.tools"),
    ZKSYNC("zksync", "https://api-zksync.reservoir.tools");

    private final String name;
    private final String baseUrl;

    ReservoirChain(String name, String baseUrl) {
        this.name = name;
        this.baseUrl = baseUrl;
    }

    public String getBaseUrl() {
        return baseUrl;
    }
    
    public static String getBaseUrl(String name) {
        for (ReservoirChain chain : values()) {
            if (chain.name.equalsIgnoreCase(name)) {
                return chain.baseUrl;
            }
        }
        throw new IllegalArgumentException("Unsupported chain: " + name);
    }
    
    public static ReservoirChain fromName(String name) {
        for (ReservoirChain c : values()) {
            if (c.name.equalsIgnoreCase(name)) return c;
        }
        throw new IllegalArgumentException("Unsupported chain: " + name);
    }

    public String getName() {
        return name;
    }
}
