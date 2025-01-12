'use client'

import { slugify } from '@/lib/helpers/String.helper'
import Link from 'next/link'
import * as S from './styles'

/**
 * NAVBAR
 * @returns
 */
export default function Navbar() {
  /**
   * Navigation items for the header [the bottom part]
   */
  const navItems = ['Novidades', 'Todos os Produtos', 'Feminino', 'Masculino', 'Calçados']

  return (
    <S.NavbarWrapper>
      <S.UlItems>
        {navItems?.map((item) => {
          // TODO: Implement activeSection
          // const link = index === 0 ? '/' : `/${slugify(item)}`
          // const isActive = activeSection === link

          return (
            <S.LiItems key={slugify(item)}>
              <Link href="/">
                <S.NavItem>{item}</S.NavItem>
              </Link>
            </S.LiItems>
          )
        })}
      </S.UlItems>
    </S.NavbarWrapper>
  )
}
