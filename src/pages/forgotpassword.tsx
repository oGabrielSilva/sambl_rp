import Link from 'next/link'
import { CSSProperties, useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Input from '../components/Input'
import css from '../styles/style'
import colors from '../utils/colors'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [formStyle, setFormStyle] = useState<CSSProperties>({})
  const [signUpStyle, setSignUpStyle] = useState<CSSProperties>({})
  const [titleStyle, setTitleStyle] = useState<CSSProperties>({})

  const handleChangeScreenWidth = useCallback(() => {
    setFormStyle((window.innerWidth <= 750 && { width: '70vw' }) || { width: '40vw' })
    setTitleStyle((window.innerWidth <= 600 && { fontSize: 30 }) || { fontSize: 40 })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleChangeScreenWidth)
    return () => {
      window.removeEventListener('resize', handleChangeScreenWidth)
    }
  }, [handleChangeScreenWidth])

  useEffect(() => handleChangeScreenWidth(), [handleChangeScreenWidth])

  return (
    <div>
      <Header buttons />
      <main style={css().main}>
        <h1 style={{ textAlign: 'center', marginBottom: 25, ...titleStyle }}>
          We will send you a recovery email
        </h1>
        <form style={{ ...formStyle, textAlign: 'center' }}>
          <Input placeholder="Email" value={email} change={setEmail} type="email" />
          <Button text="Send" />
        </form>
      </main>
      <Footer />
    </div>
  )
}

export default ForgotPassword
