import { CSSProperties, useCallback, useEffect, useState } from 'react'
import styles from '../styles/home.module.css'
import Button from './Button'

const Main = () => {
  const [textStyle, setTextStyle] = useState<CSSProperties>({})
  const [titleStyle, setTitleStyle] = useState<CSSProperties>({})

  const handleChangeScreenWidth = useCallback(() => {
    if (window.innerWidth < 500) {
      setTextStyle({ maxWidth: '90vw', fontSize: 13 })
      setTitleStyle({ fontSize: 30 })
    } else {
      setTextStyle({})
      setTitleStyle({})
    }
  }, [])

  useEffect(() => {
    if (window.innerWidth < 500) {
      setTextStyle({ maxWidth: '90vw', fontSize: 13 })
      setTitleStyle({ fontSize: 30 })
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleChangeScreenWidth)
    return () => {
      window.removeEventListener('resize', handleChangeScreenWidth)
    }
  }, [handleChangeScreenWidth])

  return (
    <main className={styles.main}>
      <section>
        <h1 style={titleStyle}>Welcome to Sambl - RPG Web App</h1>
      </section>
      <section>
        <p style={textStyle}>
          Sambl is an application focused on RPG. With game rooms, possibility to find or share
          lores and characters, spells, alchemy or powers. Everything related to fictional worlds
          can be shared and searched for in Sambl. Create rooms, be the master and manage even the
          backpacks of the characters.
        </p>
      </section>
      <section>
        <Button path="/signin" text="Get Started" />
      </section>
    </main>
  )
}

export default Main
