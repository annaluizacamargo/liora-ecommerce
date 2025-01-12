import { GlobalStyle } from '@/styles/Global.styles'
import type { Metadata } from 'next'
import { Montserrat, Smooch_Sans } from 'next/font/google'
import CustomProvider from '@/theme'
import Header from '@/components/_Layout/Header'

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

export default async function RootLayout({
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
