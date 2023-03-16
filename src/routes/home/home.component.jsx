import ProductCard from '../../components/product-card/product-card.component';

import './home.styles.css';

const Home = () => {
  return (
    <main className='home page-100'>
      <div className='home__image'></div>
      <section className='section-center'>
        <div className='home__row'>
          <ProductCard
            bigItem={true}
            id='12321341'
            title='Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)'
            price={11.96}
            rating={3}
            image='https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg'
          />
          <ProductCard
            bigItem={true}
            id='49538094'
            title='IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)'
            price={239}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg'
          />
        </div>

        <div className='home__row'>
          <ProductCard
            id='4903850'
            title='Stephen King: Shining Bestseller'
            price={14.5}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/61RMUSWvRVL.jpg'
          />
          <ProductCard
            id='23445930'
            title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric'
            price={98.99}
            rating={4}
            image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
          />
          <ProductCard
            id='3254354345'
            title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
            price={598.85}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
          />
        </div>

        <div className='home__row'>
          <ProductCard
            bigItem={true}
            id='90829332'
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={5}
            image='https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SL1500_.jpg'
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
