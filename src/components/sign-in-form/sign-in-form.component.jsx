import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';

import {
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import Button from '../../components/button/button.component';

import './sign-in-form.styles.css';

const SignInForm = () => {
  const defaultFormFields = {
    email: '',
    password: '',
  };
  const [formFields, setFormFields] = useState(defaultFormFields);

  const [error, setError] = useState('');

  const [shouldRedirect, setShouldRedirect] = useState(false);

  const { email, password } = formFields;

  const navigate = useNavigate();

  useEffect(() => {
    if (shouldRedirect) {
      navigate('/');
    }
  }, [shouldRedirect, navigate]);

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormFields({ ...formFields, [name]: value });
  };

  const signIn = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      setShouldRedirect(true);
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          setError('Incorrect password for email');
          break;
        case 'auth/user-not-found':
          setError('No user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const register = async (event) => {
    event.preventDefault();

    try {
      await createAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
      setShouldRedirect(true);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('Cannot create user, email already in use');
      } else {
        setError('User creation encountered an error');
      }
    }
  };

  return (
    <form className='form-container'>
      <h1>Sign-in</h1>
      {error && <p className='error'>{error}</p>}

      <FormInput
        type='email'
        value={email}
        placeholder='example@hotmail.com'
        id='E-mail'
        name='email'
        label='E-mail'
        onChange={handleChange}
      />

      <FormInput
        type='password'
        value={password}
        placeholder='*********'
        id='Password'
        name='password'
        label='Password'
        onChange={handleChange}
      />

      <Button onClick={signIn}>Sign In</Button>
      <p>
        By signing-in you agree to the eShop Website Conditions of Use & Sale.
        Please see our Privacy Notice, our Cookies Notice and our Interest-Based
        Ads Notice.
      </p>
      <Button
        className='create-account-button'
        onClick={register}>
        Create your eShop Account
      </Button>
    </form>
  );
};

export default SignInForm;
