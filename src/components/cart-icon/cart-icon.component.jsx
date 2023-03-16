import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useCartContext } from '../../context/cart.context';

import './cart-icon.styles.css';

const CartIcon = () => {
  const { cartCount } = useCartContext();
  return (
    <div className='cart'>
      <ShoppingBasketIcon sx={{ fontSize: 30 }} />
      <span className='cart__count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
