import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '~/firebase.config';
import { toast } from 'react-toastify';

import Wrapper from '~/components/Wrapper/Wrapper';

import './Login.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userInfo = await signInWithEmailAndPassword(auth, email, password);

      const user = userInfo.user;

      console.log(user);
      setLoading(false);
      toast.success('Successfully logged in');
      navigate('/checkout');
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <Wrapper title="Login">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h5 className="fw-bold">Loading...</h5>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold mb-4">Login</h3>
                <Form className="auth-form" onSubmit={login}>
                  <FormGroup className="form-group">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                  <button type="submit" className="buy-btn auth-btn">
                    Login
                  </button>
                  <p>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Wrapper>
  );
}

export default Login;
