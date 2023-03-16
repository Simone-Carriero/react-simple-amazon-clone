import Button from '../../components/button/button.component';

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import './checkout.styles.css';
import { useCartContext } from '../../context/cart.context';

const CheckoutItem = ({ item }) => {
  const { removeItemFromCart, addToCart, clearItemFromCart } = useCartContext();
  const { title, price, rating, image, quantity } = item;
  const totalStars = 5;

  const addItemHandler = () => addToCart(item);
  const removeItemHandler = () => removeItemFromCart(item);
  const clearItemHandler = () => clearItemFromCart(item);

  return (
    <article className='checkout-card'>
      <img
        src={image}
        alt={`${title}`}
        className='checkout-card__image'
      />

      <div className='checkout-card__info'>
        <h5 className='checkout-card__title'>{title}</h5>
        <h5 className='checkout-card__price'>
          <small>$</small>
          {price}
        </h5>
        <div className='checkout-card__quantity'>
          <div
            className='symbol'
            onClick={removeItemHandler}
            aria-label='remove item quantity'>
            &#x2212;
          </div>
          <h4 className='value'>{quantity}</h4>
          <div
            className='symbol'
            onClick={addItemHandler}
            aria-label='add item quantity'>
            &#x2b;
          </div>
        </div>
        <div>
          <div>
            {[...new Array(totalStars)].map((arr, index) => {
              return index < rating ? (
                <StarIcon className='product-card__filled-star' />
              ) : (
                <StarBorderIcon />
              );
            })}
          </div>
        </div>
        <Button
          className='checkout-card__button'
          onClick={clearItemHandler}>
          Remove from Cart
        </Button>
      </div>
    </article>
  );
};

export default CheckoutItem;
