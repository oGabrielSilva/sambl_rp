import { useCallback, useEffect, useState } from 'react'

const Footer = () => {
  const [inMobile, setInMobile] = useState(false)

  const handleChangeScreenWidth = useCallback(() => setInMobile(window.innerWidth <= 600), [])

  useEffect(() => setInMobile(window.innerWidth <= 600), [])

  useEffect(() => {
    window.addEventListener('resize', handleChangeScreenWidth)
    return () => {
      window.removeEventListener('resize', handleChangeScreenWidth)
    }
  }, [handleChangeScreenWidth])

  return (
    <footer>
      <section
        style={{
          height: '10vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: (!inMobile && 'start') || 'center',
        }}
      >
        <span style={{ fontSize: 13, textAlign: 'center' }}>
          &copy; 2022 - Gabriel Silva, all rights reserved
        </span>
      </section>
    </footer>
  )
}

export default Footer
