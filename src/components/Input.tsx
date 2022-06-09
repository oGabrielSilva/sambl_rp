import { CSSProperties } from 'react'
import { InputProps } from '../types'
import colors from '../utils/colors'

const styles: CSSProperties = {
  background: colors().dark,
  color: colors().text,
  border: `1px solid ${colors().border}`,
  padding: 10,
  minWidth: '100%',
  fontSize: 15,
}

const Input = ({ change, type, placeholder, value, style }: InputProps) => {
  return (
    <div style={{ width: '100%' }}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={({ target }) => change(target.value)}
        style={style ?? styles}
      />
    </div>
  )
}

export default Input
