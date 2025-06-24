package com.polycruz.pojo;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class AllRoyalties {
	  private List<Breakdown> onchain;
      private List<Breakdown> opensea;

}
