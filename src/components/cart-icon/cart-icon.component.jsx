import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import "./cart-icon.styles.css"

const CartIcon = () => {
    
    return (
        <div className="cart">
            <ShoppingBasketIcon fontSize="large" />
            <span className="cart__count">
                0
            </span>
        </div>
    )
}

export default CartIcon