/** ****************************************
 * Project: react-redux-group-project
 * File: Layout.js
 * Created: 4/24/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import { Outlet } from 'react-router-dom';
import NavBar from './Navbar';

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
export default Layout;
