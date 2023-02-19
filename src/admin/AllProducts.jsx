import { Col, Container, Row } from 'reactstrap';
import productImg from '~/assets/images/arm-chair-01.jpg';

function AllProducts() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={productImg} alt="" />
                  </td>
                  <td>Arm chair</td>
                  <td>Chair</td>
                  <td>$195</td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AllProducts;
