import Button from 'components/Button/Button';

import { ReactComponent as CompanyLogo} from 'assets/images/CompanyLogo.svg';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <CompanyLogo className={styles.logo} />
        <Button text="Connect Wallet" className={styles.button} />
      </div>
    </header>
  )
}