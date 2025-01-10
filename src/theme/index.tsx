'use client'

import { ThemeProvider } from 'styled-components'
import { ReactNode } from 'react'
import theme from './base'

export default function CustomProvider({ children }: Readonly<{ children: ReactNode }>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
