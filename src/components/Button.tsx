import Link from 'next/link'
import { useState } from 'react'
import css from '../styles/style'
import type { ButtonProps } from '../types'
import Indicator from './Indicator'

const Button = ({ style, text, path, func }: ButtonProps) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
    if (func) func()
  }

  return (
    <Link href={path ?? '/'}>
      <button type="button" style={style ?? css().button} onClick={handleClick}>
        <Indicator clicked={clicked}>{text}</Indicator>
      </button>
    </Link>
  )
}

export default Button
