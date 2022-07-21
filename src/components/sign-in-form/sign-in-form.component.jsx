import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../context/user.context';

import FormInput from '../form-input/form-input.component';

import { signInAuthUserWithEmailAndPassword, createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';


import Button from '../../components/button/button.component'


import './sign-in-form.styles.css'




const SignInForm = () => {
    const defaultFormFields = {
        email: '',
        password: ''
    }
    const [formFields, setFormFields] = useState(defaultFormFields)

    const [error, setError] = useState('')

    const { email, password } = formFields

    const emptyInput = email === '' || password === ''

    const navigate = useNavigate();

    const { currentUser } = useContext(UserContext)

    useEffect(() => {
        const user = currentUser
        if (currentUser) {
            navigate('/', { replace: true });
        }
    }, [currentUser, navigate]);



    const resetFormFields = () => setFormFields(defaultFormFields)

    const handleChange = ({ target }) => {
        const { name, value } = target

        setFormFields({ ...formFields, [name]: value })
    }

    const signIn = async (event) => {
        event.preventDefault();

        if (!emptyInput) {
                    try {
                        await signInAuthUserWithEmailAndPassword(email, password)
                        resetFormFields()
                        

                    } catch (error) {
                        switch (error.code) {
                            case 'auth/wrong-password':
                                setError('Incorrect password for email')
                                break;
                            case 'auth/user-not-found':
                                setError('No user associated with this email')
                                break;
                            default:
                                console.log(error)
                        }
                    }
            } else {
                setError('Please fill out these fields')
            }
        }

    const register = async (event) => {
        event.preventDefault();

        if (!emptyInput) {

            try {
                await createAuthUserWithEmailAndPassword(
                    email,
                    password
                );

                resetFormFields();
                

            } catch (error) {
                if (error.code === 'auth/email-already-in-use') {
                    setError('Cannot create user, email already in use');
                } else {
                    setError('User creation encountered an error');
                }
            }
        } else {
            setError('Please fill out these fields')
        }
    };



        return (
            <div className='form-container'>
                <h1>Sign-in</h1>
                {error && <p className='error'>{error}</p>}
                <form>

                    
                        <FormInput
                            type="email" 
                            value={email}
                            placeholder="example@hotmail.com"
                            id='E-mail'
                            name='email'
                            label='E-mail'
                            onChange={handleChange}
                        />
                   

                        <FormInput
                            type="password"
                            value={password}
                            placeholder='*********'
                            id='Password'
                            name='password'
                            label='Password'
                            onChange={handleChange}
                        />
                    

                    <Button
                        onClick={signIn}
                    >Sign In</Button>
                    <p>By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                    <Button className="create-account-button"
                        onClick={register}
                    >Create your eShop Account</Button>
                </form>
            </div>
        )
    }

export default SignInForm