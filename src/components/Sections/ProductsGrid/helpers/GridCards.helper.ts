const FULLHD_CARD = {
  cardWidth: 384,
  paddingWrapper: 116,
  paddingCard: 40,
}

const DESKTOP_CARD = {
  cardWidth: 288,
  paddingWrapper: 116,
  paddingCard: 32,
}

const TABLET_CARD = {
  cardWidth: 216,
  paddingWrapper: 80,
  paddingCard: 16,
}

const MOBILE_CARD = {
  cardWidth: 160,
  paddingWrapper: 64,
  paddingCard: 16,
}

/**
 * HANDLE RESIZE [Products Grid]
 * @param setLimitOfProducts
 * @param setProductsPage
 * @returns
 */
export const handleResize = (setLimitOfProducts: (value: number) => void, setProductsPage: (value: number) => void) => {
  const windowWidth = window.innerWidth

  const typeOfCard =
    windowWidth < 768 ? MOBILE_CARD : windowWidth < 1024 ? TABLET_CARD : windowWidth < 1440 ? DESKTOP_CARD : FULLHD_CARD

  const { cardWidth, paddingWrapper, paddingCard } = typeOfCard

  const newLimitOfProducts = Math.floor((windowWidth - paddingWrapper) / (cardWidth + paddingCard)) * 2
  setLimitOfProducts(newLimitOfProducts)
  setProductsPage(1)
}
