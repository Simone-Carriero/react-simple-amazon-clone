import { Outlet } from 'react-router-dom';

import Sidebar from '../../components/sidebar/sidebar.component';
import Header from '../../components/header/header.component';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
