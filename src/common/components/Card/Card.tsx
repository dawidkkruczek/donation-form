import React, { PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames';
import styles from './Card.module.scss';
import Header, { Props as HeaderProps } from './Header/Header';

export interface Props extends PropsWithChildren {
  className?: string;
  headerProps?: HeaderProps;
}

function Card({ children, className, headerProps }: Props): ReactElement {
  return (
    <div className={classNames(styles.root, className)}>
      {headerProps && <Header {...headerProps} />}
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Card;
