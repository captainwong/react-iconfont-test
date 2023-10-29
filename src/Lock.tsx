/* eslint-disable */
/* tslint:disable */

import { SVGAttributes } from 'react';
import { getIconColor } from './helper';

interface IProps extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

export const Lock = ({ size, color, ...rest }: IProps) => {
  return (
    <svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <path
        d="M704 480v-160c0-105.6-86.4-192-192-192s-192 86.4-192 192v160H160v416h704V480h-160z m-320-160c0-70.4 57.6-128 128-128s128 57.6 128 128v160h-256v-160z m416 512H224v-288h576v288z"
        fill={getIconColor(color, 0, '#181818')}
      />
      <path
        d="M480 768h64v-160h-64z"
        fill={getIconColor(color, 0, '#181818')}
      />
    </svg>
  );
};

Lock.defaultProps = {
  size: 18,
  color: '#000',
};

