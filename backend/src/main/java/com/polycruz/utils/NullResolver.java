package com.polycruz.utils;

import java.util.Optional;
import java.util.function.Supplier;


public class NullResolver {
	
	private NullResolver() {
		throw new IllegalStateException("Utility Class");
	}
	
	public static <T> Optional<T> resolve (org.apache.logging.log4j.util.Supplier<T> resolver){
		try {
			T result = resolver.get();
			return Optional.ofNullable(result);
		}catch (NullPointerException e) {
			return Optional.empty();
		}
		
	}

}
