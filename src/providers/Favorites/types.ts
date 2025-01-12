import { Dispatch, ReactNode, SetStateAction } from 'react'
import { IProduct } from '@/components/Cards/HomeProductCard/types'

export interface IFavoriteProvider {
  children: ReactNode
}

export interface IFavoriteContext {
  fetchFavoritesList: () => void
  favoritesList: IProduct[]
  setFavoritesList: Dispatch<SetStateAction<IProduct[]>>
  handleFavorite: (item: IProduct) => void
  isLoading: boolean
}
