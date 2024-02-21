import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Button from 'common/components/Button/Button';
import AmountInput from 'common/components/Form/AmountInput/AmountInput';
import Label from 'common/components/Form/Label/Label';
import MonthInput from 'common/components/Form/MonthInput/MonthInput';
import { amountStringToNumber } from 'common/utils/amount';
import moment from 'moment';
import styles from './SetupDonationForm.module.scss';

export interface Props {
  onCancel?: () => void;
}

const MIN_END_MONTH = moment().format('YYYY-MM');

function SetupDonationModal({ onCancel }: Props): ReactElement {
  const [inputValues, setInputValues] = useState({
    amount: '',
    endMonth: MIN_END_MONTH,
  });
  const [values, setValues] = useState({
    amount: 0,
    endMonth: MIN_END_MONTH,
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, amount: e.target.value });
    setValues({
      ...values,
      amount: amountStringToNumber(e.target.value),
    });
  };

  const handleEndMonthChange = (endMonth: string) => {
    setInputValues({ ...inputValues, endMonth });
    setValues({ ...values, endMonth });
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
          <MonthInput
            id="end-month"
            min={MIN_END_MONTH}
            onChange={handleEndMonthChange}
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
