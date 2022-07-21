import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import "./cart-icon.styles.css"

const CartIcon = () => {
    const { cartCount } = useContext(CartContext)
    return (
        <div className="cart">
            <ShoppingBasketIcon fontSize="large" />
            <span className="cart__count">
                {cartCount}
            </span>
        </div>
    )
}

export default CartIcon