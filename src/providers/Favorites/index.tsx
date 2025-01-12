import { IFavoriteContext, IFavoriteProvider } from '@providers/Favorites/types'
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { IProduct } from '@/components/Cards/HomeProductCard/types'

const Index = createContext<IFavoriteContext>({
  fetchFavoritesList: () => new Promise(() => {}),
  isLoading: true,
  favoritesList: [],
  setFavoritesList: () => void 0,
  handleFavorite: (item: IProduct) => void 0,
})

export function FavoriteListProvider({ children }: Readonly<IFavoriteProvider>) {
  const [favoritesList, setFavoritesList] = useState<IProduct[]>([])
  const [isLoading, setIsLoading] = useState(true)

  /**
   * FETCH MY LIST
   * @param type
   */
  const fetchFavoritesList = useCallback(() => {
    setIsLoading(true)
    const favorites = localStorage.getItem('favorites')
    const favoritesList = favorites ? JSON.parse(favorites) : []
    setFavoritesList(favoritesList)
    setIsLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleFavorite = (item: IProduct) => {
    setIsLoading(true)
    let newList: IProduct[]

    const favorites = localStorage.getItem('favorites')
    const favoritesList: IProduct[] = favorites ? JSON.parse(favorites) : []

    if (!favoritesList?.some((favorite) => favorite.id === item.id)) {
      newList = [...favoritesList, { ...item }]
      localStorage.setItem('favorites', JSON.stringify(newList))
    } else {
      newList = favoritesList?.filter((favorite) => favorite.id !== item.id) ?? []
      localStorage.setItem('favorites', JSON.stringify(newList))
    }

    setFavoritesList(newList)
    setIsLoading(false)
  }

  const values = useMemo(
    () => ({
      fetchFavoritesList,
      favoritesList,
      setFavoritesList,
      handleFavorite,
      isLoading,
    }),
    [fetchFavoritesList, favoritesList, setFavoritesList, handleFavorite, isLoading]
  )

  /**
   * FETCH MY LISTS ON FIRST RENDER
   */
  useEffect(() => {
    if (window) {
      fetchFavoritesList()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Index.Provider value={values}>{children}</Index.Provider>
}

export function useFavoriteListContext(): IFavoriteContext {
  const context = useContext(Index)

  if (!context) {
    throw new Error('useFavoriteListContext must be used within a FavoriteListProvider')
  }

  return context
}
