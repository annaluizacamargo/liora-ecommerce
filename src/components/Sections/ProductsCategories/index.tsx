'use client'

import Image from 'next/image'
import * as S from './styles'

/**
 * NEWS SECTION
 * @param setTitleSection
 * @returns
 */
export default function ProductsCategories({
  setTitleSection,
}: Readonly<{ setTitleSection: (title: string) => void }>) {
  return (
    <S.CategoriesContainer>
      <h3>Nossas principais categorias</h3>

      <ul>
        <li onClick={() => setTitleSection('Camisetas')}>
          <Image src={require('@assets/images/t-shirt-section.png')} alt="Roupas" width={164} height={164} />
          <p>Camisetas</p>
        </li>

        <li onClick={() => setTitleSection('Calças')}>
          <Image src={require('@assets/images/pants-section.png')} alt="Bolsas" width={164} height={164} />
          <p>Calças</p>
        </li>

        <li onClick={() => setTitleSection('Tênis')}>
          <Image src={require('@assets/images/shoes-section.png')} alt="Tênis" width={164} height={164} />
          <p>Tênis</p>
        </li>
      </ul>
    </S.CategoriesContainer>
  )
}
