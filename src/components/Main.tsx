import { CSSProperties, useEffect, useState } from 'react'
import styles from '../styles/home.module.css'
import Button from './Button'

const Main = () => {
  const [textStyle, setTextStyle] = useState<CSSProperties>({})
  const [titleStyle, setTitleStyle] = useState<CSSProperties>({})

  useEffect(() => {
    if (window.innerWidth < 500) {
      setTextStyle({ maxWidth: '90vw' })
      setTitleStyle({ fontSize: 30 })
    }
  }, [])

  return (
    <main className={styles.main}>
      <section>
        <h1 style={titleStyle}>Bem-vindo ao Sambl - RPG Web App</h1>
      </section>
      <section>
        <p style={textStyle}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae voluptatem reprehenderit
          autem natus repellendus voluptate, nesciunt quibusdam, nemo, doloremque assumenda
          praesentium eos odio minus cumque obcaecati cupiditate et suscipit neque?
        </p>
      </section>
      <section>
        <Button text="Get Started" />
      </section>
    </main>
  )
}

export default Main
