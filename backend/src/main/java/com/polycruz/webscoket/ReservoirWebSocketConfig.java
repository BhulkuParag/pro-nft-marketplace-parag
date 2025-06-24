package com.polycruz.webscoket;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.client.WebSocketConnectionManager;
import org.springframework.web.socket.client.standard.StandardWebSocketClient;

import com.polycruz.config.ReservoirApiProperties;

import jakarta.annotation.PostConstruct;

@Configuration
public class ReservoirWebSocketConfig {

    private final ReservoirWebSocketHandler handler;
    private final ReservoirApiProperties apiProperties;

    public ReservoirWebSocketConfig(ReservoirWebSocketHandler handler,ReservoirApiProperties apiProperties) {
        this.handler = handler;
        this.apiProperties = apiProperties;
    }

   
    @PostConstruct
    public void connect() {
        String wsUrl = "wss://ws.reservoir.tools?api_key=" + apiProperties.getApiKey();

        StandardWebSocketClient client = new StandardWebSocketClient();
        WebSocketConnectionManager manager = new WebSocketConnectionManager(client, handler, wsUrl);
        manager.setAutoStartup(true);
        manager.start();
    }
}
