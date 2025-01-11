'use client'

import { slugify, stringToMd5 } from '@/lib/helpers/String.helper'
import { navItems, userOptions } from './options'
import Link from 'next/link'
import * as S from './styles'
import { useEffect, useState } from 'react'

/**
 * LIORA E-COMMERCE HEADER
 */
export default function Header() {
  const logo = require('@assets/icons/liora-logo.svg')
  const searchIcon = require('@assets/icons/search-icon.svg')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 0)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.HeaderContainer $isScrolled={isScrolled}>
      <S.HeaderWrapper>
        <S.HeaderLogoSection>
          <Link href="/">
            <S.HeaderLogo src={logo} alt="Logo do site Liora" width={86} height={67} />
          </Link>

          <S.SearchBarWrapper>
            <S.SearchIcon src={searchIcon} alt="Ícone de busca" width={16} height={16} />
            <S.SearchBar type="text" placeholder="O que você está procurando?" />
          </S.SearchBarWrapper>

          <S.UserOptions>
            {userOptions.map((option, index) => (
              <Link key={stringToMd5(`${option.name}-${index}`)} href={option.link || '/'}>
                <S.Option src={option.icon} alt={option.alt} width={option.width} height={option.height} />
              </Link>
            ))}
          </S.UserOptions>
        </S.HeaderLogoSection>

        <S.Divisor>
          <S.DivisorLine />
        </S.Divisor>

        <S.NavbarWrapper>
          <S.ListItems>
            <S.UlItems>
              {navItems?.map((item, index) => {
                const link = index === 0 ? '/' : `/${slugify(item)}`
                const isActive = window && window.location.pathname === link

                return (
                  <S.LiItems key={stringToMd5(`${item}-${index}`)}>
                    <Link href={link}>
                      <S.NavItem className={isActive ? 'active' : ''}>{item}</S.NavItem>
                    </Link>
                  </S.LiItems>
                )
              })}
            </S.UlItems>
          </S.ListItems>
        </S.NavbarWrapper>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  )
}
