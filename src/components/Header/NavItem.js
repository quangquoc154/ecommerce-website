import { NavLink } from 'react-router-dom';

const nav_links = [
    {
        path: '/home',
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

function NavItem() {
    return (
        <>
            {nav_links.map((item, index) => (
                <li className="nav-item" key={index}>
                    <NavLink to={item.path} className={(navClass) => (navClass.isActive ? 'nav-active' : '')}>
                        {item.display}
                    </NavLink>
                </li>
            ))}
        </>
    );
}

export default NavItem;
