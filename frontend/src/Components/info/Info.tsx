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
  const [isInfo] = useState(false);

  return (
    <div className="flex w-max">
      <Tooltip title={['Info']}>
        <span className={'cursor-pointer'}>
          {iconType === 'questionMark' ? (
            <InfoQuestionIcon
              className={`h-${height ?? 6} w-${weight ?? 6} 
            ${
              !iconColor &&
              (isInfo
                ? 'fill-light-primary-light dark:fill-dark-primary-light'
                : 'fill-grey hover:fill-light-primary-light dark:hover:fill-dark-primary-light')
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
                        ? 'fill-light-primary-light dark:fill-dark-primary-light'
                        : 'fill-grey hover:fill-light-primary-light dark:hover:fill-dark-primary-light')
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
