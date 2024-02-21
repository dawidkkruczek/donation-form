import React, { ReactElement } from 'react';
import Card from 'common/components/Card/Card';
import { ReactComponent as IconComponent } from './assets/icon.svg';
import styles from './SetupDonationModal.module.scss';

export interface Props {
  onClose: () => void;
}

function SetupDonationModal({ onClose }: Props): ReactElement {
  return (
    <Card
      className={styles.root}
      headerProps={{
        icon: IconComponent,
        onClose,
        subtitle: 'Setup your donation goal',
        title: 'The giving block',
      }}
    >
      Donation Form
    </Card>
  );
}

export default SetupDonationModal;
