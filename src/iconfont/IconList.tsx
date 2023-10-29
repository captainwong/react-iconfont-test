/* eslint-disable */
/* tslint:disable */

import { SVGAttributes } from 'react';
import { getIconColor } from './helper';

interface IProps extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

export const IconList = ({ size, color, ...rest }: IProps) => {
  return (
    <svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <path
        d="M128 256h64V192H128zM320 256h576V192H320zM128 544h64v-64H128zM320 544h576v-64H320zM128 832h64v-64H128zM320 832h576v-64H320z"
        fill={getIconColor(color, 0, '#181818')}
      />
    </svg>
  );
};

IconList.defaultProps = {
  size: 18,
  color: '#000',
};

