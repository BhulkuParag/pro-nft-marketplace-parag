import React, { useState } from "react";
import { LineChart } from "@tremor/react";
import Info from "components/latest/info/Info";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const LineChartData = [
    {
        date: '15:00',
        Listing: 250,
        'Listings at Floor(~15%)': 130,
    },
    {
        date: '15:10',
        Listing: 80,
        'Listings at Floor(~15%)': 90,
    },
    {
        date: '15:20',
        Listing: 40,
        'Listings at Floor(~15%)': 150,
    },
    {
        date: '15:30',
        Listing: 150,
        'Listings at Floor(~15%)': 200,
    },
    {
        date: '15:40',
        Listing: 180,
        'Listings at Floor(~15%)': 180,
    },
    {
        date: '15:50',
        Listing: 220,
        'Listings at Floor(~15%)': 130,
    },
    {
        date: '16:00',
        Listing: 250,
        'Listings at Floor(~15%)': 100,
    },
];

interface DropdownOption {
    label: string;
}

const dropdownOptions: DropdownOption[] = [
    { label: "15m" },
    { label: "30m" },
    { label: "24h" },
    { label: "7d" },
    { label: "30d" },
    { label: "90d" },
    { label: "All Time" },
];

const dataFormatter = (number: number) =>
    `${Intl.NumberFormat('us').format(number).toString()}`;

const ListingTrends = () => {

    const [selectedValue, setSelectedValue] = useState(dropdownOptions[0]?.label);

    return (
        <div className="p-5 rounded-md border dark:border-dark-black-01 border-light-black-01">
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <span className="font-medium text-xl text-black dark:text-white">
                        Listing Trends
                    </span>
                    <Info iconType="questionMark" height={5} weight={5} isTooltip={true} />
                </div>
                <Select
                    defaultValue={selectedValue}
                    onValueChange={setSelectedValue}
                >
                    <SelectTrigger>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent
                        align="end"  // "start" | "center" | "end"
                        alignOffset={0}
                    >
                        <SelectGroup>
                            {dropdownOptions?.map((option, index) => (
                                <SelectItem value={option?.label} key={index}>
                                    {option?.label}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <LineChart
                className="h-80 mt-5"
                data={LineChartData}
                index="date"
                categories={['Listing', 'Listings at Floor(~15%)']}
                colors={['#A49BFF', '#4836FF']}
                valueFormatter={dataFormatter}
                yAxisWidth={60}
                onValueChange={(v) => console.log(v)}
            />
        </div>
    )
}

export default ListingTrends;