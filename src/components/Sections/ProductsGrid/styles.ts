import styled from 'styled-components'

export const ProductsContainer = styled.div`
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
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 18rem));
    gap: 2rem;
    width: 100%;

    li {
      display: flex;
      border-radius: 0.5rem;
      width: 100%;

      &:hover {
        img {
          transform: scale(1.15);
          transition: transform 0.3s;
        }
      }
    }

    a {
      width: 100%;
      text-decoration: none;
    }
  }

  ${({ theme }) =>
    theme.breakpoints.fullHd(`
      ul {
        grid-template-columns: repeat(auto-fill, minmax(24rem, 24rem));
        gap: 2.5rem;
      }
  `)}

  ${({ theme }) =>
    theme.breakpoints.tablet(`
      padding: 2.5rem;

      ul {
        grid-template-columns: repeat(auto-fill, minmax(13.5rem, 13.5rem));
        gap: 1rem;
      }
  `)}

  ${({ theme }) =>
    theme.breakpoints.mobile(`
      padding: 2rem;

      ul {
        grid-template-columns: repeat(auto-fill, minmax(10rem, 10rem));
        gap: 1rem;
      }
  `)}
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  width: 100%;
`
