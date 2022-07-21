import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../context/cart.context'

import { UserContext } from '../../context/user.context'


import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import Button from '../../components/button/button.component';

import './checkout.styles.css'


const Checkout = () => {
    const [giftCheckbox, setGiftCheckbox] = useState(false)

    const [sendOrder, setSendOrder] = useState(false)

    useEffect(() => {
        document.title = 'Cart'
    }, [])


    const { cartItems, emptyCart, cartCount, cartTotal } = useContext(CartContext)

    const { currentUser } = useContext(UserContext)

    const handleChange = ({ target }) => {
        const { checked } = target
        setGiftCheckbox(checked)
    }

    
    
    

    const handleCheckout = () => {
        if (cartItems.length && currentUser) {

            setSendOrder(true)
            setTimeout(() => {
                setSendOrder(false)
                emptyCart()
                if (giftCheckbox) {
                    alert('Order containing a gift sent')
                } else {
    
                    alert('Order sent')
                }
            }, 3000)

        } else if (!currentUser && !cartItems.length) {
            alert('User not logged and cart empty')
        } else if (!currentUser) {
            alert('User not logged')
        } else {
            alert('Cart empty')
        }
    }
    
    const cartItemElements = cartItems.map(item => <CheckoutItem key={item.id} item={item} />)

    return (
        <div className='checkout'>
            <div className='checkout__box'>
                <div className='checkout__ad'>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
                </div>
                <div className='checkout__info'>
                    <p>Subtotal ({cartCount} {cartCount === 1 ? 'item' : 'items'}): {cartTotal.toFixed(2)} $</p>
                    <div className='checkout__gift'>
                        <input
                            type="checkbox"
                            checked={giftCheckbox}
                            onChange={handleChange}
                        />
                        <p>This order contains a gift</p>
                    </div>
                    <Button onClick={handleCheckout}>
                        {sendOrder ? 'Loading...' : 'Proceed to Checkout'}
                    </Button>
                </div>
            </div>
            <div className='checkout__products-container'>
                <h2 className='checkout__title'>Your Shopping Cart</h2>
                {
                    !cartCount
                        ? <p>Your cart is empty</p>
                        : (
                            cartItemElements
                        )
                }
            </div>
        </div>
    )
}

export default Checkout