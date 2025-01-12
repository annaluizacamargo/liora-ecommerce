'use client'

import { IProduct } from '@/components/Cards/HomeProductCard/types'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import FavoriteButton from '@/components/Buttons/FavoriteButton'
import CartButton from '@/components/Buttons/CartButton'
import * as network from '@/services/Network/NextNetwork.service'
import * as S from './styles'

/**
 * PRODUCT INFO PAGE
 * @param params
 * @returns
 */
export default function ProductInfoPage({ params }: Readonly<{ params: { id: string } }>) {
  const { id } = params
  const productId = id.split('-')[0]

  const [productInfo, setProductInfo] = useState<IProduct | null>(null)

  /**
   * FETCH PRODUCTS DATA
   */
  const fetchProductData = async () => {
    try {
      const response = await network.get('/api/products')
      const productsData: IProduct[] = response ?? []
      const productInfo = productsData.find((product) => product?.id === productId) ?? null
      setProductInfo(productInfo)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  // UseEffect: Fetch products data based on the limit and page
  useEffect(() => {
    fetchProductData()
  }, [])

  return (
    <>
      {productInfo && (
        <S.ProductWrapper>
          <S.ImageWrapper>
            {productInfo?.discount_percentage && (
              <S.DiscountBadge className="discount-badge">
                <span>{productInfo?.discount_percentage}% OFF</span>
              </S.DiscountBadge>
            )}
            {productInfo?.image && <Image src={productInfo?.image} alt={productInfo?.name} width={868} height={582} />}
          </S.ImageWrapper>

          <S.ProductInfo>
            <S.ProductDetails>
              <div>
                <S.ProductTitle>{productInfo?.name}</S.ProductTitle>
                <S.PriceWrapper>
                  <p className={productInfo?.promotional_price ? 'old-price' : ''}>R$ {productInfo?.price}</p>
                  {productInfo?.promotional_price && (
                    <p className="promotional-price">R$ {productInfo?.promotional_price}</p>
                  )}
                </S.PriceWrapper>
              </div>

              <FavoriteButton productInfo={productInfo} />
            </S.ProductDetails>

            <S.Description>
              <h5>Descrição:</h5>
              <p>{productInfo?.description}</p>
            </S.Description>

            <CartButton productInfo={productInfo} />
          </S.ProductInfo>
        </S.ProductWrapper>
      )}
    </>
  )
}
