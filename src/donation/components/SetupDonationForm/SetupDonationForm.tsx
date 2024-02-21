import React, { FormEvent, ReactElement, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Button from 'common/components/Button/Button';
import Input from 'common/components/Input/Input';
import Label from 'common/components/Label/Label';
import moment from 'moment';
import styles from './SetupDonationForm.module.scss';

export interface Props {
  onCancel?: () => void;
}

function SetupDonationModal({ onCancel }: Props): ReactElement {
  const [values, setValues] = useState({
    amount: '',
    endMonth: '',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

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
          <Input
            id="amount"
            onChange={(e) => {
              setValues({ ...values, amount: e.target.value });
            }}
            placeholder="0.00"
            step="0.01"
            type="number"
            value={values.amount}
          />
        </li>

        <li>
          <Label htmlFor="end-month">Every month until</Label>
          <Input
            id="end-month"
            min={moment().format('YYYY-MM')}
            onChange={(e) => {
              setValues({ ...values, endMonth: e.target.value });
            }}
            type="month"
            value={values.endMonth}
          />
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
            <Button fullWidth onClick={onCancel} variant={Button.Variant.Ghost}>
              Cancel
            </Button>
          </li>
        )}

        <li>
          <Button fullWidth type="submit">
            Continue
          </Button>
        </li>
      </ul>
    </form>
  );
}

export default SetupDonationModal;
