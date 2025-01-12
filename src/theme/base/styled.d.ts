import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    components: Record<string, unknown>
    properties: Record<string, unknown>
    breakpoints: typeof import('./breakpoints').default
    fontSizes: {
      nano: string
      micro: string
      xs: string
      sm: string
      mdx: string
      md: string
      lg: string
      xl: string
    }
    fontWeights: {
      light: string
      regular: string
      medium: string
      semiBold: string
      bold: string
      bolder: string
    }
    lineHeights: {
      default: string
      sm: string
      md: string
      lg: string
    }
    borderWidths: {
      none: string
      sm: string
      md: string
      lg: string
    }
    borderRadius: {
      none: string
      sm: string
      md: string
      button: string
      circle: string
    }
    palette: {
      background: string
      primary: {
        lighter: string
        default: string
      }
      neutral: {
        lighter: string
        light: string
        default: string
        dark: string
        darker: string
      }
      status: {
        error: string
        success: string
        warning: string
      }
    }
  }
}
