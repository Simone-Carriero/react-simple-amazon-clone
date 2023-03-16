import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/user.context';

import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import './authentication.styles.css';

const Authentication = () => {
  const { currentUser } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  return (
    <main className='page-100 container'>
      <section className='section section-center'>
        <SignInForm />
      </section>
    </main>
  );
};

export default Authentication;
