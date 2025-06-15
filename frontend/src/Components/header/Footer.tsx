import { type FC, type ReactNode, useState } from 'react';
import DiscordIcon from '../Icon/DiscordIcon';
import GasFeeIcon from '../Icon/GasFeeIcon';
import XIcon from '../Icon/XIcon';
import { Link } from 'react-router-dom';
import liveData from '../../assets/images/gif/live.gif';

import EthIcon from '../../assets/icons/others/EthIcon';
import { Box } from '@mui/material';
// import axios from "axios";
// import { toFixedValue } from "lib/numbers";

interface FooterProps {
  children?: ReactNode;
}
interface LinkItem {
  text: string;
  url: string;
}

const Footer: FC<FooterProps> = () => {
  const links: LinkItem[] = [
    { text: 'Privacy', url: '/privacy' },
    { text: 'Terms', url: '/terms' },
    // { text: "Hiring", url: "/hiring" },
  ];
  const [ethData, setEthData] = useState<any>([]);
  const [gasData, setGasData] = useState<any>([]);

  // useEffect(() => {
  //   axios.get("https://api.etherscan.io/api?module=stats&action=ethprice&apikey=ZPHJC9C17N4QA3G45JGIBWKF4W1T8N976V")
  //   .then((response:any) => {
  //     setEthData(response.data.result.ethusd)
  //   })
  // } ,[])

  // useEffect(() => {
  //   axios.get("https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=ZPHJC9C17N4QA3G45JGIBWKF4W1T8N976V")
  //   .then((response:any) => {
  //     setGasData(response.data.result.SafeGasPrice)
  //   })
  // } ,[])
  // const [selectedValue, setSelectedValue] = useState(dropdownOptions[0]?.label);

  // const footerTabs = ["Investor", "Discover"];

  // console.log(ethData, gasData)

  return (
    <Box
      component={'footer'}
      sx={{
        backgroundColor: 'background.default',
        color: 'text.grey01',
        position: 'sticky',
        bottom: 0,
        // left: 0,
        // right: 0,
        borderTop: '1px solid text.grey01',
        zIndex: 1000,
      }}
      className="z-40 bottom-0 left-navbar right-0 border-t border-gray-600 hidden lg:block sticky"
    >
      <nav className="mx-auto px-4">
        <div className="w-full flex items-center justify-between">
          <ul className="text-xs font-normal flex items-center gap-3 p-3">
            <li className="inline-block">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://discord.com/invite/aJzSfPPrkg"
              >
                <DiscordIcon className="w-4 h-4 fill-grey hover:fill-light-primary-light dark:hover:fill-dark-primary-light" />
              </Link>
            </li>
            <li className="inline-block">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://x.com/Polycruzz"
              >
                <XIcon className="fill-grey hover:fill-light-primary-light dark:hover:fill-dark-primary-light" />
              </Link>
            </li>
            {/* <li className="inline-block">
              <Link target="_blank" rel="noopener noreferrer" href="https://x.com/Polycruzz">
                <Telegram  className="fill-grey hover:fill-light-primary-light dark:hover:fill-dark-primary-light" width="14" height="13" />
              </Link>
            </li> */}
            <div className="border-r w-1 h-4 border-light-black-01 dark:border-dark-black-01"></div>
            <div className="justify-center items-center gap-1 inline-flex">
              <img className="w-5 h-5" alt="Live-data" src={liveData} />
              <div className="flex-col justify-center items-start inline-flex">
                <div className="font-medium leading-none">LIVE DATA</div>
              </div>
            </div>
            <div className="border-r w-1 h-4 border-light-black-01 dark:border-dark-black-01"></div>
            <div className="justify-center items-center gap-1 inline-flex">
              <EthIcon className="fill-grey w-5 h-5" />
              <div className="flex-col justify-center items-start inline-flex">
                <div className="font-medium leading-none">
                  ${Number(ethData)?.toFixed(3)}
                </div>
              </div>
            </div>
            <div className="border-r w-1 h-4 border-light-black-01 dark:border-dark-black-01"></div>
            <div className="justify-center items-center gap-1 inline-flex">
              <GasFeeIcon />
              {gasData} GWEI
            </div>
          </ul>
          {/* <div className="flex items-center gap-3">
            <div className="flex gap-3 items-center justify-center">
              <div className="flex gap-3 items-center text-xs">
                <div className="flex gap-1 items-center font-medium">
                  <GasFeeIcon />
                  10 Gwei
                </div>
                <Select
                  defaultValue={selectedValue}
                  onValueChange={setSelectedValue}
                >
                  <SelectTrigger className="w-32 h-auto">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {dropdownOptions?.map((option, index) => (
                        <SelectItem value={option?.label} key={index}>
                          {option?.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <div className="border-r w-1 h-4 border-light-black-01 dark:border-dark-black-01 "></div>
              </div>
              <Tabs defaultValue="discover" className="mt-1">
                <TabsList className="flex justify-start flex-wrap bg-transparent border border-[#353945]">
                  {footerTabs.map((item, index) => (
                    <span key={index}>
                      <TabsTrigger

                        className="cursor-pointer text-grey data-[state=active]:bg-[#A49BFF] data-[state=active]:text-[#1C1C1C] data-[state=active]:h-full"
                        value={item
                          .toLowerCase()
                          .replace(/&/g, "")
                          .replace(/ /g, "-")}
                      >
                        {item}
                      </TabsTrigger>
                    </span>
                  ))}
                </TabsList>

                {footerTabs.map((item, index) => (
                  <span key={index}>
                    <TabsContent
                      className="h-full"
                      value={item
                        .toLowerCase()
                        .replace(/&/g, "")
                        .replace(/ /g, "-")}
                    ></TabsContent>
                  </span>
                ))}
              </Tabs>
            </div>
          </div> */}
          <ul className="flex items-center gap-4">
            {links?.map((link) => (
              <li key={link.url} className="inline-block">
                <Link to={link.url}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </Box>
  );
};

export default Footer;
