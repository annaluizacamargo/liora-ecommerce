import { IProduct } from '@/components/Cards/HomeProductCard/types'

export interface IFavoriteButton {
  productInfo: IProduct
  isFavorited?: boolean
  action?: () => any
  favorite?: boolean
}
