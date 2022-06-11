import type { CSSProperties, HTMLInputTypeAttribute } from 'react'

export interface StyleMainGroup {
  logo: CSSProperties
  img: CSSProperties
  button: CSSProperties
}

export interface ButtonProps {
  text: string
  clicked: boolean
  style?: CSSProperties
  path?: string
  setClicked(value?: boolean): void
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
  type: HTMLInputTypeAttribute
  placeholder: string
  style?: CSSProperties
}

export interface AlertProps {
  title: string
  text: string
  confirm?: string
  close(): void
  loading?: boolean
  noButtons?: boolean
}
