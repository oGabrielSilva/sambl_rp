import { CSSProperties, useCallback, useEffect, useState } from 'react'
import Alert from '../components/Alert'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Input from '../components/Input'
import css from '../styles/style'
import emailValidation from '../utils/validation/email'
import nameValidation from '../utils/validation/name'
import textareaValidation from '../utils/validation/textarea'

const Contact = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [formStyle, setFormStyle] = useState<CSSProperties>({})
  const [titleStyle, setTitleStyle] = useState<CSSProperties>({})
  const [alert, setAlert] = useState(false)
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('Wait a minute')
  const [errors, setErrors] = useState<string[]>([])

  const mistakeInTheFields = () => {
    const err = []
    if (!emailValidation(email)) err.push('Email provided is invalid')
    if (!nameValidation(name)) err.push('Name provided is invalid')
    if (!nameValidation(subject)) err.push('Subject provided is invalid')
    if (!textareaValidation(message)) err.push('Text field provided is invalid')
    if (err.length) setLoading(false)
    setErrors(err)
    return !!err.length
  }

  const handleSubmit = (): void => {
    setAlert(true)
    setTitle('Oops... something wrong was found')
    if (mistakeInTheFields()) return
    setLoading(true)
    setTitle('Please wait a moment')
  }

  const handleChangeScreenWidth = useCallback(() => {
    setFormStyle((window.innerWidth <= 750 && { width: '80vw' }) || { width: '50vw' })
    setTitleStyle((window.innerWidth <= 600 && { fontSize: 25 }) || { fontSize: 35 })
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
      <main style={{ ...css().main, paddingTop: 60 }}>
        <h1 style={{ textAlign: 'center', marginBottom: 25, ...titleStyle }}>Contact us</h1>
        <form style={{ ...formStyle, textAlign: 'center' }}>
          <Input change={setName} value={name} placeholder="Your name" type="text" />
          <Input change={setEmail} value={email} placeholder="Your email" type="email" />
          <Input change={setSubject} value={subject} placeholder="Subject" type="text" />
          <label htmlFor="#message" style={{ position: 'relative' }}>
            <small
              id="small-textarea"
              style={{
                position: 'absolute',
                bottom: -7,
                right: 0,
                fontSize: 10,
              }}
            >
              <span>{500 - message.length}</span>
            </small>
            <textarea
              id="message"
              style={css().textarea}
              value={message}
              onChange={({ target }) => setMessage(target.value)}
            />
          </label>
          <div>
            <button type="button" style={css().button} onClick={handleSubmit}>
              Send
            </button>
          </div>
        </form>
      </main>
      {alert && (
        <Alert
          loading={loading}
          noButtons={loading}
          close={() => setAlert((v) => !v)}
          title={title}
        >
          <div>
            {errors.map((err) => (
              <div key={err}>
                <span>{err}</span>
              </div>
            ))}
          </div>
        </Alert>
      )}
      <Footer />
    </div>
  )
}

export default Contact
