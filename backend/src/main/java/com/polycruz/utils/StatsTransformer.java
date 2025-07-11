package com.polycruz.utils;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.polycruz.pojo.ReservoirRawStatsResponse;
import com.polycruz.pojo.StatItem;
import com.polycruz.pojo.TransformedStatsResponse;

public class StatsTransformer {

    public static TransformedStatsResponse transform(ReservoirRawStatsResponse raw) {
        TransformedStatsResponse result = new TransformedStatsResponse();
        TransformedStatsResponse.TransformedData data = new TransformedStatsResponse.TransformedData();

        Map<String, List<StatItem>> transformedStats = new HashMap<>();

        raw.getStats().forEach((timeFrame, values) -> {
            List<StatItem> items = new ArrayList<>();

            for (Field field : values.getClass().getDeclaredFields()) {
                field.setAccessible(true);
                try {
                    Object val = field.get(values);
                    if (val instanceof Number) {
                        String name = field.getName();
                        String label = generateLabel(name); // ✅ dynamically generated

                        StatItem item = new StatItem();
                        item.setName(name);
                        item.setLabel(label);
                        item.setValue(((Number) val).doubleValue());

                        items.add(item);
                    }
                } catch (IllegalAccessException e) {
                    throw new RuntimeException("Failed to transform stats", e);
                }
            }

            transformedStats.put(timeFrame, items);
        });

        data.setStats(transformedStats);
        result.setData(data);
        return result;
    }

    // ✅ Converts camelCase -> Capitalized Spaced Words (e.g., mintCount -> Mint Count)
    private static String generateLabel(String camelCase) {
        StringBuilder label = new StringBuilder();
        char[] chars = camelCase.toCharArray();
        label.append(Character.toUpperCase(chars[0]));

        for (int i = 1; i < chars.length; i++) {
            if (Character.isUpperCase(chars[i])) {
                label.append(' ');
            }
            label.append(chars[i]);
        }

        return label.toString();
    }
}


