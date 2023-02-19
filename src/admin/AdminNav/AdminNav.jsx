import { NavLink } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import NavItem from '~/components/Header/NavItem';
import useAuth from '~/hooks/useAuth';

import user_icon from '~/assets/images/user-icon.png';

import './AdminNav.scss';

function AdminNav() {
  const { currentUser } = useAuth();
  return (
    <>
      <header className="admin-header">
        <div className="admin-nav-top">
          <Container>
            <div className="admin-nav-wrapper">
              <div className="logo">
                <h2>QQMart</h2>
              </div>

              <div className="search-box">
                <input type="text" placeholder="Search..." />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>

              <div className="admin-nav-top-right">
                <span>
                  <i className="ri-notification-2-line"></i>
                </span>
                <span>
                  <i className="ri-settings-2-line"></i>
                </span>
                <img src={currentUser ? currentUser.photoURL : user_icon} alt="" />
              </div>
            </div>
          </Container>
        </div>
      </header>

      <section className="admin-menu p-0">
        <Container>
          <Row>
            <div className="admin-navigation">
              <ul className="admin-menu-list">
                <NavItem admin />
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AdminNav;
