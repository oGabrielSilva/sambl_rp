import Link from 'next/link'
import { CSSProperties, useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
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
      <Header />
      <main style={css().main}>
        <h1 style={{ textAlign: 'center', marginBottom: 25, ...titleStyle }}>
          We will send you a recovery email
        </h1>
        <form style={{ ...formStyle, textAlign: 'center' }}>
          <Input placeholder="Email" value={email} change={setEmail} type="email" />
          <Button text="Send" />
        </form>
      </main>
      <footer style={css().footer}>
        <div>
          <p style={{ borderTop: `1px solid ${colors().text}`, padding: '15px 10px 0 10px' }}>
            Don&#39;t have an account yet?{' '}
            <span
              style={{ textDecoration: 'underline', transition: '0.9s ease', ...signUpStyle }}
              onMouseEnter={() => setSignUpStyle({ color: colors().white })}
              onMouseLeave={() => setSignUpStyle({})}
            >
              <Link href="/signup">Sign up.</Link>
            </span>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default ForgotPassword
