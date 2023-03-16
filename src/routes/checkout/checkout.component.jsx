import { useCartContext } from '../../context/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.css';
import CheckoutBox from '../../components/checkout-box/checkout-box.component';

const Checkout = () => {
  const { cartItems, emptyCart, cartCount, cartTotal } = useCartContext();

  const cartItemElements = cartItems.map((item) => (
    <CheckoutItem
      key={item.id}
      item={item}
    />
  ));

  if (!cartItems.length) {
    return (
      <section>
        <h2 className='checkout__empty-cart'>Your cart is empty</h2>
      </section>
    );
  }

  return (
    <main className='page-100'>
      <section className='section section-center'>
        <CheckoutBox
          cartItems={cartItems}
          emptyCart={emptyCart}
          cartCount={cartCount}
          cartTotal={cartTotal}
        />
        <div className='checkout__products-container'>
          <h2 className='checkout__title'>Your Shopping Cart</h2>
          <hr />
          <div className='checkout__cart-items'>{cartItemElements}</div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
