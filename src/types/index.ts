import type { CSSProperties } from 'react'

export interface StyleMainGroup {
  logo: CSSProperties
  img: CSSProperties
  button: CSSProperties
}

export interface ButtonProps {
  text: string
  style?: CSSProperties
  path?: string
  func?(): void
}

export interface ContextTypes {
  mobile: boolean
  setMobile(value: boolean): void
}

export interface ContainerHeaderProps {
  container: CSSProperties
  core: CSSProperties
}

export interface ButtonsHeaderProps {
  styles?: CSSProperties
}

export interface IndicatorProps {
  children: string
  clicked: boolean
}

export interface HeaderProps {
  buttons?: boolean
}

export interface InputProps {
  value: string
  change(value: string): void
  type: string
  placeholder: string
  style?: CSSProperties
}
