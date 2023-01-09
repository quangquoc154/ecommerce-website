import { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { cartActions } from '~/redux/slices/cartSlice';
import { toast } from 'react-toastify';

import Wrapper from '~/components/Wrapper/Wrapper';
import ProductList from '~/components/ProductList/ProductList';

import products from '~/assets/data/products';
import './ProductDetail.scss';

function ProductDetail() {
  const [tab, setTab] = useState('desc');
  const reviewUser = useRef('');
  const reviewMessage = useRef('');

  const dispatch = useDispatch();

  const [rating, setRating] = useState();

  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const { imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } = product;

  const recommendedProducts = products.filter((item) => item.category === category);

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMessage.current.value;

    const review = {
      userName: reviewUserName,
      message: reviewUserMsg,
      rating,
    };

    console.log(review);
    toast.success('Review submitted');
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      }),
    );

    toast.success('Product added successfully');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Wrapper title={productName}>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product-detail">
                <h2>{productName}</h2>
                <div className="product-rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-half-s-line"></i>
                    </span>
                  </div>

                  <p>
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>

                <div className="d-flex align-items-center gap-5">
                  <span className="product-price">${price}</span>
                  <span>Category: {category}</span>
                </div>
                <p className="mt-3">{shortDesc}</p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy-btn" onClick={addToCart}>
                  Add To Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab-wrapper d-flex align-items-center gap-5">
                <h6 className={`${tab === 'desc' && 'active-tab'}`} onClick={() => setTab('desc')}>
                  Description
                </h6>
                <h6 className={`${tab === 'rev' && 'active-tab'}`} onClick={() => setTab('rev')}>
                  Reviews ({reviews.length})
                </h6>
              </div>

              {tab === 'desc' ? (
                <div className="tab-content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product-review mt-5">
                  <div className="review-wrapper">
                    <ul className="review-list">
                      {reviews.map((item, index) => (
                        <li className="review-item mb-4" key={index}>
                          <h6>Quang Quoc</h6>
                          <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="review-form">
                      <h4>Leave your review</h4>
                      <form action="" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input type="text" placeholder="Enter name" ref={reviewUser} required />
                        </div>

                        <div className="form-group rating-group">
                          <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(1)}>
                            1<i className="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(2)}>
                            2<i className="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(3)}>
                            3<i className="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(4)}>
                            4<i className="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(5)}>
                            5<i className="ri-star-s-fill"></i>
                          </motion.span>
                        </div>

                        <div className="form-group">
                          <textarea rows={4} type="text" placeholder="Review Messages" ref={reviewMessage} required />
                        </div>

                        <motion.button whileTap={{ scale: 1.2 }} type="submit" className="buy-btn">
                          Send
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            <Col lg="12" className="mt-5">
              <h2 className="recommended-title">You might also like</h2>
            </Col>

            <ProductList data={recommendedProducts} />
          </Row>
        </Container>
      </section>
    </Wrapper>
  );
}

export default ProductDetail;
