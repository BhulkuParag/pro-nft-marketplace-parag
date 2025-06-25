package com.polycruz.responseUtils;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;


@Component
public class ResponseConverter {
	public final String SUCCESS = "Success";
	public final String ERROR = "Error";
	
	public <T> ApiResponse<T> convert(T data){
		return ApiResponse.<T>builder().data(data).status(SUCCESS).timeStamp(LocalDateTime.now()).build();
	}
	
	public <T> ApiResponse<T> convert(String status , T data){
		return ApiResponse.<T>builder().data(data).status(status).timeStamp(LocalDateTime.now()).build();
	}
	
	public <T> ApiResponse<T> convert(List<Message> detailMessages){
		setDefaulttoMessages(detailMessages);
		return ApiResponse.<T>builder().detailMessages(detailMessages).status(ERROR).timeStamp(LocalDateTime.now()).build();
	}
	
	public <T> ApiResponse<T> convert(String status ,List<Message> detailMessages){
		setDefaulttoMessages(detailMessages);
		return ApiResponse.<T>builder().detailMessages(detailMessages).status(status).timeStamp(LocalDateTime.now()).build();
	}
	
	public <T> ApiResponse<T> convert(String status, T data ,List<Message> detailMessages){
		setDefaulttoMessages(detailMessages);
		return ApiResponse.<T>builder().data(data).detailMessages(detailMessages).status(status).timeStamp(LocalDateTime.now()).build();
	}

	private void setDefaulttoMessages(List<Message> detailMessages) {
		// TODO Auto-generated method stub
		if(!CollectionUtils.isEmpty(detailMessages)) {
			for (Message message : detailMessages) {
				if(Objects.isNull(message.getMessageType())) {
					message.setMessageType(MessageType.ERROR);
				}
			}
		}
		
	}
}


