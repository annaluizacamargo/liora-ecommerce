import styled from 'styled-components'
import Image from 'next/image'

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.background};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
`

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 100%;
  width: 90rem;
  z-index: 999;
  padding: 1rem 3rem;
  gap: 0.5rem;

  /* ${({ theme }) =>
    theme.breakpoints.mobile(`
      padding: 1rem 0;
  `)} */
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

export const SearchBar = styled.input`
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

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const ListItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const UlItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const LiItems = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  a {
    text-decoration: none;
  }
`

export const NavItem = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.palette.neutral.light};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.palette.neutral.dark};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  }

  &.active {
    color: ${({ theme }) => theme.palette.neutral.dark};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`
