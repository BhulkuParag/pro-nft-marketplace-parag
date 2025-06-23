package com.polycruz.utils;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class InformationMessageBuilder {

	public static InformationMessage build(String key, String message) {
		InformationMessage informationMessage = new InformationMessage();
		informationMessage.setKey(key);
		informationMessage.setMessage(message);
		return informationMessage;
	}

}
