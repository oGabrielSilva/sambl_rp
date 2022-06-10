import css from '../styles/style'

import { InputProps } from '../types'

const Input = ({ change, type, placeholder, value, style }: InputProps) => {
  return (
    <div style={{ width: '100%' }}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={({ target }) => change(target.value)}
        style={style ?? css().input}
      />
    </div>
  )
}

export default Input
