'use client'

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { IFavoriteButton } from '@/components/Buttons/FavoriteButton/types'
import { IProduct } from '@/components/Cards/HomeProductCard/types'
import * as S from './styles'

library.add(faCircleNotch, solidHeart, regularHeart)

/**
 * FAVORITE BUTTON
 * @param productInfo
 * @returns
 */
export default function FavoriteButton({ productInfo }: Readonly<IFavoriteButton>) {
  const [isLoading, setIsLoading] = useState(true)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const favorites = localStorage.getItem('favorites')
    const favoritesList = favorites ? JSON.parse(favorites) : []
    setIsFavorite(favoritesList?.some((item: IProduct) => item.id === productInfo.id) ?? false)
    setIsLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClick = () => {
    if (isLoading) {
      return
    }

    setIsLoading(true)
    const favorites = localStorage.getItem('favorites')
    const favoritesList = favorites ? JSON.parse(favorites) : []
    const isFavorite = favoritesList.some((item: IProduct) => item.id === productInfo.id)

    if (!isFavorite) {
      const newList = [...favoritesList, { ...productInfo }]
      localStorage.setItem('favorites', JSON.stringify(newList))
    } else {
      const newList = favoritesList.filter((item: IProduct) => item.id !== productInfo.id)
      localStorage.setItem('favorites', JSON.stringify(newList))
    }
    setIsFavorite(!isFavorite)
    setIsLoading(false)
  }

  return (
    <S.FavoriteButtonWrapper onClick={handleClick} className={`${isLoading ? 'is-loading' : ''} favorite-button`}>
      {isLoading ? (
        <FontAwesomeIcon icon="circle-notch" spin={true} />
      ) : (
        <FontAwesomeIcon icon={isFavorite ? solidHeart : regularHeart} />
      )}
    </S.FavoriteButtonWrapper>
  )
}
