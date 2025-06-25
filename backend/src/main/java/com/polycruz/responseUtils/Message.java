package com.polycruz.responseUtils;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Message {
	private String key;
	private String description;
	private String domain;
	private MessageType messageType;
	private String sourceId;
	private String source;

	public Message(String key, String description) {
		this.key = key;
		this.description = description;
	}
}