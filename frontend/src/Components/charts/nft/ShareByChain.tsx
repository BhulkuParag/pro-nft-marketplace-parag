import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Info from '../../../Components/info/Info';

const colors = {
  eth: '#2C44B3',
  polygon: '#AEBBF9',
  bnb: '#A49BFF',
  cronos: '#C1C9EE',
  optimism: '#FFC155',
};

const buyerByChain = {
  labels: ['Ethereum', 'Polygon', 'BNB Chain', 'Cronos', 'Optimism'],
  datasets: [
    {
      label: 'Buyers by Chain',
      data: [50.25, 20.75, 15.0, 10.0, 4.0],
      backgroundColor: [
        colors.eth,
        colors.polygon,
        colors.bnb,
        colors.cronos,
        colors.optimism,
      ],
      borderWidth: 0,
      hoverOffset: 4,
    },
  ],
};

interface graphData {
  name: string;
  color: string;
  value: string;
  change: string;
}

const holderTraders: graphData[] = [
  {
    name: 'Ethereum',
    color: 'bg-[#2C44B3]',
    value: '97.85%',
    change: '0.36',
  },
  {
    name: 'Polygon - Matic',
    color: 'bg-[#AEBBF9]',
    value: '1.93%',
    change: '-14.41',
  },
  {
    name: 'BNB Chain',
    color: 'bg-[#A49BFF]',
    value: '0.14%',
    change: '14.92',
  },
  {
    name: 'Solana',
    color: 'bg-[#C1C9EE]',
    value: '0.04%',
    change: '-11.12',
  },
  {
    name: 'Avalanche',
    color: 'bg-[#FFC155]',
    value: '0.03%',
    change: '-11.12',
  },
];

const washTradeData = {
  labels: ['Ethereum', 'Polygon', 'BNB Chain', 'Cronos', 'Optimism'],
  datasets: [
    {
      label: 'Volume by Chain',
      data: [25.35, 24.65, 20.0, 15.0, 15.0],
      backgroundColor: [
        colors.eth,
        colors.polygon,
        colors.bnb,
        colors.cronos,
        colors.optimism,
      ],

      borderWidth: 0,
    },
  ],
  text: 'Volume by Chain',
};

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const ShareByChain = () => {
  return (
    <>
      {/* <Doughnut data={data} /> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"> */}
      <div className="flex flex-col lg:flex-row gap-5">
        {[
          'Total Volume by Chain',
          'Unique Users by Chain',
          'Sellers by Chain',
        ].map((item, i) => (
          <CustomCard
            key={i}
            className="flex-grow justify-center flex flex-col gap-5 items-center "
          >
            <div className="flex gap-1 items-center w-full justify-start">
              <span className="font-medium dark:text-white text-black text-xl">
                {item}
              </span>
              <Info height={5} weight={5} isTooltip={true} />
            </div>
            <div className="items-center flex">
              <Doughnut
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
                style={{
                  height: '100%',
                  width: '100%',
                }}
                data={buyerByChain}
              />
              {/* <Doughnut data={data} /> */}
            </div>

            <div className="flex w-full flex-wrap justify-center gap-4">
              {holderTraders.map((item, i) => (
                <div
                  key={i}
                  className={`pr-[12px] flex flex-col gap-[2px]" ${
                    i + 1 != holderTraders.length
                      ? 'border-r-[1px] border-black01'
                      : ''
                  }`}
                >
                  <div className="flex items-center gap-[6px]">
                    <div
                      className={'h-[10px] w-[10px] rounded-full' + item.color}
                    ></div>
                    <span className="text-grey text-[14px]">{item.name}</span>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className={' text-[14px] text-black dark:text-white'}>
                      {item.change}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CustomCard>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        <CustomCard className="flex-grow justify-center flex flex-col gap-5 items-center">
          <div className="flex gap-1 items-center justify-start w-full">
            <span className="font-medium dark:text-white text-black text-xl">
              Washtrade Volume by Chain
            </span>
            <Info height={5} weight={5} isTooltip={true} />
          </div>

          <div className="flex gap-5 md:gap-[100px] items-center flex-col md:flex-row">
            <div className="items-center flex">
              <Doughnut
                style={{
                  height: '100%',
                  width: '100%',
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
                data={washTradeData}
              />
            </div>

            <div className="flex flex-col gap-[4px]">
              {washTradeData.labels.map((item, i) => (
                <div
                  className={`rounded-[6px] px-[12px] py-[4px] flex items-center gap-[3rem] justify-between h-[30px]',
                    ${
                      i == 0
                        ? 'bg-light-black-light dark:bg-dark-black-light'
                        : ''
                    }`}
                  key={i}
                >
                  <div className="flex gap-[4px] items-center">
                    <div
                      style={{
                        backgroundColor:
                          washTradeData.datasets[0].backgroundColor[i],
                      }}
                      className={'min-h-[10px] min-w-[10px] rounded-full'}
                    ></div>
                    <span className="text-grey text-[14px]">{item}</span>
                  </div>
                  <span>97.85%</span>
                </div>
              ))}
            </div>
          </div>
        </CustomCard>
        <CustomCard className="flex-grow justify-center flex flex-col gap-5 items-center">
          <div className="flex gap-1 items-center justify-start w-full">
            <span className="font-medium text-black dark:text-white text-xl">
              Buyers by Chain
            </span>
            <Info height={5} weight={5} isTooltip={true} />
          </div>
          <div className="flex gap-5 md:gap-[100px] items-center flex-col md:flex-row">
            <div className="items-center flex">
              <Doughnut
                style={{
                  height: '100%',
                  width: '100%',
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
                data={buyerByChain}
              />
            </div>

            <div className="flex flex-col gap-[4px]">
              {buyerByChain.labels.map((item, i) => (
                <div
                  className={`rounded-[6px] px-[12px] py-[4px] flex items-center gap-[3rem] justify-between h-[30px]',
                    ${
                      i == 0
                        ? 'bg-light-black-light dark:bg-dark-black-light'
                        : ''
                    }`}
                  key={i}
                >
                  <div className="flex gap-[4px] items-center">
                    <div
                      style={{
                        backgroundColor:
                          buyerByChain.datasets[0].backgroundColor[i],
                      }}
                      className={'min-h-[10px] min-w-[10px] rounded-full'}
                    ></div>
                    <span className="text-grey text-[14px]">{item}</span>
                  </div>
                  <span>97.85%</span>
                </div>
              ))}
            </div>
          </div>
        </CustomCard>
      </div>
    </>
  );
};

export default ShareByChain;

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const CustomCard = ({ className, children }: CardProps) => {
  return (
    <div
      className={
        'bg-white dark:bg-dark-secondary-dark p-[24px] rounded-[12px] w-full' +
        className
      }
    >
      {children}
    </div>
  );
};
