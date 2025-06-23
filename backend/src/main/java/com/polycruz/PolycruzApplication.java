package com.polycruz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.polycruz.config.ReservoirApiProperties;

@SpringBootApplication(exclude = {
	    org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration.class,
	    org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration.class
	})
@EnableConfigurationProperties(ReservoirApiProperties.class)
public class PolycruzApplication {

	public static void main(String[] args) {
		SpringApplication.run(PolycruzApplication.class, args);
	}

}
