import { useState } from 'react';
import { useUserContext } from '../../context/user.context';
import Button from '../button/button.component';
import './checkout-box.styles.css';

const CheckoutBox = ({ cartItems, emptyCart, cartCount, cartTotal }) => {
  const [giftCheckbox, setGiftCheckbox] = useState(false);

  const [sendOrder, setSendOrder] = useState(false);

  const { currentUser } = useUserContext();

  const handleChange = ({ target }) => {
    const { checked } = target;
    setGiftCheckbox(checked);
  };

  const handleCheckout = () => {
    if (cartItems.length && currentUser) {
      setSendOrder(true);
      setTimeout(() => {
        setSendOrder(false);
        emptyCart();
        if (giftCheckbox) {
          alert('Order containing a gift sent');
        } else {
          alert('Order sent');
        }
      }, 3000);
    } else if (!currentUser && !cartItems.length) {
      alert('User not logged and cart empty');
    } else if (!currentUser) {
      alert('User not logged');
    } else {
      alert('Cart empty');
    }
  };

  return (
    <div className='checkout__box'>
      <img
        src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
        alt=''
        className='checkout__ad'
      />

      <div className='checkout__info'>
        <p>
          Subtotal ({cartCount} {cartCount === 1 ? 'item' : 'items'}):{' '}
          {cartTotal.toFixed(2)} $
        </p>
        <div className='checkout__gift'>
          <input
            type='checkbox'
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
  );
};

export default CheckoutBox;
