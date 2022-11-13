import classNames from 'classnames';
import { FC, PropsWithChildren, isValidElement, ReactElement, cloneElement } from 'react';

import s from './Button.module.scss';

export enum ButtonStyleAttributes {
  mainPage = 'mainPage',
}

interface ButtonProps {
  buttonStyle?: ButtonStyleAttributes;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  buttonStyle='',
  className,
  onClick,
  type,
  children,
  ...buttonProps
}) => {

  return (
    <button
      {...buttonProps}
      className={classNames(s.ctrlButton, s[buttonStyle], className)}
      onClick={onClick}
      type={type}
    >
      <span className={s.ctrlButton__container}>
        <span className={s.ctrlButton__text}>{children}</span>
      </span>
    </button>
  );
};
