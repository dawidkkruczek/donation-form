import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import AmountInput from 'common/components/AmountInput/AmountInput';
import Button from 'common/components/Button/Button';
import Input from 'common/components/Input/Input';
import Label from 'common/components/Label/Label';
import { amountStringToNumber } from 'common/utils/amount';
import moment from 'moment';
import styles from './SetupDonationForm.module.scss';

export interface Props {
  onCancel?: () => void;
}

function SetupDonationModal({ onCancel }: Props): ReactElement {
  const [inputValues, setInputValues] = useState({
    amount: '',
    endMonth: '',
  });
  const [values, setValues] = useState({
    amount: 0,
    endMonth: null,
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, amount: e.target.value });
    setValues({
      ...values,
      amount: amountStringToNumber(e.target.value),
    });
  };

  const handleEndMonthChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, endMonth: e.target.value });
    setValues({ ...values, endMonth: e.target.value });
  };

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
          <AmountInput
            id="amount"
            onChange={handleAmountChange}
            value={inputValues.amount}
          />
        </li>

        <li>
          <Label htmlFor="end-month">Every month until</Label>
          <Input
            id="end-month"
            min={moment().format('YYYY-MM')}
            onChange={handleEndMonthChange}
            type="month"
            value={inputValues.endMonth}
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
