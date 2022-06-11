import { CSSProperties } from 'react'
import colors from '../utils/colors'

const main: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '90vh',
}

const button: CSSProperties = {
  background: colors().blue,
  paddingTop: 9,
  paddingBottom: 9,
  paddingLeft: 60,
  paddingRight: 60,
  border: 0,
  cursor: 'pointer',
  textTransform: 'uppercase',
  marginTop: 50,
  borderRadius: 5,
  transition: '0.5s ease',
}

const input: CSSProperties = {
  background: colors().dark,
  color: colors().text,
  border: `1px solid ${colors().border}`,
  padding: 10,
  minWidth: '100%',
  fontSize: 15,
}

const footer: CSSProperties = {
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  fontSize: 14,
}

const textarea: CSSProperties = {
  ...input,
  resize: 'none',
  fontSize: 14,
  minHeight: 150,
  transition: '0.5s ease-in',
}

const alertContainer: CSSProperties = {
  width: '50vw',
  minHeight: 100,
  background: colors().dark,
  border: `1px solid ${colors().border}`,
  boxShadow: '2px 4px 40px -3px #000000',
  transition: '0.7s ease-in',
  textAlign: 'center',
  fontSize: 15,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '20px 10px',
}

const alertBack: CSSProperties = {
  height: '100vh',
  width: '100vw',
  background: 'rgba(00, 00, 00, 0.5)',
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const css = () => ({ main, button, footer, input, textarea, alertContainer, alertBack })

export default css
