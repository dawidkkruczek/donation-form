import React, { PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames';
import styles from './Label.module.scss';

export interface Props extends PropsWithChildren {
  className?: string;
  htmlFor?: string;
}

function Label({ children, className, htmlFor }: Props): ReactElement {
  return (
    <label className={classNames(styles.root, className)} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export default Label;
