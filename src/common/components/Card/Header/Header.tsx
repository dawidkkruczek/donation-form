import React, { FC, ReactElement, SVGProps } from 'react';
import { ReactComponent as CloseIconComponent } from './assets/close-icon.svg';
import styles from './Header.module.scss';

export interface Props {
  icon?: FC<SVGProps<SVGSVGElement>>;
  onClose?: () => void;
  subtitle?: string;
  title: string;
}

function Header({ icon: Icon, onClose, subtitle, title }: Props): ReactElement {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        {Icon && <Icon className={styles.icon} />}

        <h2 className={styles.title}>{title}</h2>

        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      </div>

      {onClose && (
        <button
          aria-label="Close"
          className={styles.close}
          onClick={onClose}
          type="button"
        >
          <CloseIconComponent className={styles.closeIcon} />
        </button>
      )}
    </div>
  );
}

export default Header;
