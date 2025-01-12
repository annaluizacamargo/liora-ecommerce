import styled from 'styled-components'

export const PrimaryButtonStyle = styled.button`
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.palette.primary.default};
  color: ${({ theme }) => theme.palette.neutral.lighter};
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  font-size: 1.75rem;
  font-weight: 500;
  font-family: var(--font-smooch-sans);
  cursor: pointer;
  border: none;
  display: flex;
  height: 2.75rem;

  &:hover {
    background-color: ${({ theme }) => theme.palette.neutral.default};
    color: ${({ theme }) => theme.palette.primary.lighter};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  ${({ theme }) =>
    theme.breakpoints.mobile(`
      padding: 0.5rem 1rem;
      width: 100%;
  `)}
` as any
