import { Container, Row } from 'reactstrap';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

import NavItem from './NavItem';

import logo from '~/assets/images/eco-logo.png';
import user_icon from '~/assets/images/user-icon.png';
import './Header.scss';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '~/hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '~/firebase.config';
import { toast } from 'react-toastify';

function Header() {
  // const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const profileActionRef = useRef(null);

  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success('Logged out');
        navigate('/');
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

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

  const toggleProfileActions = () => {
    profileActionRef.current.classList.toggle('show-profile-actions');
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
              <div className="profile">
                <motion.img
                  whileTap={{
                    scale: 1.2,
                  }}
                  src={currentUser ? currentUser.photoURL : user_icon}
                  alt=""
                  onClick={toggleProfileActions}
                />
                <div className="profile-actions" ref={profileActionRef} onClick={toggleProfileActions}>
                  {currentUser ? (
                    <span onClick={logout}>Logout</span>
                  ) : (
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <Link to="/signup">Sign up</Link>
                      <Link to="/login">Login</Link>
                      <Link to="/dashboard">Dashboard</Link>
                    </div>
                  )}
                </div>
              </div>

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
