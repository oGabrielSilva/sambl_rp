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

const footer: CSSProperties = {
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  fontSize: 14,
}

const css = () => ({ main, button, footer })

export default css
