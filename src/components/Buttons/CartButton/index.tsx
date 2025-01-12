'use client'

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { ICartButton } from '@/components/Buttons/CartButton/types'
import { IProduct } from '@/components/Cards/HomeProductCard/types'
import * as S from './styles'
import PrimaryButton from '../Primary'

library.add(faCircleNotch, solidHeart, regularHeart)

const getBuyList = () => {
  const buyList = localStorage.getItem('buyList')
  return buyList ? JSON.parse(buyList) : []
}

const updateBuyList = (updatedList: IProduct[]) => {
  localStorage.setItem('buyList', JSON.stringify(updatedList))
}

/**
 * CART BUTTON
 * @param productInfo
 * @returns
 */
export default function CartButton({ productInfo }: Readonly<ICartButton>) {
  const [isLoading, setIsLoading] = useState(true)
  const [quantityToBuy, setQuantityToBuy] = useState(0)

  useEffect(() => {
    const buyProductsList = getBuyList()
    const product = buyProductsList.find((item: IProduct) => item.id === productInfo.id)
    setQuantityToBuy(product?.quantity ?? 0)
    setIsLoading(false)
  }, [productInfo.id])

  const handleQuantityChange = (isDecrement: boolean, isIncrement: boolean) => {
    if (isLoading) return

    setIsLoading(true)
    const buyProductsList = getBuyList()
    const productIndex = buyProductsList.findIndex((item: IProduct) => item.id === productInfo.id)

    if (productIndex === -1) {
      setIsLoading(false)
      return
    }

    const updatedQuantity = isDecrement
      ? Math.max(0, buyProductsList[productIndex].quantity - 1)
      : isIncrement
        ? buyProductsList[productIndex].quantity + 1
        : buyProductsList[productIndex].quantity

    buyProductsList[productIndex].quantity = updatedQuantity
    updateBuyList(buyProductsList)
    setQuantityToBuy(updatedQuantity)
    setIsLoading(false)
  }

  return (
    <S.CartButtonWrapper className={`${isLoading ? 'is-loading' : ''} cart-button`}>
      {isLoading ? (
        <FontAwesomeIcon icon="circle-notch" spin={true} />
      ) : (
        <>
          <PrimaryButton onClick={() => handleQuantityChange(false, true)}>Adicionar ao carrinho</PrimaryButton>

          <S.QuantityButtonWrapper>
            <S.QuantityButton onClick={() => handleQuantityChange(true, false)}>-</S.QuantityButton>
            <S.Quantity>{quantityToBuy}</S.Quantity>
            <S.QuantityButton onClick={() => handleQuantityChange(false, true)}>+</S.QuantityButton>
          </S.QuantityButtonWrapper>
        </>
      )}
    </S.CartButtonWrapper>
  )
}
