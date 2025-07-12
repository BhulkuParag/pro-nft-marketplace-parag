package com.polycruz.config;

import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class HttpConnectorConfig {

    @Bean
    public WebServerFactoryCustomizer<TomcatServletWebServerFactory> containerCustomizer() {
        return factory -> {
            factory.addAdditionalTomcatConnectors(HttpConnector());
        };
    }

    private org.apache.catalina.connector.Connector HttpConnector() {
        org.apache.catalina.connector.Connector connector =
                new org.apache.catalina.connector.Connector(org.apache.coyote.http11.Http11NioProtocol.class.getName());
        connector.setScheme("http");
        connector.setPort(8085); // HTTP
        connector.setSecure(false);
        connector.setRedirectPort(8081); // Redirect to HTTPS
        return connector;
    }
}
