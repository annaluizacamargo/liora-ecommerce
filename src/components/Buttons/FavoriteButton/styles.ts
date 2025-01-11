import styled from 'styled-components'

export const FavoriteButtonWrapper = styled.button`
  background: ${({ theme }) => theme.palette.primary.default};
  color: ${({ theme }) => theme.palette.neutral.lighter};
  border: ${({ theme }) => `1px solid transparent`};
  border-radius: 50%;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  object-fit: cover;
  width: 2.5rem;
  height: 2.5rem;

  &.is-loading {
    background: transparent;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  &:hover {
    box-shadow: ${({ theme }) => '0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.25)'};
    transition: transform 0.3s;

    svg {
      transform: scale(1.1);
    }
  }
`
