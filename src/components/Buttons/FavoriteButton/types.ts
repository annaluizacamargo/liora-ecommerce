import { IProduct } from '@/components/Cards/HomeProductCard/types'

export interface IFavoriteButton {
  productInfo: IProduct
  action?: () => any
  favorite?: boolean
}
