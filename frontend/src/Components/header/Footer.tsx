import { type FC, type ReactNode, useState } from 'react';
import DiscordIcon from '../Icon/DiscordIcon';
import GasFeeIcon from '../Icon/GasFeeIcon';
import XIcon from '../Icon/XIcon';
import { Link } from 'react-router-dom';
import liveData from '../../assets/images/gif/live.gif';

import EthIcon from '../../assets/icons/others/EthIcon';
import { Box, Divider, Typography } from '@mui/material';
import DropDown from '../../../@ui-component/Comman/DropDown';
import ToggleButtonCom from '../../../@ui-component/Comman/ToggleButton';
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
    { text: 'Hiring', url: '/hiring' },
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
        width: 'calc(100% - 70px)',
        backgroundColor: 'background.default',
        color: 'inherit',
        position: 'fixed',
        bottom: 0,
        borderTop: '1px solid',
        borderColor: 'divider',
        zIndex: 1000,
      }}
      // className="hidden lg:block"
    >
      <nav className="w-full mx-auto px-4">
        <div className="flex items-center justify-between">
          <ul className="w-fit text-xs font-normal flex items-center gap-3 p-3">
            <li className="inline-block">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://discord.com/invite/aJzSfPPrkg"
              >
                <DiscordIcon className="w-4 h-4 fill-[#777E90] hover:fill-[#6B5FE8] dark:hover:fill-[#A49BFF]" />
              </Link>
            </li>
            <li className="inline-block">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://x.com/Polycruzz"
              >
                <XIcon className="fill-[#777E90] hover:fill-[#6B5FE8] dark:hover:fill-[#A49BFF]" />
              </Link>
            </li>
            {/* <li className="inline-block">
              <Link target="_blank" rel="noopener noreferrer" href="https://x.com/Polycruzz">
                <Telegram  className="fill-grey hover:fill-light-primary-light dark:hover:fill-dark-primary-light" width="14" height="13" />
              </Link>
            </li> */}
            <div className="border-r w-1 h-4 border-[#9DA1AF]"></div>
            <div className="justify-center items-center gap-1 inline-flex">
              <img className="w-5 h-5" alt="Live-data" src={liveData} />
              <div className="flex-col shrink-0 justify-center items-start inline-flex">
                <Typography
                  sx={{
                    fontSize: 12,
                    color: 'text.primary',
                  }}
                >
                  LIVE DATA
                </Typography>
              </div>
            </div>
            <div className="border-r w-1 h-4 border-[#9DA1AF]"></div>
            <div className="justify-center items-center gap-1 inline-flex">
              <EthIcon className="fill-[#777E90] hover:fill-[#6B5FE8] w-5 h-5" />
              <div className="flex-col justify-center items-start inline-flex">
                <Typography
                  sx={{
                    fontSize: 12,
                    color: 'custom.lightGrey',
                  }}
                >
                  ${Number(ethData)?.toFixed(3)}
                </Typography>
              </div>
            </div>
            <div className="border-r w-1 h-4 border-[#9DA1AF] hidden md:block"></div>
            <Box
              component={'ul'}
              sx={{
                display: { xs: 'none', sm: 'inline-flex' },
                alignItems: 'center',
                gap: '16px',
                color: 'custom.lightGrey',
              }}
            >
              {links?.map((link) => (
                <Box
                  component={'ol'}
                  sx={{
                    color: 'custom.lightGrey',
                    '& :hover': {
                      color: 'text.secondary',
                    }
                  }}
                  key={link.url}
                >
                  <Link to={link.url}>{link.text}</Link>
                </Box>
              ))}
            </Box>
          </ul>
          <div className="w-fit items-center gap-3 hidden lg:inline-flex">
            <Box
              component={'div'}
              sx={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1,
                fontSize: 12,
                color: 'custom.lightGrey',
              }}
            >
              <GasFeeIcon />
              {'10'} GWEI
            </Box>
            <DropDown
              value="standard"
              disableMenuItemTouchRipple
              disableTouchRipple
              options={[
                {
                  label: 'Standard',
                  value: 'standard',
                },
              ]}
              onChange={() => {}}
            />
            <div className="border-r w-1 h-6 border-[#9DA1AF] hidden md:block mx-1"></div>
            <ToggleButtonCom
              selectedValue="investor"
              options={[
                {
                  label: 'Investor',
                  value: 'investor',
                },
                {
                  label: 'Discover',
                  value: 'discover',
                },
              ]}
              variant='standard'
              handleOnChange={() => {}}
              handleOnChangeForMobile={() => {}}
            />
          </div>
        </div>
      </nav>
    </Box>
  );
};

export default Footer;
