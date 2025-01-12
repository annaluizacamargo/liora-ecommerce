import styled from 'styled-components'

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.palette.neutral.dark};
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 0.25rem;
  height: 22rem;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 0.25rem;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.15);
      border-radius: 0.25rem;
    }
  }

  .favorite-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 2;
  }

  .discount-badge {
    z-index: 2;
  }

  ${({ theme }) =>
    theme.breakpoints.tablet(`
      height: 18rem;
  `)}

  ${({ theme }) =>
    theme.breakpoints.mobile(`
      height: 14rem;
  `)}
`

export const DiscountBadge = styled.div<{ className?: string, children?: React.ReactNode }>`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  background: ${({ theme }) => theme.palette.primary.default};
  color: ${({ theme }) => theme.palette.neutral.lighter};
  font-weight: 600;
  padding: 0.25rem;
  border-radius: 0.25rem;
`

export const ProductTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 700;
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.palette.neutral.dark};
`

export const Description = styled.div`
  color: ${({ theme }) => theme.palette.neutral.dark};

  p {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    font-weight: 500;
  }
`

export const PriceWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  font-family: var(--font-smooch-sans);

  p {
    font-size: 1.75rem;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.neutral.dark};
    line-height: 1.5;
  }

  .old-price {
    text-decoration: line-through;
    color: ${({ theme }) => theme.palette.primary.default};
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;

  button {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.palette.primary.default};
    color: ${({ theme }) => theme.palette.neutral.lighter};
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
  }
`
