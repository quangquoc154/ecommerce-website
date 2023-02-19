import { NavLink } from 'react-router-dom';

const user__nav = [
  {
    path: '/',
    display: 'Home',
  },
  {
    path: '/shop',
    display: 'Shop',
  },
  {
    path: '/cart',
    display: 'Cart',
  },
];

const admin__nav = [
  {
    path: '/dashboard/add-product',
    display: 'Dashboard',
  },
  {
    path: '/dashboard/all-products',
    display: 'All Products',
  },
  {
    path: '/dashboard/orders',
    display: 'Orders',
  },
  {
    path: '/dashboard/users',
    display: 'Users',
  },
];

function NavItem({ admin = false }) {
  return (
    <>
      {admin
        ? admin__nav.map((item, index) => (
            <li className="admin-menu-item" key={index}>
              <NavLink to={item.path} className={(navClass) => (navClass.isActive ? 'nav-active' : '')}>
                {item.display}
              </NavLink>
            </li>
          ))
        : user__nav.map((item, index) => (
            <li className="user-nav-item" key={index}>
              <NavLink to={item.path} className={(navClass) => (navClass.isActive ? 'nav-active' : '')}>
                {item.display}
              </NavLink>
            </li>
          ))}
    </>
  );
}

export default NavItem;
