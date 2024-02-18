import React, { ReactElement } from 'react';
import NavBar from '../NavBar/NavBar';
import styles from './App.module.scss';

function App(): ReactElement {
  return (
    <div className={styles.root}>
      <NavBar />

      <main className={styles.main}>
        Donate Form
      </main>
    </div>
  );
}

export default App;
