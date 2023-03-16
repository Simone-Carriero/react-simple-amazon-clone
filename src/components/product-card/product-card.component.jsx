import { useCartContext } from '../../context/cart.context';

import Button from '../button/button.component';

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import './product-card.styles.css';

const ProductCard = (props) => {
  const { addToCart } = useCartContext();
  const { bigItem, title, price, rating, image } = props;
  const totalStars = 5;

  const addItemToCart = () => addToCart(props);

  return (
    <article className='product-card'>
      <div className='product-card__info'>
        <h5 className='product-card__title'>{title}</h5>
        <h5 className='product-card__price'>
          <small>$</small>
          <strong>{price.toFixed(2)}</strong>
        </h5>
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
      </div>

      <img
        src={image}
        alt={`${title}`}
        className={`product-card__image ${bigItem ? 'bigItem' : ''}`}
      />

      <Button
        className='product-card__button'
        onClick={addItemToCart}>
        Add to cart
      </Button>
    </article>
  );
};

export default ProductCard;
