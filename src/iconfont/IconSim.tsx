/* eslint-disable */
/* tslint:disable */

import { SVGAttributes } from 'react';
import { getIconColor, DEFAULT_STYLE } from './helper';

interface IProps extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

export const IconSim = ({ size, color, style: _style, ...rest }: IProps) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;
  return (
    <svg viewBox="0 0 1024 1024" width={size + 'em'} height={size + 'em'} style={style} {...rest}>
      <path
        d="M930 160H226.8c-25.1 0-48.7 9.8-66.5 27.5L27.5 320.3C9.8 338 0 361.7 0 386.8V770c0 51.8 42.2 94 94 94h836c51.8 0 94-42.2 94-94V254c0-51.8-42.2-94-94-94z m34 610c0 18.7-15.3 34-34 34H94c-18.7 0-34-15.3-34-34V386.8c0-9.1 3.5-17.6 10-24L202.7 230c6.4-6.4 15-10 24-10H930c18.7 0 34 15.3 34 34v516z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
      <path
        d="M290 476H158c-16.5 0-30 13.5-30 30s13.5 30 30 30h132c16.5 0 30-13.5 30-30s-13.5-30-30-30zM290 576H158c-16.5 0-30 13.5-30 30s13.5 30 30 30h132c16.5 0 30-13.5 30-30s-13.5-30-30-30zM290 676H158c-16.5 0-30 13.5-30 30s13.5 30 30 30h132c16.5 0 30-13.5 30-30s-13.5-30-30-30zM806 288H546c-51.8 0-94 42.2-94 94v260c0 51.8 42.2 94 94 94h260c51.8 0 94-42.2 94-94V382c0-51.8-42.2-94-94-94z m-162.3 60h64v63h-64v-63z m-60 232v96H546c-18.7 0-34-15.3-34-34v-67h72.1c-0.2 1.6-0.4 3.3-0.4 5z m124 0v96h-64v-96c0-1.7-0.2-3.4-0.4-5h64.9c-0.3 1.6-0.5 3.3-0.5 5zM840 642c0 18.7-15.3 34-34 34h-38.3v-96c0-1.7-0.2-3.4-0.4-5H840v67z m0-127H512V382c0-18.7 15.3-34 34-34h37.7v93c0 16.5 13.5 30 30 30h226.2v44z m0-104h-72.3v-63H806c18.7 0 34 15.3 34 34v29z"
        fill={getIconColor(color, 1, 'currentColor')}
      />
    </svg>
  );
};

IconSim.defaultProps = {
  size: 1,
};

