import styles from './Button.module.scss';

export default function Button({ text, className, ...props }) {
  return (
    <button className={[styles.button, className || ''].join(" ")} {...props}>{text}</button>
  )
}