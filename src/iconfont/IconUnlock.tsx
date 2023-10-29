/* eslint-disable */
/* tslint:disable */

import { SVGAttributes } from 'react';
import { getIconColor, DEFAULT_STYLE } from './helper';

interface IProps extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

export const IconUnlock = ({ size, color, style: _style, ...rest }: IProps) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;
  return (
    <svg viewBox="0 0 1024 1024" width={size + 'em'} height={size + 'em'} style={style} {...rest}>
      <path
        d="M384 480v-160c0-70.4 57.6-128 128-128s128 57.6 128 128v64h64v-64c0-105.6-86.4-192-192-192s-192 86.4-192 192v160H160v416h704V480H384z m416 352H224v-288h576v288z"
        fill={getIconColor(color, 0, '#181818')}
      />
      <path
        d="M416 736h192v-64h-192z"
        fill={getIconColor(color, 1, '#181818')}
      />
    </svg>
  );
};

IconUnlock.defaultProps = {
  size: 1,
};

