import { Link } from 'react-router-dom';
import HeaderButtons from '../../components/header-buttons/header-buttons.component';

import StorefrontIcon from '@mui/icons-material/Storefront';

import SearchIcon from '@mui/icons-material/Search';

import MenuIcon from '@mui/icons-material/Menu';

import './header.styles.css';
import { useUserContext } from '../../context/user.context';
import Button from '../button/button.component';

const Header = () => {
  const { toggleSidebar } = useUserContext();
  return (
    <header>
      <div className='header__center'>
        <div className='header__mobile'>
          <Link to='/'>
            <div className='header__logoContainer'>
              <StorefrontIcon
                sx={{ fontSize: 30 }}
                className='header__logo'
              />
              <h2 className='header__logoTitle'>eSHOP</h2>
            </div>
          </Link>
          <Button
            className='header__toggle'
            onClick={toggleSidebar}>
            <MenuIcon fontSize='large' />
          </Button>
        </div>

        <div className='header__searchContainer'>
          <div className='header__search'>
            <input
              type='search'
              className='header__searchInput'
            />
            <Button className='header__searchIconContainer'>
              <SearchIcon className='header__searchIcon' />
            </Button>
          </div>
        </div>

        <HeaderButtons />
      </div>
    </header>
  );
};

export default Header;
