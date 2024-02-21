import React, { ReactElement } from 'react';
import { NumericFormat } from 'react-number-format';
import classNames from 'classnames';
import Input, { Props as InputProps } from 'common/components/Form/Input/Input';
import styles from './AmountInput.module.scss';
import { ReactComponent as IconComponent } from './assets/icon.svg';

// override some of InputProps to match NumericFormat props
export interface Props extends InputProps {
  defaultValue?: string;
  type?: 'text';
  value?: string;
}

function AmountInput({ className, ...inputProps }: Props): ReactElement {
  return (
    <div className={classNames(styles.root, className)}>
      <IconComponent className={styles.icon} />

      <NumericFormat
        allowNegative={false}
        className={styles.input}
        customInput={Input}
        data-testid="amount-input-input"
        decimalScale={2}
        fixedDecimalScale
        placeholder="0.00"
        thousandSeparator
        {...inputProps}
      />
    </div>
  );
}

export default AmountInput;
