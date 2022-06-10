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

const css = () => ({ main, button, footer, input })

export default css
