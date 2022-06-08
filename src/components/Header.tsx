import Image from 'next/image'
import Link from 'next/link'
import { CSSProperties, useEffect, useState } from 'react'
import type { ButtonsHeaderProps, StyleMainGroup } from '../types'
import styles from '../styles/home.module.css'
import colors from '../utils/colors'

const group: StyleMainGroup = {
  logo: {
    background: colors().text,
    height: 55,
    width: 55,
    transition: '0.4s ease-in',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: { cursor: 'pointer' },
}

const Buttons = ({ styles: style }: ButtonsHeaderProps) => {
  const [resize, setResize] = useState<CSSProperties>({})

  useEffect(() => setResize((window.innerWidth <= 600 && { margin: 0 }) || {}), [])

  return (
    <div style={style ?? {}}>
      <Link href="/">
        <a className={styles.link} style={resize}>
          Lorem ipsun
        </a>
      </Link>
      <Link href="/spbre">
        <a className={styles.linkBtn} style={resize}>
          Sign up
        </a>
      </Link>
    </div>
  )
}

const Header = () => {
  const [mouseInImage, setMouseInImage] = useState(false)
  const [buttonsContainerStyle, setButtonsContainerStyle] = useState<CSSProperties>({})

  useEffect(() => {
    if (window.innerWidth <= 600)
      setButtonsContainerStyle({
        position: 'absolute',
        top: '11vh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100vw',
        left: 0,
      })
  }, [])

  return (
    <header className={styles.header}>
      <div
        style={{
          ...group.logo,
          ...((mouseInImage && { background: colors().white }) || {}),
        }}
        onMouseEnter={() => setMouseInImage(true)}
        onMouseLeave={() => setMouseInImage(false)}
      >
        <Link href="/">
          <Image src="/atom.svg" alt="Logo" width={55} height={55} style={group.img} />
        </Link>
      </div>
      <Buttons styles={buttonsContainerStyle} />
    </header>
  )
}

export default Header
