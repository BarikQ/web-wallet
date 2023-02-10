import { Link } from "react-router-dom";

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
          <li><Link to="/somewhere">Privacy Policy</Link></li>
          <li><Link to="/somewhere">Terms & Conditions</Link></li>
          <li><Link to="/somewhere">Cookie Policy</Link></li>
        </ul>
        
        <Link to="/" className={styles.logoLink}><CompanyLogo /></Link>

        <ul className={styles.socialList}>
          <li><Link to="/somewhere" target="_blank"><FacebookLogo /></Link></li>
          <li><Link to="/somewhere" target="_blank"><TwitterLogo /></Link></li>
          <li><Link to="/somewhere" target="_blank"><YoutubeLogo /></Link></li>
          <li><Link to="/somewhere" target="_blank"><InstagramLogo /></Link></li>
        </ul>
        
        <span className={styles.author}>
          ©2022 All rights reserved. Powered by SFXDX
        </span>
      </div>
    </footer>
  );
}
