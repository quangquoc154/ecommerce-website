import { useSelector } from 'react-redux';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';
import CommonSection from '~/components/CommonSection/CommonSection';
import Input from '~/components/Input/Input';
import Wrapper from '~/components/Wrapper/Wrapper';

import './Checkout.scss';

function Checkout() {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Wrapper title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className=" fs-5 mb-4 fw-bold text-center">Billing Information</h6>
              <Form className="checkout-form">
                <FormGroup className="form-group">
                  <Input type="text" placeholder="Name" animation />
                </FormGroup>

                <FormGroup className="form-group">
                  <Input type="email" placeholder="Email" animation />
                </FormGroup>

                <FormGroup type="text" className="form-group">
                  <Input placeholder="Phone Number" animation />
                </FormGroup>

                <FormGroup type="text" className="form-group">
                  <Input placeholder="Address" animation />
                </FormGroup>

                <FormGroup type="text" className="form-group">
                  <Input placeholder="City" animation />
                </FormGroup>

                <FormGroup type="text" className="form-group">
                  <Input placeholder="Country" animation />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <h6 className=" fs-5 mb-4 fw-bold text-center">Your Order</h6>
              <div className="checkout-cart">
                <h6>
                  Total quantity: <span>{totalQty}</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br /> Free shipping
                  </span>
                  <span>$0</span>
                </h6>
                <h4>
                  Total cost: <span>${totalAmount}</span>
                </h4>
                <button className="buy-btn auth-btn w-100">Place an order</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Wrapper>
  );
}

export default Checkout;
