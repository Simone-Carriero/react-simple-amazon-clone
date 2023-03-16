import { Link } from 'react-router-dom';
import './error-page.styles.css';

const ErrorPage = () => {
  return (
    <main className='page-100'>
      <section className='section section-center error-page'>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link
          to='/'
          className='link'>
          Back Home
        </Link>
      </section>
    </main>
  );
};

export default ErrorPage;
