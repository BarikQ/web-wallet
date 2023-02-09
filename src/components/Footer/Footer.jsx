import { ReactComponent as CompanyLogo } from "assets/images/CompanyLogo.svg";
import { ReactComponent as FacebookLogo } from "assets/images/icons/facebook.svg";
import { ReactComponent as TwitterLogo } from "assets/images/icons/twitter.svg";
import { ReactComponent as YoutubeLogo } from "assets/images/icons/youtube.svg";
import { ReactComponent as InstagramLogo } from "assets/images/icons/instagram.svg";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <ul className={styles.navList}>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Cookie Policy</li>
        </ul>
        
        <CompanyLogo className={styles.logo} />

        <ul className={styles.socialList}>
          <li><FacebookLogo /></li>
          <li><TwitterLogo /></li>
          <li><YoutubeLogo /></li>
          <li><InstagramLogo /></li>
        </ul>
        
        <span className={styles.author}>
          ©2022 All rights reserved. Powered by Atla
        </span>
      </div>
    </footer>
  );
}
