import classNames from 'classnames';
import {FC} from 'react';

import SpriteIcons from 'assets/images/icons/sprite.svg';

import s from './Icon.module.scss';

export interface IconProps {
  name?: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  stroke?: boolean;
}

export const enum IconsName {
  Tree = "treewhite",
}

const Icon: FC<IconProps> = ({name, height = 24, width = 24, className, fill = false, stroke = false}) => {
  return (
    <svg
      className={classNames(s.icon, {'icon--fill': fill}, {'icon--stroke': stroke}, className)}
      width={width}
      height={height}
    >
      <use   href={`${SpriteIcons}#${name}`} />
    </svg>
  );
};

export {Icon};
