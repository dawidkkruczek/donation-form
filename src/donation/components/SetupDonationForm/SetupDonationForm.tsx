import React, {
  ChangeEvent,
  FormEvent,
  ReactElement,
  useMemo,
  useState,
} from 'react';
import { useMediaQuery } from 'react-responsive';
import Button from 'common/components/Button/Button';
import AmountInput from 'common/components/Form/AmountInput/AmountInput';
import Label from 'common/components/Form/Label/Label';
import MonthInput from 'common/components/Form/MonthInput/MonthInput';
import {
  amountNumberToString,
  amountStringToNumber,
} from 'common/utils/amount';
import moment from 'moment';
import styles from './SetupDonationForm.module.scss';

export interface Props {
  onCancel?: () => void;
}

const MIN_END_MONTH = moment().add(1, 'M').format('YYYY-MM');

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

  const totalAmount = useMemo(() => {
    const endMonth = moment(values.endMonth);
    const months = Math.ceil(endMonth.diff(moment(), 'months', true));
    return `$${amountNumberToString(values.amount * months)}`;
  }, [values]);

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

      {values.amount > 0 && (
        <>
          <dl className={styles.total}>
            <dt className={styles.totalLabel}>Total</dt>
            <dd className={styles.totalAmount}>{totalAmount}</dd>
          </dl>

          <p className={styles.summary}>
            You will be sending{' '}
            <strong>${amountNumberToString(values.amount)}</strong> every month,
            until <strong>{moment(values.endMonth).format('MMMM YYYY')}</strong>
            . Thank you!
          </p>
        </>
      )}

      <ul className={styles.actions}>
        {isDesktop && (
          <li>
            <Button fullWidth onClick={onCancel} variant={Button.Variant.Ghost}>
              Cancel
            </Button>
          </li>
        )}

        <li>
          <Button disabled={values.amount === 0} fullWidth type="submit">
            Continue
          </Button>
        </li>
      </ul>
    </form>
  );
}

export default SetupDonationModal;
