import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="6" className="mb-4">
            <div className="logo">
              <div>
                <h1 className="text-white">QQmart</h1>
              </div>
            </div>
            <p className="footer-text mt-4">
              The leading e-commerce platform in Southeast Asia. provides consumers an easy, secure, fast, and enjoyable
              online shopping experience
            </p>
          </Col>

          <Col lg="3" md="3" className="mb-4">
            <div className="footer-quick-links">
              <h4 className="footer-links-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Laptop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Tablet</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smartphone</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Headphone</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2" md="3" className="mb-4">
            <div className="footer-quick-links">
              <div className="footer-links-title">Useful Links</div>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4">
            <div className="footer-quick-links">
              <h4 className="footer-links-title">Contact</h4>
              <ListGroup className="footer-contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p>254 Nguyen Van Linh, Da Nang, Viet Nam</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>+84345355938</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>qqmart@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          {/* <Col lg="3">
                        <h4 className="footer-links-title">Get the app</h4>
                        <div className="footer-download d-flex align-items-center mt-2">
                            <div className="footer-download-qr">
                                <img src={qrImg} alt="" />
                            </div>
                            <div className="footer-download-app ps-3">
                                <Link to="/" className="mb-2">
                                    <img src={downImg1} alt="App Store" />
                                </Link>
                                <Link to="/">
                                    <img src={downImg2} alt="Google Play" />
                                </Link>
                            </div>
                        </div>
                    </Col> */}

          <Col lg="12">
            <p className="footer-copyright">Copyright 2022 QQMart. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
