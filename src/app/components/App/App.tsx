import React, { ReactElement, useState } from 'react';
import NavBar from 'app/components/NavBar/NavBar';
import SetupDonationModal from 'donation/components/SetupDonationModal/SetupDonationModal';
import styles from './App.module.scss';

function App(): ReactElement {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(true);

  return (
    <div className={styles.root}>
      <NavBar />

      <main className={styles.main}>
        {isModalOpened && (
          <SetupDonationModal onClose={() => setIsModalOpened(false)} />
        )}
      </main>
    </div>
  );
}

export default App;
