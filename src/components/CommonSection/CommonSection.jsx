import { Container } from 'reactstrap';
import './CommonSection.scss';

function CommonSection({ title }) {
  return (
    <div className="common-section">
      <Container className="text-center">
        <h1>{title}</h1>
      </Container>
    </div>
  );
}

export default CommonSection;
