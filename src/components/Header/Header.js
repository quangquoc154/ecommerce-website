import { Container, Row } from 'reactstrap';
import './Header.scss';

import logo from '../../assets/images/eco-logo.png';
import user_icon from '../../assets/images/user-icon.png';
import NavItem from './NavItem';
import { motion } from 'framer-motion';

function Header() {
    return (
        <header className="header">
            <Container>
                <Row>
                    <div className="nav-wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <h1>QQmart</h1>
                        </div>

                        <div className="navigation">
                            <ul className="menu">
                                <NavItem />
                            </ul>
                        </div>

                        <div className="nav-icons">
                            <span className="fav-icon">
                                <i class="ri-heart-line"></i>
                                <span className="badge">1</span>
                            </span>
                            <span className="cart-icon">
                                <i class="ri-shopping-cart-line"></i>
                                <span className="badge">1</span>
                            </span>
                            <span>
                                <motion.img whileTap={{ scale: 1.2 }} src={user_icon} alt="" />
                            </span>
                        </div>

                        {/* Menu mobile */}
                        <div className="mobile-menu">
                            <i class="ri-menu-line"></i>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
