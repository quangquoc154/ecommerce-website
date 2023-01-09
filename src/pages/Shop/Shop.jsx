import { Col, Container, Row } from 'reactstrap';
import CommonSection from '~/components/CommonSection/CommonSection';
import Wrapper from '~/components/Wrapper/Wrapper';
import products from '~/assets/data/products';
import ProductList from '~/components/ProductList/ProductList';

import './Shop.scss';
import { useState } from 'react';

function Shop() {
  const [productsData, setProductsData] = useState(products);

  console.log(productsData);

  const handleFilter = (e) => {
    const filterValue = e.target.value;

    switch (filterValue) {
      case 'sofa':
        const filteredProducts = products.filter((item) => item.category === 'sofa');
        setProductsData(filteredProducts);
        break;
      case 'mobile': {
        const filteredProducts = products.filter((item) => item.category === 'mobile');
        setProductsData(filteredProducts);
        break;
      }
      case 'chair': {
        const filteredProducts = products.filter((item) => item.category === 'chair');
        setProductsData(filteredProducts);
        break;
      }
      case 'watch': {
        const filteredProducts = products.filter((item) => item.category === 'watch');
        setProductsData(filteredProducts);
        break;
      }
      case 'wireless': {
        const filteredProducts = products.filter((item) => item.category === 'wireless');
        setProductsData(filteredProducts);
        break;
      }
      default:
        setProductsData(products);
    }
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchValue.toLowerCase()),
    );

    setProductsData(searchedProducts);
  };

  return (
    <Wrapper title="Shop">
      <CommonSection title="Products"></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter-widget">
                <select onClick={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6">
              <div className="filter-widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search-box">
                <input type="text" placeholder="Search" onChange={handleSearch} />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No Products are found!</h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Wrapper>
  );
}

export default Shop;
