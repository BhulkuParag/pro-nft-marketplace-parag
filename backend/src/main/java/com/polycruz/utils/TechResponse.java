package com.polycruz.utils;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import io.swagger.annotations.ApiModelProperty;
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
	@ApiModelProperty(required = true, value = "A collection of information messages that give insight on what happedned in the request. Most indicates what error occured. ")
	private List<InformationMessage> informationMessage;

	@ApiModelProperty(required = true, value = "Response data")
	private T data;

	private String statusCode;

	private String message;

	private LocalDateTime  timestamp;
}