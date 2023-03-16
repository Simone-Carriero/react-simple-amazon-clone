import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import './header-buttons.styles.css';

const HeaderButtons = ({ isSidebar }) => {
  const { currentUser, toggleSidebar } = useUserContext();

  return (
    <nav className='nav'>
      {currentUser ? (
        <div
          className='nav__item nav__item-signOut'
          onClick={
            isSidebar
              ? () => {
                  signOutUser();
                  toggleSidebar();
                }
              : signOutUser
          }>
          <span className='nav__itemLineOne'>
            Hello {currentUser.providerData[0].email}
          </span>
          <span className='nav__itemLineTwo'>Sign Out</span>
        </div>
      ) : (
        <Link
          to='/authentication'
          onClick={isSidebar ? toggleSidebar : null}>
          <div className='nav__item'>
            <span className='nav__itemLineOne'>Hello Guest</span>
            <span className='nav__itemLineTwo'>Sign In</span>
          </div>
        </Link>
      )}

      <div
        className='nav__item'
        onClick={isSidebar ? toggleSidebar : null}>
        <span className='nav__itemLineOne'>Your</span>
        <span className='nav__itemLineTwo'>Shop</span>
      </div>

      <Link
        to='/checkout'
        onClick={isSidebar ? toggleSidebar : null}>
        <CartIcon />
      </Link>
    </nav>
  );
};

export default HeaderButtons;
