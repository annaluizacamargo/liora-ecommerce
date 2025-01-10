import type { Metadata } from 'next'
import { Montserrat, Smooch_Sans } from 'next/font/google'
import { GlobalStyle } from '@/styles/Global.styles'
import Header from '@/components/_Layout/Header'
import CustomProvider from '@/theme'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
})

const smoochSans = Smooch_Sans({
  variable: '--font-smooch-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Liora E-Commerce',
  description: 'O melhor e-commerce de moda do Brasil',
}

/**
 * ROOT LAYOUT
 * @param children
 * @returns
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.variable} ${smoochSans.variable}`}>
        <CustomProvider>
          <GlobalStyle />
          <Header />
          {children}
        </CustomProvider>
      </body>
    </html>
  )
}
