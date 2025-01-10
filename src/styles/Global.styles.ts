'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    background: ${({ theme }) => theme.palette.background};
    font-family: 'Montserrat', sans-serif;
    min-height: 100vh;
  }

  h1 {
    font-family: 'Smooch Sans', sans-serif;
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeights.bold /*700*/};
    font-size: ${({ theme }) => theme.fontSizes.xl /*64px*/};
    line-height: normal;
    letter-spacing: -0.08rem;
  }

  h2 {
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeights.medium /*500*/};
    font-size: ${({ theme }) => theme.fontSizes.lg /*40px*/};
    line-height: normal;
    letter-spacing: -0.05rem;
  }

  h3 {
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeights.bold /*700*/};
    font-size: ${({ theme }) => theme.fontSizes.md /*24px*/};
    line-height: normal;
    letter-spacing: -0.03rem;
  }

  h4 {
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeights.bold /*700*/};
    font-size: ${({ theme }) => theme.fontSizes.md /*24px*/};
    line-height: 28px;
    letter-spacing: -0.02em;
  }

  h5 {
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeights.bold /*700*/};
    font-size: ${({ theme }) => theme.fontSizes.sm /*16px*/};
    line-height: 19px;
    letter-spacing: -0.02em;
  }

  h6 {
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeights.bold /*700*/};
    font-size: ${({ theme }) => theme.fontSizes.xs /*14px*/};
    line-height: 16px;
    letter-spacing: -0.02em;
  }

  p {
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeights.regular /*400*/};
    font-size: ${({ theme }) => theme.fontSizes.xs /*14px*/};
    line-height: 16px;
    letter-spacing: -0.02em;
  }

  span {
    &.emphasis {
      color: ${({ theme }) => theme.palette.neutral.dark} !important;
      font-weight: ${({ theme }) => theme.fontWeights.bold /*700*/} !important;
    }
  }

  button {
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeights.medium /*500*/};
    font-size: ${({ theme }) => theme.fontSizes.sm /*16px*/};
    line-height: 19px;
    letter-spacing: -0.02em;
    padding: 0.375rem 1.5rem;
    height: fit-content;
    width: fit-content;
    border-radius: ${({ theme }) => theme.borderRadius.button /*16px*/};
    display: flex;
    align-items: center;
    justify-content: center;

    &.light {
      font-weight: ${({ theme }) => theme.fontWeights.light /*300*/};
    }

    &.small {
      font-weight: ${({ theme }) => theme.fontWeights.regular /*400*/};
      font-size: ${({ theme }) => theme.fontSizes.xs /*14px*/};
      line-height: 16px;
      padding: 0.25rem 0.75rem;
    }

    &:hover {
      transition: 0.1s linear;
      cursor: pointer;
    }

    ${({ theme }) =>
      theme.breakpoints.mobile(`
        font-weight: ${theme.fontWeights.regular /*400*/};
        padding: 0.25rem 0.75rem;
    `)}
  }

  a {
    text-decoration: none;
  }
`
