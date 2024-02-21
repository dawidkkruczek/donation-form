import React, { FormEvent, ReactElement, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Button from 'common/components/Button/Button';
import Label from 'common/components/Label/Label';
import styles from './SetupDonationForm.module.scss';

export interface Props {
  onCancel?: () => void;
}

function SetupDonationModal({ onCancel }: Props): ReactElement {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const [values] = useState({
    amount: null,
    endMonth: null,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <ul className={styles.fields}>
        <li>
          <Label htmlFor="amount">I can donate</Label>
          Form Field
        </li>

        <li>
          <Label htmlFor="end-month">Every month until</Label>
          Form Field
        </li>
      </ul>

      <dl className={styles.total}>
        <dt className={styles.totalLabel}>Total</dt>
        <dd className={styles.totalAmount}>$200,000</dd>
      </dl>

      <p className={styles.summary}>
        You will be sending <strong>$25,000</strong> every month, until{' '}
        <strong>August 2023</strong>. Thank you!
      </p>

      <ul className={styles.actions}>
        {isDesktop && (
          <li>
            <Button fullWidth onClick={onCancel} style={Button.Style.Ghost}>
              Cancel
            </Button>
          </li>
        )}

        <li>
          <Button fullWidth type={Button.Type.Submit}>
            Continue
          </Button>
        </li>
      </ul>
    </form>
  );
}

export default SetupDonationModal;
