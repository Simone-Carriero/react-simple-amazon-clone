import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user.context';

import SignInForm from '../../components/sign-in-form/sign-in-form.component'

import StorefrontIcon from '@mui/icons-material/Storefront';

import './authentication.styles.css'

const Authentication = () => {
    const {currentUser} = useContext(UserContext)
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            navigate('/');
        }
    }, [currentUser, navigate])

    useEffect(() => {
        document.title = 'Login'
    }, [])
    
    return (

        <div className='container'>
            <div className='logo-container'>
                <StorefrontIcon
                    sx={{ fontSize: 35 }}
                    className='logo-container__logo'
                />
                <h2>eSHOP</h2>
            </div>
            <SignInForm />
        </div>
        
    )
}

export default Authentication