package com.polycruz.pojo;

import java.util.List;

import lombok.Data;

@Data
public class Stats {
	private List<StatItem> day1;
	private List<StatItem> day7;
}
