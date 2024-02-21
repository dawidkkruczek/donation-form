import React, { ReactElement } from 'react';
import { useMediaQuery } from 'react-responsive';
import Card from 'common/components/Card/Card';
import SetupDonationForm from 'donation/components/SetupDonationForm/SetupDonationForm';
import { ReactComponent as IconComponent } from './assets/icon.svg';
import styles from './SetupDonationModal.module.scss';

export interface Props {
  onClose: () => void;
}

function SetupDonationModal({ onClose }: Props): ReactElement {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <Card
      className={styles.root}
      headerProps={{
        icon: IconComponent,
        onClose: !isDesktop ? onClose : undefined,
        subtitle: 'Setup your donation goal',
        title: 'The giving block',
      }}
    >
      <SetupDonationForm onCancel={onClose} />
    </Card>
  );
}

export default SetupDonationModal;
