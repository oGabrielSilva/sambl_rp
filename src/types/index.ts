import type { CSSProperties } from 'react'

export interface StyleMainGroup {
  logo: CSSProperties
  img: CSSProperties
}

export interface ButtonProps {
  text: string
  style?: CSSProperties
  path?: string
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
