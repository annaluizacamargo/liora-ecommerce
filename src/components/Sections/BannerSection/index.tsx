'use client'

import Image from 'next/image'
import * as S from './styles'

/**
 * BANNER SECTION
 * @param imageBanner
 * @returns
 */
export default function BannerSection({ imageBanner }: Readonly<{ imageBanner: string }>) {
  return (
    <S.Banner>
      <Image src={imageBanner} alt="Banner" width={1440} height={486} />
    </S.Banner>
  )
}
