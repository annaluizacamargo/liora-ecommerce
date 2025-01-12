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
   */
  const fetchFavoritesList = useCallback(() => {
    const favorites = localStorage.getItem('favorites')
    const favoritesList = favorites ? JSON.parse(favorites) : []
    setFavoritesList(favoritesList)
    setIsLoading(false) // Marca como carregado quando a lista é recuperada
  }, [])

  const handleFavorite = (item: IProduct) => {
    setIsLoading(true) // Marca como carregando quando o favorito é adicionado ou removido
    let newList: IProduct[]

    const favorites = localStorage.getItem('favorites')
    const favoritesList: IProduct[] = favorites ? JSON.parse(favorites) : []

    if (!favoritesList.some((favorite) => favorite.id === item.id)) {
      newList = [...favoritesList, { ...item }]
      localStorage.setItem('favorites', JSON.stringify(newList))
    } else {
      newList = favoritesList.filter((favorite) => favorite.id !== item.id)
      localStorage.setItem('favorites', JSON.stringify(newList))
    }

    setFavoritesList(newList)
    setIsLoading(false) // Marca como não carregando quando a operação é concluída
  }

  // Carregar lista de favoritos na primeira renderização
  useEffect(() => {
    if (window) {
      fetchFavoritesList()
    }
  }, [fetchFavoritesList])

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

  return <Index.Provider value={values}>{children}</Index.Provider>
}

export function useFavoriteListContext(): IFavoriteContext {
  const context = useContext(Index)

  if (!context) {
    throw new Error('useFavoriteListContext must be used within a FavoriteListProvider')
  }

  return context
}
