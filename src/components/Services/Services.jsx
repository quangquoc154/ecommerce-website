import { Col, Container, Row } from 'reactstrap';
import serviceData from '~/assets/data/serviceData';
import { motion } from 'framer-motion';
import './Services.scss';

function Services() {
    return (
        <section className="services">
            <Container>
                <Row>
                    {serviceData.map((item, index) => (
                        <Col lg="3" md="4" key={index}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="service-item"
                                style={{ backgroundColor: `${item.bg}` }}
                            >
                                <span className="service-icon">
                                    <i className={item.icon}></i>
                                </span>
                                <div>
                                    <h3 className="service-title">{item.title}</h3>
                                    {/* <h3 className="service-desc">{item.subtitle}</h3> */}
                                </div>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Services;
