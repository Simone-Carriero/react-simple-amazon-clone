import { useContext } from 'react';
import { CartContext } from '../../context/cart.context'

import Button from '../../components/button/button.component'

import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import './checkout.styles.css'

const CheckoutItem = ({item}) => {
    const { removeItemFromCart, addToCart, clearItemFromCart } = useContext(CartContext)
    const { title, price, rating, image, quantity } = item
    const totalStars = 5;
    
    const addItemHandler = () => addToCart(item);
    const removeItemHandler = () => removeItemFromCart(item);
    const clearItemHandler = () => clearItemFromCart(item);

    return (
        <div className="checkout-card">
            <div className='checkout-card__image-container'>
                <img src={image} alt={`${title}`} className="checkout-card__image" />
            </div>
            <div className='checkout-card__product-info'>
                <p>{title}</p>
                <p className='checkout-card__price'>
                    <small>$</small>
                    {price}
                </p>
                <span className='checkout-card__quantity'>
                    <div className='symbol' onClick={removeItemHandler}
                    aria-label='remove item quantity'
                    >
                        &#x2212;
                    </div>
                    <span className='value'>{quantity}</span>
                    <div className='symbol' onClick={addItemHandler}
                    aria-label='add item quantity'
                    >
                        &#x2b;
                    </div>
                </span>
                <div>
                    <Box>
                        {[...new Array(totalStars)].map((arr, index) => {
                            return index < rating ?
                                <StarIcon fontSize="large"
                                    className="product-card__filled-star"
                                /> : <StarBorderIcon fontSize="large" />;
                        })}
                    </Box>
                </div>
                <Button className="checkout-card__button"
                onClick={clearItemHandler}
                >Remove from Cart</Button>
            </div>
        </div>
    )
}

export default CheckoutItem






        