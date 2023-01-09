import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Services from '~/components/Services/Services';
import ProductList from '~/components/ProductList/ProductList';
import Clock from '~/components/Clock/Clock';
import Wrapper from '~/components/Wrapper/Wrapper';

import products from '~/assets/data/products';
import heroImg from '~/assets/images/hero-img.png';
import counterImg from '~/assets/images/counter-timer-img.png';
import './Home.scss';

function Home() {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter((item) => item.category === 'chair');
    const filteredBestSalesProducts = products.filter((item) => item.category === 'sofa');
    const filteredMobileProducts = products.filter((item) => item.category === 'mobile');
    const filteredWirelessProducts = products.filter((item) => item.category === 'wireless');
    const filteredPopularProducts = products.filter((item) => item.category === 'watch');

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  // console.log(trendingProduct);

  return (
    <Wrapper title="Home">
      <section className="hero-section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero-content">
                <p className="hero-subtitle">Trending product in {year}</p>
                <h2 className="hero-title">Make Your Interior More Minimalistic & Modern</h2>
                <p className="hero-desc">
                  Make Your Interior More Minimalistic & ModernMake Your Interior More Minimalistic & ModernMake Your
                  Interior More Minimalistic & ModernMake Your Interior More Minimalistic & ModernMake Your Interior
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy-btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero-img">
                <img src={heroImg} alt=""></img>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Service */}
      <Services />

      {/* Trending Product */}
      <section className="trending-product">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section-title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      {/* Best sale */}
      <section className="best-sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section-title">Best sale</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      {/* Timer count */}
      <section className="timer-count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count-down-col">
              <div className="clock-top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality ArmChair</h3>
              </div>
              <Clock />

              <motion.button whileTap={{ scale: 1.2 }} className="buy-btn store-btn">
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="12" className="text-end counter-img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* New arrivals */}
      <section className="new-arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section-title">New Arrival</h2>
            </Col>
            <ProductList data={mobileProducts} />
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      {/* Popular category */}
      <section className="popular-category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section-title">Popular in Category</h2>
            </Col>
            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Wrapper>
  );
}

export default Home;
