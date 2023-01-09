import { Col, Container, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import Wrapper from '~/components/Wrapper/Wrapper';
import CommonSection from '~/components/CommonSection/CommonSection';

import './Cart.scss';
import { cartActions } from '~/redux/slices/cartSlice';
import { Link } from 'react-router-dom';

function Cart() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    return (
        <Wrapper title="Cart">
            <CommonSection title="Shopping Cart"></CommonSection>
            <section>
                <Container>
                    <Row>
                        <Col lg="9" className="d-flex justify-content-center align-items-center">
                            {cartItems.length === 0 ? (
                                <h2 className="fs-4 text-center">No item added to the cart</h2>
                            ) : (
                                <table className="table bordered">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Title</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {cartItems.map((item) => (
                                            <Tr item={item} key={item.id} />
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </Col>
                        <Col lg="3">
                            <div>
                                <h6 className="d-flex align-items-center justify-content-between">
                                    Subtotal <span className="fs-4 fw-bold">${totalAmount}</span>
                                </h6>
                            </div>
                            <div>
                                <button className="buy-btn w-100">
                                    <Link to="/checkout">Checkout</Link>
                                </button>
                                <button className="buy-btn w-100 mt-3">
                                    <Link to="/shop">Continue Shopping</Link>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Wrapper>
    );
}

const Tr = ({ item }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(cartActions.deleteItem(item.id));
    };

    return (
        <tr>
            <td>
                <img src={item.imgUrl} alt="" />
            </td>
            <td>{item.productName}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>
                <motion.i whileTap={{ scale: 1.2 }} className="ri-delete-bin-5-line" onClick={handleDelete}></motion.i>
            </td>
        </tr>
    );
};

export default Cart;
