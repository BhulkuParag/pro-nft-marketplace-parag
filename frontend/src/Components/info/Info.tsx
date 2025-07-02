import { Tooltip } from '@mui/material';
import InfoIcon from '../../assets/icons/others/InfoIcon';
import InfoQuestionIcon from '../../assets/icons/others/InfoQuestionIcon';
import { type FC, useState } from 'react';

interface InfoProps {
  height?: number;
  weight?: number;
  isTooltip?: boolean;
  iconType?: 'questionMark' | 'default';
  iconColor?: string;
}

const Info: FC<InfoProps> = ({
  height,
  weight,
  // isTooltip,
  iconType,
  iconColor,
}) => {
  const [isInfo, setIsInfo] = useState(false);

  return (
    <div className="flex w-max">
      <Tooltip placement='top' title={['Info']}>
        <span className={'cursor-pointer'}>
          {iconType === 'questionMark' ? (
            <InfoQuestionIcon
              className={`h-${height ?? 6} w-${weight ?? 6} 
            ${
              !iconColor &&
              (isInfo
                ? 'fill-[#6B5FE8] dark:fill-[#A49BFF]'
                : 'fill-[#777E90] hover:fill-[#6B5FE8] dark:hover:fill-[#A49BFF]')
            }
                    ${iconColor ?? iconColor}
                    `}
            />
          ) : (
            <InfoIcon
              className={`h-${height ?? 6} w-${weight ?? 6} 
                    ${
                      !iconColor &&
                      (isInfo
                        ? 'fill-[#6B5FE8] dark:fill-[#A49BFF]'
                        : 'fill-[#777E90] hover:fill-[#6B5FE8] dark:hover:fill-[#A49BFF]')
                    }
                  ${iconColor ?? iconColor}
                  `}
            />
          )}
        </span>
      </Tooltip>
    </div>
  );
};

export default Info;
