import { CSSProperties, useCallback, useEffect, useState } from 'react'
import Alert from '../components/Alert'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Input from '../components/Input'
import css from '../styles/style'
import emailValidation from '../utils/validation/email'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [formStyle, setFormStyle] = useState<CSSProperties>({})
  const [titleStyle, setTitleStyle] = useState<CSSProperties>({})
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(false)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const errors: string[] = []

  const verifyFields = () => {
    if (!emailValidation(email)) errors.push('email provided is invalid')
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
      <Header buttons />
      <main style={css().main}>
        <h1 style={{ textAlign: 'center', marginBottom: 25, ...titleStyle }}>
          We will send you a recovery email
        </h1>
        <form style={{ ...formStyle, textAlign: 'center' }}>
          <Input placeholder="Email" value={email} change={setEmail} type="email" />
          <button type="button" style={css().button} onClick={handleSubmit}>
            Send
          </button>
        </form>
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
      <Footer />
    </div>
  )
}

export default ForgotPassword
