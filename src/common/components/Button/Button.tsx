import React, { ComponentProps, ReactElement } from 'react';
import { pascalCase } from 'change-case';
import classNames from 'classnames';
import styles from './Button.module.scss';

enum Variant {
  Ghost = 'ghost',
  Primary = 'primary',
}
export interface Props extends ComponentProps<'button'> {
  fullWidth?: boolean;
  onClick?: () => void;
  variant?: Variant;
}

function Button({
  children,
  className,
  fullWidth,
  type = 'button',
  variant = Variant.Primary,
  ...buttonProps
}: Props): ReactElement {
  const rootClassName = classNames(styles.root, className, {
    [styles.rootFullWidth]: fullWidth,
    [styles[`root${pascalCase(variant)}`]]: variant,
  });

  return (
    <button className={rootClassName} type={type} {...buttonProps}>
      {children}
    </button>
  );
}

Button.Variant = Variant;

export default Button;
