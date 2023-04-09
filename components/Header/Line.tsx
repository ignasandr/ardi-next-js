import styles from './header.module.css'

export default function Line() {
  return (
    <svg width="400" height="1" className={styles.line}>
        <defs>
            <linearGradient id="three_opacity_stops">
                <stop offset="0" stopColor="#000000" stopOpacity="0%" />
                <stop offset="50%" stopColor="#000000" stopOpacity="100%" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0%" />
            </linearGradient>
        </defs>
        <rect width="400" height="1" style={{fill:"url(#three_opacity_stops)"}} />
    </svg>
    )
}