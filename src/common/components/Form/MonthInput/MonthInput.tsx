import React, { ChangeEvent, ReactElement } from 'react';
import classNames from 'classnames';
import Input, { Props as InputProps } from 'common/components/Form/Input/Input';
import moment from 'moment';
import { ReactComponent as ArrowComponent } from './assets/arrow.svg';
import styles from './MonthInput.module.scss';

export interface Props extends Omit<InputProps, 'onChange'> {
  defaultValue?: string;
  onChange?: (value: string) => void;
  value?: string;
}

function AmountInput({
  className,
  onChange,
  ...inputProps
}: Props): ReactElement {
  const { min, value } = inputProps;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handlePrevClick = () => {
    onChange(moment(value).add(-1, 'month').format('YYYY-MM'));
  };

  const handleNextClick = () => {
    onChange(moment(value).add(1, 'month').format('YYYY-MM'));
  };

  return (
    <div className={classNames(styles.root, className)}>
      <Input
        className={styles.input}
        onChange={handleChange}
        type="month"
        {...inputProps}
      />

      <div className={styles.value}>
        <span className={styles.valueMonth}>
          {moment(value).format('MMMM')}
        </span>
        <span className={styles.valueYear}>{moment(value).format('YYYY')}</span>
      </div>

      <button
        aria-label="Prev month"
        className={classNames(styles.arrow, styles.arrowPrev)}
        disabled={moment(value).isSameOrBefore(min)}
        onClick={handlePrevClick}
        type="button"
      >
        <ArrowComponent className={styles.arrowIcon} />
      </button>

      <button
        aria-label="Next month"
        className={classNames(styles.arrow, styles.arrowNext)}
        onClick={handleNextClick}
        type="button"
      >
        <ArrowComponent className={styles.arrowIcon} />
      </button>
    </div>
  );
}

export default AmountInput;
