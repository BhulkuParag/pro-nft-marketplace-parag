package com.polycruz.responseUtils;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
@JsonInclude(Include.NON_NULL)
public class ApiResponse<T> {
    private LocalDateTime timeStamp;
    private String status;
    private T data;
    private List<Message> detailMessages;
}
