'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { IFavoriteButton } from '@/components/Buttons/FavoriteButton/types'
import { useFavoriteListContext } from '@providers/Favorites'
import { IProduct } from '@/app/types'
import * as S from './styles'

library.add(faCircleNotch, solidHeart, regularHeart)

/**
 * FAVORITE BUTTON
 * @param productInfo
 * @returns
 */
export default function FavoriteButton({ productInfo }: Readonly<IFavoriteButton>) {
  const { handleFavorite, favoritesList } = useFavoriteListContext()
  const [isLoading, setIsLoading] = useState(false)
  const isFavorite = favoritesList.some((item: IProduct) => item?.id == productInfo?.id)

  const handleClick = async () => {
    setIsLoading(true)
    handleFavorite(productInfo)
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
