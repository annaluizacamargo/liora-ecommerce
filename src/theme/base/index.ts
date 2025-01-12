import { DefaultTheme } from 'styled-components'
import breakpoints from './breakpoints'

/**
 * BASE THEME
 * 16px = 1rem
 */

const theme: DefaultTheme = {
  components: {},
  properties: {},
  breakpoints,
  fontSizes: {
    nano: '0.625rem', // 10px
    micro: '0.75rem', // 12px
    xs: '0.875rem', // 14px
    sm: '1rem', // 16px
    mdx: '1.125rem', // 18px
    md: '1.5rem', // 24px
    lg: '2.5rem', // 40px
    xl: '4rem', // 64px
  },
  fontWeights: {
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    bolder: '800',
  },
  lineHeights: {
    default: '100%',
    sm: '125%',
    md: '150%',
    lg: '170%',
  },
  borderWidths: {
    none: 'none',
    sm: '0.063rem', // 1px
    md: '0.125rem', // 2px
    lg: '0.25rem', // 4px
  },
  borderRadius: {
    none: 'none',
    sm: '0.25rem', // 4px
    md: '0.5rem', // 8px
    button: '1rem', // 16px
    circle: '50%',
  },
  palette: {
    background: '#FEFEFE',
    primary: {
      lighter: '#E6E6E6',
    //   light: '#565656',
      default: '#A88179',
    //   dark: '#191919',
    //   darker: '#232323',
    },
    neutral: {
      lighter: '#FEFEFE',
      light: '#565656',
      default: '#3F3F3F',
      dark: '#191919',
      darker: '#000000',
    },
    status: {
      error: '#DA2323',
      success: '#38CC20',
      warning: '#ECD930',
    },
  },
}

export default theme
