import { useState } from 'react';
import { toast } from 'react-toastify';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

import { db, storage } from '~/firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

import Input from '~/components/Input/Input';

function AddProduct() {
  const [enterTitle, setEnterTitle] = useState('');
  const [enterShortDesc, setEnterShortDesc] = useState('');
  const [enterDesc, setEnterDesc] = useState('');
  const [enterCategory, setEnterCategory] = useState('');
  const [enterPrice, setEnterPrice] = useState('');
  const [enterProductImg, setEnterProductImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addProduct = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Add product to the firebase database
    try {
      const docRef = await collection(db, 'products');

      const storageRef = ref(storage, `productImages/${Date.now() + enterProductImg.name}`);
      const uploadTask = uploadBytesResumable(storageRef, enterProductImg);

      uploadTask.on(
        () => {
          toast.error('images not uploaded!');
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docRef, {
              title: enterTitle,
              shortDesc: enterShortDesc,
              desc: enterDesc,
              category: enterCategory,
              price: enterPrice,
              imgUrl: downloadURL,
            });
          });
        },
      );
      setLoading(false);
      toast.success('Product successfully added!');
      navigate('/dashboard/all-products');
    } catch (error) {
      setLoading(false);
      toast.error('Product not added!');
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            {loading ? (
              <h4 className="py-5">Loading...</h4>
            ) : (
              <>
                <h4 className="mb-5">Add Product</h4>
                <Form onSubmit={addProduct}>
                  <FormGroup>
                    <span>Product title</span>
                    <Input
                      type="text"
                      placeholder="Double sofa"
                      value={enterTitle}
                      onChange={(e) => {
                        setEnterTitle(e.target.value);
                      }}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <span>Short description</span>
                    <Input
                      type="text"
                      placeholder="Sofa..."
                      value={enterShortDesc}
                      onChange={(e) => setEnterShortDesc(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <span>Description</span>
                    <Input
                      type="text"
                      placeholder="Description..."
                      value={enterDesc}
                      onChange={(e) => setEnterDesc(e.target.value)}
                      required
                    />
                  </FormGroup>

                  <div className="d-flex align-items-center justify-content-between gap-5">
                    <FormGroup className="w-50">
                      <span>Price</span>
                      <Input
                        type="number"
                        placeholder="$100"
                        value={enterPrice}
                        onChange={(e) => setEnterPrice(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="w-50">
                      <span>Category</span>
                      <select
                        className="w-100 form-input"
                        value={enterCategory}
                        onChange={(e) => setEnterCategory(e.target.value)}
                      >
                        <option value="chair">Chair</option>
                        <option value="sofa">Sofa</option>
                        <option value="mobile">Mobile</option>
                        <option value="watch">Watch</option>
                        <option value="wireless">Wireless</option>
                      </select>
                    </FormGroup>
                  </div>

                  <div>
                    <FormGroup>
                      <span>Product Image</span>
                      <Input type="file" onChange={(e) => setEnterProductImg(e.target.files[0])} required />
                    </FormGroup>
                  </div>

                  <button type="submit" className="buy-btn">
                    Add Product
                  </button>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AddProduct;
