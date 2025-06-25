package com.polycruz.utils;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class TechResponse<T> {
	@Schema(description   = "A collection of information messages that give insight on what happedned in the request. Most indicates what error occured. ")
	private List<InformationMessage> informationMessage;

	@Schema(description  = "Response data")
	private T data;

	private String statusCode;

	private String message;

	private LocalDateTime  timestamp;
}