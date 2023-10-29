/* eslint-disable */
/* tslint:disable */

import { SVGAttributes } from 'react';
import { getIconColor, DEFAULT_STYLE } from './helper';

interface IProps extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

export const IconList = ({ size, color, style: _style, ...rest }: IProps) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;
  return (
    <svg viewBox="0 0 1024 1024" width={size + 'em'} height={size + 'em'} style={style} {...rest}>
      <path
        d="M128 256h64V192H128zM320 256h576V192H320zM128 544h64v-64H128zM320 544h576v-64H320zM128 832h64v-64H128zM320 832h576v-64H320z"
        fill={getIconColor(color, 0, '#181818')}
      />
    </svg>
  );
};

IconList.defaultProps = {
  size: 1,
};

