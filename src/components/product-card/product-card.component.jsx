import { useContext } from 'react';

import { CartContext } from '../../context/cart.context'

import Button from "../button/button.component";

import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import "./product-card.styles.css"

const ProductCard = (props) => {
    const { addToCart } = useContext(CartContext)
    const { title, price, rating, image } = props
    const totalStars = 5;
    

    const addItemToCart = () => addToCart(props)

    return (
        <div className="product-card">
            <div className="product-card__info">
                <p>{ title }</p>
                <p>
                    <small>$</small>
                    <strong>{ price.toFixed(2) }</strong>
                </p>
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
            
            </div>
            

            <img src={image} alt={`${title}`} className="product-card__image" />

            <Button className="product-card__button"
            onClick={addItemToCart}
            >
                Add to cart
            </Button>
        </div>
    )
}

export default ProductCard