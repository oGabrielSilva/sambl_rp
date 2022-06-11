import Link from 'next/link'
import { CSSProperties, useCallback, useEffect, useState } from 'react'
import Alert from '../components/Alert'
import Header from '../components/Header'
import Input from '../components/Input'
import css from '../styles/style'
import colors from '../utils/colors'
import emailValidation from '../utils/validation/email'
import passwordValidation from '../utils/validation/password'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formStyle, setFormStyle] = useState<CSSProperties>({})
  const [titleStyle, setTitleStyle] = useState<CSSProperties>({})
  const [signUpStyle, setSignUpStyle] = useState<CSSProperties>({})
  const [forgotStyle, setForgotStyle] = useState<CSSProperties>({})
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(false)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const errors: string[] = []

  const verifyFields = () => {
    if (!emailValidation(email)) errors.push('email provided is invalid')
    if (!passwordValidation(password)) errors.push('password provided is invalid')
  }

  const handleSubmit = (): void => {
    setLoading(true)
    setAlert(true)
    setTitle('Oops... something wrong was found')
    errors.slice(0, errors.length)
    verifyFields()
    if (errors.length) {
      setText(`Errors: ${errors.join('; ')}.`)
      setLoading(false)
      return
    }
    setText('')
    setTitle('Please wait a moment')
  }

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
          <button type="button" style={{ ...css().button, marginTop: 25 }} onClick={handleSubmit}>
            Sign in
          </button>
        </form>
        <div>
          <p style={{ fontSize: 14, marginTop: 25 }}>
            <span
              style={{ textDecoration: 'underline', transition: '0.9s ease', ...forgotStyle }}
              onMouseEnter={() => setForgotStyle({ color: colors().white })}
              onMouseLeave={() => setForgotStyle({})}
            >
              <Link href="/forgotpassword">Forgot password?</Link>
            </span>
          </p>
        </div>
      </main>
      {alert && (
        <Alert
          loading={loading}
          noButtons={loading}
          close={() => setAlert((v) => !v)}
          title={title}
          text={text}
        />
      )}
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
