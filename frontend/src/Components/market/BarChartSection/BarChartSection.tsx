import { useState } from 'react';
import Info from '../../../Components/info/Info';
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { BarChart } from '@tremor/react';

interface DropdownOption {
  label: string;
}

const dropdownOptions: DropdownOption[] = [
  { label: '5m' },
  { label: '30m' },
  { label: '1hr' },
  { label: '6hr' },
  { label: '24hr' },
  { label: '7d' },
  { label: '30d' },
];

interface BarData {
  name: string;
  yData: number;
}

interface BarDataItem {
  title: string;
  barData: BarData[];
}

const DataArr: BarDataItem[] = [
  {
    title: 'Number of web3 products owned',
    barData: [
      {
        name: '1',
        yData: 10,
      },
      {
        name: '2-5',
        yData: 15,
      },
      {
        name: '5-10',
        yData: 5,
      },
      {
        name: '10-20',
        yData: 20,
      },
      {
        name: '20+',
        yData: 85,
      },
    ],
  },
  {
    title: 'Wallet Age',
    barData: [
      {
        name: '1',
        yData: 10,
      },
      {
        name: '2-5',
        yData: 15,
      },
      {
        name: '5-10',
        yData: 5,
      },
      {
        name: '10-20',
        yData: 20,
      },
      {
        name: '20+',
        yData: 85,
      },
    ],
  },
  {
    title: 'Time since last purchase',
    barData: [
      {
        name: '1',
        yData: 10,
      },
      {
        name: '2-5',
        yData: 30,
      },
      {
        name: '5-10',
        yData: 50,
      },
      {
        name: '10-20',
        yData: 25,
      },
      {
        name: '20+',
        yData: 15,
      },
    ],
  },
];

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

const BarChartSection = () => {
  const [selectedValue, setSelectedValue] = useState(dropdownOptions[0]?.label);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {DataArr?.map((item, index) => (
        <div
          key={index}
          className="bg-white dark:bg-dark-secondary-dark p-3 md:p-6 rounded-xl w-full flex-grow justify-center flex flex-col gap-5 items-center"
        >
          <div className="flex justify-between w-full gap-5">
            <div className="flex items-center gap-2">
              <span className="text-4 font-semibold">{item?.title}</span>
              <Info
                iconType="questionMark"
                height={5}
                weight={5}
                isTooltip={true}
              />
            </div>
            {/* <Select
              defaultValue={selectedValue}
              onValueChange={setSelectedValue}
            >
              <SelectTrigger className="bg-white dark:bg-dark-secondary-dark">
                <SelectValue />
              </SelectTrigger>
              <SelectContent
                className="bg-white dark:bg-dark-secondary-dark"
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
            </Select> */}
          </div>
          <BarChart
            data={item?.barData}
            index="name"
            categories={['yData']}
            colors={['#4836FF']}
            valueFormatter={dataFormatter}
            yAxisWidth={30}
            onValueChange={(v) => console.log(v)}
            showAnimation={true}
            showLegend={false}
            showTooltip
            style={{
              width: '100%',
              height: '200px',
              margin: '0 auto',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default BarChartSection;
