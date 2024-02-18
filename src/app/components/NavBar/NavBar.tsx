import React, { ReactElement } from 'react';
import Logo from '../../../common/components/Logo/Logo';
import styles from './NavBar.module.scss';

function NavBar(): ReactElement {
  return (
    <header className={styles.root}>
      <Logo className={styles.logo} />
    </header>
  );
}

export default NavBar;
