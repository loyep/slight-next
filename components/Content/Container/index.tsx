import styles from './index.scss'

export default function Container(props) {
  return <div className={styles.container}>{props.children}</div>
}
