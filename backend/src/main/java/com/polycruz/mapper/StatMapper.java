package com.polycruz.mapper;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.polycruz.pojo.StatItem;
import com.polycruz.pojo.Stats;
import com.polycruz.pojo.StatsData;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.databind.JsonNode;

public class StatMapper {
    public StatsData transform(JsonNode input) {
        ObjectMapper mapper = new ObjectMapper();
        StatsData statsData = new StatsData();
        Stats stats = new Stats();

        stats.setDay1(mapToList(input.path("data").path("stats").path("1day")));
        stats.setDay7(mapToList(input.path("data").path("stats").path("7day")));

        statsData.setStats(stats);
        return statsData;
    }

    private List<StatItem> mapToList(JsonNode node) {
        List<StatItem> list = new ArrayList<>();

        list.add(createItem("Mint Count", "mintCount", node.path("mintCount").asDouble()));
        list.add(createItem("Sale Count", "saleCount", node.path("saleCount").asDouble()));
        list.add(createItem("Total Count", "totalCount", node.path("totalCount").asDouble()));
        list.add(createItem("Mint Volume", "mintVolume", node.path("mintVolume").asDouble()));
        list.add(createItem("Sale Volume", "saleVolume", node.path("saleVolume").asDouble()));
        list.add(createItem("Total Volume", "totalVolume", node.path("totalVolume").asDouble()));

        return list;
    }

    private StatItem createItem(String label, String name, double value) {
        StatItem item = new StatItem();
        item.setLabel(label);
        item.setName(name);
        item.setValue(value);
        return item;
    }
}

