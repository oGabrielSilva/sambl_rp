import Link from 'next/link'
import { CSSProperties, useCallback, useEffect, useState } from 'react'
import Header from '../components/Header'
import Input from '../components/Input'
import css from '../styles/style'
import colors from '../utils/colors'

const SignUp = () => {
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formStyle, setFormStyle] = useState<CSSProperties>({})
  const [titleStyle, setTitleStyle] = useState<CSSProperties>({ fontSize: 40 })
  const [signInStyle, setSignInStyle] = useState<CSSProperties>({})

  const handleSubmit = useCallback(() => {
    return 'oi' // falta criar a função
  }, [])

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
    <>
      <div>
        <section>
          <Header />
          <main style={css().main}>
            <h1 style={{ textAlign: 'center', marginBottom: 25, ...titleStyle }}>
              We are happy to see you on this screen. :D
            </h1>
            <form style={{ ...formStyle, textAlign: 'center' }}>
              <Input type="text" placeholder="Full name" value={fullName} change={setFullName} />
              <Input type="text" placeholder="Username" value={username} change={setUsername} />
              <Input type="email" placeholder="Email" value={email} change={setEmail} />
              <Input type="password" placeholder="Password" value={password} change={setPassword} />
              <button
                type="submit"
                style={{ ...css().button, marginTop: 25 }}
                onClick={handleSubmit}
              >
                Sign up
              </button>
            </form>
          </main>
        </section>
      </div>
      <footer style={css().footer}>
        <div>
          <p style={{ borderTop: `1px solid ${colors().text}`, padding: '15px 10px 0 10px' }}>
            Already have an account?{' '}
            <span
              style={{ textDecoration: 'underline', transition: '0.9s ease', ...signInStyle }}
              onMouseEnter={() => setSignInStyle({ color: colors().white })}
              onMouseLeave={() => setSignInStyle({})}
            >
              <Link href="/signin">Sign in.</Link>
            </span>
          </p>
        </div>
      </footer>
    </>
  )
}

export default SignUp
