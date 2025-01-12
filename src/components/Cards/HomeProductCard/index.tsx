'use client'

import { IProduct } from '@/components/Cards/HomeProductCard/types'
import FavoriteButton from '@/components/Buttons/FavoriteButton'
import Link from 'next/link'
import Image from 'next/image'
import * as S from './styles'

/**
 * PRODUCT CARD [Home Page]
 * @param product
 * @returns
 */
export default function HomeProductCard({ product }: Readonly<{ product: IProduct }>) {
  const { id, name, description, price, image, promotional_price, discount_percentage } = product

  return (
    <S.CardWrapper>
      <S.ImageWrapper>
        <FavoriteButton productInfo={product} />

        <Link href={`/product/${id}`}>
          {discount_percentage && (
            <S.DiscountBadge className="discount-badge">
              <span>{discount_percentage}% OFF</span>
            </S.DiscountBadge>
          )}
          {image && <Image src={image} alt={name} width={288} height={352} />}
        </Link>
      </S.ImageWrapper>

      <Link href={`/product/${id}`}>
        <S.ProductTitle>{name}</S.ProductTitle>

        <S.Description>
          <p>{description}</p>
        </S.Description>

        <S.PriceWrapper>
          <p className={promotional_price ? 'old-price' : ''}>R$ {price}</p>
          {product?.promotional_price && <p className="promotional-price">R$ {promotional_price}</p>}
        </S.PriceWrapper>
      </Link>
    </S.CardWrapper>
  )
}
