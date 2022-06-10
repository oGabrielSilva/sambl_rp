import { CSSProperties, useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Input from '../components/Input'
import css from '../styles/style'

const Contact = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [formStyle, setFormStyle] = useState<CSSProperties>({})
  const [titleStyle, setTitleStyle] = useState<CSSProperties>({})

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
          <textarea
            style={{ ...css().input, resize: 'vertical', fontSize: 14, minHeight: 150 }}
            value={message}
            onChange={({ target }) => setMessage(target.value)}
          />
          <Button text="Send" />
        </form>
      </main>
      <Footer />
    </div>
  )
}

export default Contact
