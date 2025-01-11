'use client'

import { useEffect, useState } from 'react'
import { stringToMd5 } from '@/lib/helpers/String.helper'
import { IProduct } from '@/app/types'
import { handleResize } from './helpers/GridCards.helper'
import HomeProductCard from '@/components/Cards/HomeProductCard'
import PrimaryButton from '@/components/Buttons/Primary'
import * as network from '@/services/Network/NextNetwork.service'
import * as S from './styles'

/**
 * PRODUCTS GRID
 * @returns
 */
export default function ProductsGrid() {
  const [productsPage, setProductsPage] = useState(1)
  const [limitOfProducts, setLimitOfProducts] = useState(6)
  const [productsData, setProductsData] = useState<IProduct[]>([])
  const [isEndOfProducts, setIsEndOfProducts] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  /**
   * FETCH PRODUCTS DATA
   */
  const fetchProductsData = async (limit: number, page: number) => {
    try {
      const response = await network.post('/api/products-pagination', { limit, page })
      const productsData = response?.data ?? []
      setIsEndOfProducts(response?.finished)

      if (page === 1) {
        setProductsData(productsData)
      } else {
        setProductsData((prev) => [...prev, ...productsData])
      }

      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  // UseEffect: Change the limit of products based on the screen width
  useEffect(() => {
    handleResize(setLimitOfProducts, setProductsPage)
    window.addEventListener('resize', () => handleResize(setLimitOfProducts, setProductsPage))
    return () => window.removeEventListener('resize', () => handleResize(setLimitOfProducts, setProductsPage))
  }, [])

  // UseEffect: Fetch products data based on the limit and page
  useEffect(() => {
    fetchProductsData(limitOfProducts, productsPage)
  }, [limitOfProducts, productsPage])

  return (
    <S.ProductsContainer>
      <h3>Confira nossas novidades!</h3>

      <ul>
        {productsData &&
          productsData.length > 0 &&
          productsData?.map((product: IProduct, index: number) => {
            const { name } = product

            return (
              <li key={stringToMd5(`${index}-${name}`)}>
                <HomeProductCard product={product} />
              </li>
            )
          })}
      </ul>

      {productsData?.length > 0 && !isEndOfProducts && (
        <S.ButtonWrapper>
          <PrimaryButton
            isLoading={isLoading}
            onClick={() => {
              setIsLoading(true)
              setProductsPage((prev) => prev + 1)
            }}
          >
            Ver mais produtos
          </PrimaryButton>
        </S.ButtonWrapper>
      )}
    </S.ProductsContainer>
  )
}
