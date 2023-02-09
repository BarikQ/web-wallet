import Ellipse from 'components/Ellipse/Ellipse';

import styles from './Layout.module.scss';

export default function Layout({ className, children }) {
  return (
    <div className={[styles.layout, className || ''].join(' ')}>
      {children}
      <div className={styles.background}>
        <Ellipse className={styles.ellipse} />
        <Ellipse className={styles.ellipse} />
        <Ellipse className={styles.ellipse} />
        <Ellipse className={styles.ellipse} />
      </div>
    </div>
  )
}