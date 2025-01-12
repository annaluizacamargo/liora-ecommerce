import styled from 'styled-components'

export const CartButtonWrapper = styled.div`
  display: flex;

  button {
    border-radius: 8px 0 0 8px;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
` as any

export const QuantityButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0 8px 8px 0;
  background-color: ${({ theme }) => theme.palette.neutral.lighter};
  border: 1px solid ${({ theme }) => theme.palette.primary.default};
  color: ${({ theme }) => theme.palette.neutral.light};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 1.25rem;
  cursor: pointer;
  transition: 0.3s;
  width: fit-content;
  font-family: var(--font-smooch-sans);
` as any

export const QuantityButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  cursor: inherit;
  padding: 0.5rem;
` as any

export const Quantity = styled.span`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
` as any
