import { ReactComponent as CompanyLogo} from 'assets/images/CompanyLogo.svg';

import styles from './Header.module.scss';
import Button from 'components/Button/Button';

export default function Header() {
  return (
    <header className={styles.header}>
      <CompanyLogo />
      <Button text="connect wallet" />
    </header>
  )
}