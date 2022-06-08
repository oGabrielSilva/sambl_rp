import styles from '../styles/indicator.module.css'
import { IndicatorProps } from '../types'
import colors from '../utils/colors'

const Indicator = ({ children, clicked }: IndicatorProps) => {
  return (
    <span
      style={{
        color: (clicked && 'transparent') || colors().white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {(clicked && <div className={styles.indicator} />) || children}
    </span>
  )
}

export default Indicator
