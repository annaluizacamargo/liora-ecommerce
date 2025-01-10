import userIcon from '@assets/icons/user-icon.svg'
import favoriteIcon from '@assets/icons/favorite-icon.svg'
import cartIcon from '@assets/icons/cart-icon.svg'

/**
 * User options for the header [the right side]
 */
export const userOptions = [
  {
    name: 'user',
    icon: userIcon,
    alt: 'Ícone de usuário',
    width: 24,
    height: 24,
  },
  {
    name: 'favorite',
    icon: favoriteIcon,
    alt: 'Ícone de favoritos',
    width: 24,
    height: 24,
  },
  {
    name: 'cart',
    icon: cartIcon,
    alt: 'Ícone de carrinho',
    width: 24,
    height: 24,
    link: '/cart',
  },
]

/**
 * Navigation items for the header [the bottom part]
 */
export const navItems = ['Novidades', 'Todos os Produtos', 'Feminino', 'Masculino', 'Calçados']
