'use client'

import { FavoriteListProvider } from '@providers/Favorites'
import { useState } from 'react'
import { slugify } from '@/lib/helpers/String.helper'
import ProductsGrid from '@/components/Sections/ProductsGrid'
import NewsSection from '@/components/Sections/NewsSection'
import ProductsCategories from '@/components/Sections/ProductsCategories'
import BannerSection from '@/components/Sections/BannerSection'
import * as S from './styles'

/**
 * HOME PAGE [News Products]
 * @returns
 */
export default function Home() {
  const [titleSection, setTitleSection] = useState('Nossos Produtos')

  return (
    <FavoriteListProvider>
      <S.HomeContainer>
        <BannerSection imageBanner={require('@assets/images/banner.jpg')} />
        <NewsSection />
        <ProductsCategories setTitleSection={setTitleSection} />
        <ProductsGrid title={titleSection} category={slugify(titleSection)} />
      </S.HomeContainer>
    </FavoriteListProvider>
  )
}
