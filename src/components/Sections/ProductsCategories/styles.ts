import styled from 'styled-components'

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  padding: 3rem 2rem 3rem 5.25rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  ul {
    display: flex;
    gap: 2rem;
    width: 100%;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      gap: 0.5rem;

      p {
        font-size: 1rem;
        font-weight: 500;
      }

      &:hover {
        cursor: pointer;

        p {
          color: ${({ theme }) => theme.palette.primary.default};
          transition: 0.3s;
          font-weight: ${({ theme }) => theme.fontWeights.bold};
        }
      }
    }
  }

  ${({ theme }) =>
    theme.breakpoints.tablet(`
      padding: 2.5rem;
  `)}

  ${({ theme }) =>
    theme.breakpoints.mobile(`
      padding: 2rem;

      ul {
        gap: 1rem;
      }

      img {
        width: 100%;
        height: auto;
      }
  `)}
`
