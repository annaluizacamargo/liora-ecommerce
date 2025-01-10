import { css } from 'styled-components'
import { IBreakpoints } from './types'

const breakpointsValues: IBreakpoints = {
  mobile: { minWidth: 0, maxWidth: 480 },
  tablet: { minWidth: 481, maxWidth: 768 },
  desktop: { minWidth: 769, maxWidth: 1279 },
  fullHd: { minWidth: 1280 },
}

const generateMediaQuery = (key: keyof typeof breakpointsValues) => {
  const { minWidth, maxWidth } = breakpointsValues[key]
  const width = `(min-width: ${minWidth}px) ${maxWidth ? `and (max-width: ${maxWidth}px)` : ''}`

  return (data: string) => css`
    @media only screen and (${width}) {
      ${data}
    }
  `
}

const breakpoints = {
  values: breakpointsValues,
  mobile: generateMediaQuery('mobile'),
  tablet: generateMediaQuery('tablet'),
  desktop: generateMediaQuery('desktop'),
  fullHd: generateMediaQuery('fullHd'),
}

export default breakpoints
