'use client'

import { stringToMd5 } from '@/lib/helpers/String.helper'
import { userOptions } from './options'
import { useEffect, useState } from 'react'
import Navbar from './NavBar'
import Link from 'next/link'
import * as S from './styles'

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

        <Navbar />
      </S.HeaderWrapper>
    </S.HeaderContainer>
  )
}
