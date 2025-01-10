export interface IBreakpoints {
  mobile: IBreakpointsInfo
  tablet: IBreakpointsInfo
  desktop: IBreakpointsInfo
  fullHd: IBreakpointsInfo
}

export interface IBreakpointsInfo {
  minWidth: number
  maxWidth?: number
}
