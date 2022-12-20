import { Col, Container, Row } from 'reactstrap';
import './Home.scss';
import heroImg from '../../assets/images/hero-img.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '~/components/Services/Services';

function Home() {
    const year = new Date().getFullYear();

    return (
        <>
            <section className="hero-section">
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="hero-content">
                                <p className="hero-subtitle">Trending product in {year}</p>
                                <h2 className="hero-title">Make Your Interior More Minimalistic & Modern</h2>
                                <p className="hero-desc">
                                    Make Your Interior More Minimalistic & ModernMake Your Interior More Minimalistic &
                                    ModernMake Your Interior More Minimalistic & ModernMake Your Interior More
                                    Minimalistic & ModernMake Your Interior
                                </p>
                                <motion.button whileTap={{ scale: 1.2 }} className="buy-btn">
                                    <Link to="/shop">SHOP NOW</Link>
                                </motion.button>
                            </div>
                        </Col>

                        <Col lg="6" md="6">
                            <div className="hero-img">
                                <img src={heroImg}></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Services />
        </>
    );
}

export default Home;
