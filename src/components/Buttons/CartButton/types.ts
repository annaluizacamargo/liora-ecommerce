import { IProduct } from '@/components/Cards/HomeProductCard/types'

export interface ICartButton {
  productInfo: IProduct
  isFavorited?: boolean
  action?: () => any
  favorite?: boolean
}
