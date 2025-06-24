package com.polycruz.webscoket;

import org.springframework.web.socket.*;
import org.springframework.web.socket.handler.TextWebSocketHandler;
import org.springframework.stereotype.Component;

@Component
public class ReservoirWebSocketHandler extends TextWebSocketHandler {

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        String subscribeMessage = """
        {
          "type": "subscribe",
          "topic": "tokens.created"
        }
        """;
        session.sendMessage(new TextMessage(subscribeMessage));
    }

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) {
        System.out.println("Received: " + message.getPayload());
        // You can map to a POJO and forward to other services
    }
}

