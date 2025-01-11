'use client'

import { slugify } from '@/lib/helpers/String.helper'
import { usePathname } from 'next/navigation'
import { navItems } from '../options'
import Link from 'next/link'
import * as S from './styles'

/**
 * NAVBAR
 * @returns
 */
export default function Navbar() {
  const url = usePathname() || ''
  const activeSection = url ? `/${url.split('/')[1]}` : 'home'

  // TODO: Fix the window object issue
  if (window === undefined) {
    return <></>
  }

  return (
    <S.NavbarWrapper>
      <S.ListItems>
        <S.UlItems>
          {navItems?.map((item, index) => {
            const link = index === 0 ? '/' : `/${slugify(item)}`
            const isActive = activeSection === link

            return (
              <S.LiItems key={`${item}-${index}`}>
                <Link href={link}>
                  <S.NavItem className={isActive ? 'active' : ''}>{item}</S.NavItem>
                </Link>
              </S.LiItems>
            )
          })}
        </S.UlItems>
      </S.ListItems>
    </S.NavbarWrapper>
  )
}
