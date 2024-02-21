import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { ReactComponent as LogoComponent } from './assets/logo.svg';
import styles from './Logo.module.scss';

export interface Props {
  className?: string;
}

function Logo({ className }: Props): ReactElement {
  return (
    <a className={classNames(styles.root, className)} href="/">
      <LogoComponent className={styles.logo} />
    </a>
  );
}

export default Logo;
