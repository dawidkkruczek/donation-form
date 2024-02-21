import React, { ComponentProps, ReactElement } from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';

export interface Props extends ComponentProps<'input'> {}

function Input({
  className,
  type = 'text',
  ...inputProps
}: Props): ReactElement {
  return (
    <input
      className={classNames(styles.root, className)}
      type={type}
      {...inputProps}
    />
  );
}

export default Input;
