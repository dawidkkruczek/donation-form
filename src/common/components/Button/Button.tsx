import React, { PropsWithChildren, ReactElement } from 'react';
import { pascalCase } from 'change-case';
import classNames from 'classnames';
import styles from './Button.module.scss';

enum Style {
  Ghost = 'ghost',
  Primary = 'primary',
}

enum Type {
  Button = 'button',
  Reset = 'reset',
  Submit = 'submit',
}

export interface Props extends PropsWithChildren {
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
  style?: Style;
  type?: Type;
}

function Button({
  children,
  className,
  fullWidth,
  onClick,
  style = Style.Primary,
  type = Type.Button,
}: Props): ReactElement {
  const rootClassName = classNames(styles.root, className, {
    [styles.rootFullWidth]: fullWidth,
    [styles[`root${pascalCase(style)}`]]: style,
  });

  return (
    <button className={rootClassName} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

Button.Style = Style;
Button.Type = Type;

export default Button;
