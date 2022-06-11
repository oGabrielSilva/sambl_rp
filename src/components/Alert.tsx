import { CSSProperties, useCallback, useEffect, useState } from 'react'
import { AlertProps } from '../types'
import styles from '../styles/indicator.module.css'
import css from '../styles/style'

const Alert = ({ title, text, loading, confirm, close, noButtons }: AlertProps) => {
  const [titleStyle, setTitleStyle] = useState<CSSProperties>({})
  const [screenSize, setScreenSize] = useState<CSSProperties>({})

  const handleChangeScreenWidth = useCallback(() => {
    setTitleStyle((window.innerWidth <= 600 && { fontSize: 20 }) || { fontSize: 25 })
    setScreenSize((window.innerWidth <= 650 && { minWidth: '70vw' }) || {})
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleChangeScreenWidth)
    return () => {
      window.removeEventListener('resize', handleChangeScreenWidth)
    }
  }, [handleChangeScreenWidth])

  useEffect(() => handleChangeScreenWidth(), [handleChangeScreenWidth])

  return (
    <div style={css().alertBack}>
      <div style={{ ...css().alertContainer, ...screenSize }}>
        <div style={{ margin: 10 }}>
          <h1 style={{ ...titleStyle }}>{title}</h1>
        </div>
        <div style={{ margin: 10 }}>
          <p style={{ fontSize: 15 }}>{text}</p>
        </div>
        {loading && <div style={{ margin: '10px auto' }} className={styles.indicator} />}
        <div>
          <div>
            {!noButtons && (
              <button type="button" style={css().button} onClick={close}>
                {confirm ?? 'OK'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alert
