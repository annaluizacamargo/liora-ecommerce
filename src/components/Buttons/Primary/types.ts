import { ReactNode } from 'react'

export interface IButton {
  id?: string
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  children: ReactNode
  formId?: string
  isLoading?: boolean
  onClick?: () => void
}
