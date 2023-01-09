import { Container, Row } from 'reactstrap';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

import NavItem from './NavItem';

import logo from '~/assets/images/eco-logo.png';
import user_icon from '~/assets/images/user-icon.png';
import './Header.scss';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  // const headerRef = useRef(null);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const menuRef = useRef(null);
  const navigate = useNavigate();

  // const stickyHeaderFunc = () => {
  //     window.addEventListener('scroll', () => {
  //         if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  //             headerRef.current.classList.add('sticky-header');
  //         } else {
  //             headerRef.current.classList.remove('sticky-header');
  //         }
  //     });
  // };

  // useEffect(() => {
  //     stickyHeaderFunc();

  //     return () => window.removeEventListener('scroll', stickyHeaderFunc);
  // });

  const menuToggle = () => {
    menuRef.current.classList.toggle('active-menu');
  };

  const navigateToCart = () => {
    navigate('/cart');
  };

  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav-wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>QQmart</h1>
              </div>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                <NavItem />
              </ul>
            </div>

            <div className="nav-icons">
              <span className="fav-icon">
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart-icon" onClick={navigateToCart}>
                <i className="ri-shopping-cart-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <span>
                <motion.img
                  whileTap={{
                    scale: 1.2,
                  }}
                  src={user_icon}
                  alt=""
                />
              </span>

              {/* Menu mobile */}
              <div className="mobile-menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
