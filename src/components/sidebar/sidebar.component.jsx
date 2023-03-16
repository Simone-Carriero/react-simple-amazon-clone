import { useUserContext } from '../../context/user.context';
import HeaderButtons from '../header-buttons/header-buttons.component';
import CloseIcon from '@mui/icons-material/Close';
import StorefrontIcon from '@mui/icons-material/Storefront';
import './sidebar.styles.css';
import { Link } from 'react-router-dom';
import Button from '../button/button.component';

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useUserContext();
  return (
    <div>
      <aside
        className={`${isSidebarOpen ? 'sidebar sidebar--show' : 'sidebar'}`}>
        <div className='sidebar__header'>
          <Link
            to='/'
            onClick={toggleSidebar}
            className='header__logoContainer'>
            <StorefrontIcon
              fontSize='large'
              className='header__logo'
            />
            <h2 className='header__logoTitle'>eSHOP</h2>
          </Link>
          <Button
            className='sidebar__close-btn'
            onClick={toggleSidebar}>
            <CloseIcon sx={{ fontSize: 30 }} />
          </Button>
        </div>
        <HeaderButtons isSidebar={true} />
      </aside>
    </div>
  );
};

export default Sidebar;
