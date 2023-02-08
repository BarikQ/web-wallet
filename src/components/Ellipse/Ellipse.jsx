import styles from './Ellipse.module.scss';

export default function Ellipse({ color, className, ...props }) {
  return (
    <div className={[styles.ellipse, className || ''].join(" ")} />
  )
}