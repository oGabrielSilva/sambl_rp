import Link from 'next/link'
import { CSSProperties, useState } from 'react'
import type { ButtonProps } from '../types'
import colors from '../utils/colors'
import Indicator from './Indicator'

export const styles: CSSProperties = {
  background: colors().blue,
  paddingTop: 15,
  paddingBottom: 15,
  paddingLeft: 60,
  paddingRight: 60,
  border: 0,
  cursor: 'pointer',
  textTransform: 'uppercase',
  marginTop: 50,
  borderRadius: 5,
  transition: '0.5s ease',
}

const Button = ({ style, text, path, func }: ButtonProps) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
    if (func) func()
  }

  return (
    <Link href={path ?? '/'}>
      <button type="button" style={style ?? styles} onClick={handleClick}>
        <Indicator clicked={clicked}>{text}</Indicator>
      </button>
    </Link>
  )
}

export default Button
