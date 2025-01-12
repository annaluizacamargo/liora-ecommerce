import styled from 'styled-components'
import Image from 'next/image'

export const HeaderContainer = styled.div<{ $isScrolled: boolean; children?: React.ReactNode }>`
  background-color: ${({ theme }) => theme.palette.background};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  box-shadow: ${(props) => (props.$isScrolled ? '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)' : 'none')};
`

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 100%;
  width: 90rem;
  padding: 1rem 3rem;
  gap: 0.5rem;
`

export const HeaderLogoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 2.25rem;
  gap: 3rem;
`

export const HeaderLogo = styled(Image)`
  cursor: pointer;
`

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37rem;
  max-width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.lighter};
  border-radius: 1rem;
  padding: 0 1.5rem;
  height: 2.125rem;
  gap: 1rem;
`

export const SearchIcon = styled(Image)`
  cursor: pointer;
`

interface SearchBarProps {
  type: string
  placeholder: string
}

export const SearchBar = styled.input<SearchBarProps>`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  background: none;
  border: none;
  color: ${({ theme }) => theme.palette.neutral.default};
`

export const UserOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 2.5rem;
  height: 2.375rem;
`

export const Option = styled(Image)`
  cursor: pointer;

  &:hover {
    filter: brightness(30%);
  }
`

export const Divisor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const DivisorLine = styled.hr`
  width: 100%;
  border: 0.1rem solid ${({ theme }) => theme.palette.primary};
  opacity: 0.3;
`
