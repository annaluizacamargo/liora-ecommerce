import styled from 'styled-components'

export const NavbarWrapper = styled.nav`
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

export const LiItems = styled.li<{ children?: React.ReactNode }>`
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
