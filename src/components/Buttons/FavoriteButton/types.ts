import { IProduct } from '@/app/types'

export interface IFavoriteButton {
  productInfo: IProduct
  action?: () => any
  favorite?: boolean
}
