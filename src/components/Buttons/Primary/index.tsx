'use client'

import { ReactElement } from 'react'
import { ThemeContext } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IButton } from './types'
import * as S from './styles'

/**
 * PRIMARY BUTTON
 * @param id
 * @param className
 * @param disabled
 * @param type
 * @param children
 * @param formId
 * @param isLoading
 * @param onClick
 * @returns
 */
export default function PrimaryButton({
  id,
  className,
  disabled = false,
  type = 'button',
  children,
  formId,
  isLoading = false,
  onClick,
}: IButton): ReactElement | null {
  return (
    <S.PrimaryButtonStyle
      form={formId}
      id={id}
      className={`${className} ${ThemeContext.displayName}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {isLoading ? <FontAwesomeIcon icon="circle-notch" spin={true} /> : children}
    </S.PrimaryButtonStyle>
  )
}
