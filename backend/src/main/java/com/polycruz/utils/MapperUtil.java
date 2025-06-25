package com.polycruz.utils;

import java.util.Objects;
import java.util.Optional;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

public class MapperUtil {
	private MapperUtil() {}
	
	
	public static <T> String formatToPretty(T value) {
		String prettyResponse = null;
		if(Objects.nonNull(value)) {
			try {
				ObjectMapper mapper = new ObjectMapper();
				mapper.registerModule (new JavaTimeModule());
				prettyResponse = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(value);
			}catch(JsonProcessingException e) {
				prettyResponse = value.toString();
			}
		}
		return Optional.ofNullable(prettyResponse).orElse(null);
		
	}
	
	public static <T> String format (T value) {
		String response = null;
		if(Objects.nonNull(value)) {
			try {
				ObjectMapper mapper = new ObjectMapper();
				mapper.registerModule (new JavaTimeModule());
				response = mapper.writeValueAsString(value);
			}catch(JsonProcessingException e) {
				response = value.toString();
			}
		}
		return Optional.ofNullable(response).orElse(null);
	}

}
