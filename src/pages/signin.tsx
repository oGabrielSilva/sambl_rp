import Link from 'next/link'
import { CSSProperties, useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import Header from '../components/Header'
import Input from '../components/Input'
import css from '../styles/style'
import colors from '../utils/colors'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formStyle, setFormStyle] = useState<CSSProperties>({})
  const [titleStyle, setTitleStyle] = useState<CSSProperties>({})
  const [signUpStyle, setSignUpStyle] = useState<CSSProperties>({})
  const [forgotStyle, setForgotStyle] = useState<CSSProperties>({})

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
          Welcome back to Sambl
        </h1>
        <form style={{ ...formStyle, textAlign: 'center' }}>
          <Input change={setEmail} value={email} placeholder="Email" type="email" />
          <Input change={setPassword} value={password} placeholder="Password" type="password" />
          <Button text="Sign in" style={{ ...css().button, marginTop: 25 }} />
        </form>
        <div>
          <p style={{ fontSize: 14, marginTop: 25 }}>
            <span
              style={{ textDecoration: 'underline', transition: '0.9s ease', ...forgotStyle }}
              onMouseEnter={() => setForgotStyle({ color: colors().white })}
              onMouseLeave={() => setForgotStyle({})}
            >
              <Link href="/forgot">Forgot password?</Link>
            </span>
          </p>
        </div>
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

export default SignIn
