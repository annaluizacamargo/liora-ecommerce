'use client'

import { IProduct } from './types'
import { FavoriteListProvider } from '@providers/Favorites'
import { useEffect, useState } from 'react'
import { stringToMd5 } from '@/lib/helpers/String.helper'
import Image from 'next/image'
import HomeProductCard from '@/components/Cards/HomeProductCard'
import * as network from '@/services/Network/NextNetwork.service'
import * as S from './styles'
import ProductsGrid from '@/components/Sections/ProductsGrid/page'

const LIMIT_OF_PRODUCTS = 6
const DESKTOP_CARD_WIDTH = 4
const TABLET_CARD_WIDTH = 3
const MOBILE_CARD_WIDTH = 2

/**
 * HOME PAGE [News Products]
 * @returns
 */
export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([])
  const banner = require('@assets/banner.jpg')
  const [productsPage, setProductsPage] = useState(1)
  const [limitOfProducts, setLimitOfProducts] = useState(LIMIT_OF_PRODUCTS)

  // /**
  //  * FETCH PRODUCTS DATA
  //  */
  // const fetchProductsData = async () => {
  //   const response = await network.post('/api/products-pagination', { limit: LIMIT_OF_PRODUCTS, page: productsPage })
  //   setProducts((prev) => [...prev, ...response])
  // }

  // useEffect(() => {
  //   // calculate the limit of products com base na largura da tela
  //   const handleResize = () => {
  //     const windowWidth = window.innerWidth
  //     const newLimitOfProducts = windowWidth < 768 ? 3 : windowWidth < 1024 ? 4 : LIMIT_OF_PRODUCTS
  //     setLimitOfProducts(newLimitOfProducts)
  //   }

  //   handleResize()
  //   fetchProductsData()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [productsPage])

  return (
    <FavoriteListProvider>
      <S.HomeContainer>
        <S.Banner>
          <Image src={banner} alt="Banner" width={1440} height={486} />
        </S.Banner>
        <ProductsGrid />

        {/* <S.ProductsContainer>
          <h3>Chegou agora!</h3>

          <ul>
            {products?.map((product: IProduct, index) => {
              const { name } = product

              return (
                <li key={stringToMd5(`${index}-${name}`)}>
                  <HomeProductCard product={product} />
                </li>
              )
            })}
          </ul>

          {products?.length > 0 && (
            <S.ButtonWrapper>
              <button onClick={() => setProductsPage(productsPage + 1)}>Carregar mais produtos</button>
            </S.ButtonWrapper>
          )}
        </S.ProductsContainer> */}
      </S.HomeContainer>
    </FavoriteListProvider>
  )
}
