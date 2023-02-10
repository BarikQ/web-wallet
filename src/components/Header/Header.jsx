import { Link } from "react-router-dom";

import LoginButton from "components/Button/LoginButton/LoginButton";
import { ReactComponent as CompanyLogo } from "assets/images/CompanyLogo.svg";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link to="/" className={styles.logoLink}>
          <CompanyLogo />
        </Link>
        <LoginButton />
      </div>
    </header>
  );
}
