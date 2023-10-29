/* eslint-disable */
/* tslint:disable */

import { SVGAttributes } from 'react';
import { getIconColor } from './helper';

interface IProps extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

export const CartEmpty = ({ size, color, ...rest }: IProps) => {
  return (
    <svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <path
        d="M384 768a64 64 0 1 0 0.032 128.032A64 64 0 0 0 384 768M704 768a64 64 0 1 0 0.032 128.032A64 64 0 0 0 704 768M312.672 512l-51.456-192h560.96l-51.456 192H312.672z m583.36-224a32 32 0 0 0-32-32H244.064L209.824 128H96v64h64.672l145.728 544H800v-64H355.52l-25.664-96H819.84l12.16-45.376 64-238.88-0.768-0.192C895.424 290.336 896 289.28 896 288z"
        fill={getIconColor(color, 0, '#181818')}
      />
    </svg>
  );
};

CartEmpty.defaultProps = {
  size: 18,
  color: '#000',
};

