// == Import
import './factSheet.scss';
import {
  Card,
  Button,
} from 'react-bootstrap';
import riviere from 'src/assets/images/riviere.jpg';
import mer from 'src/assets/images/mer.jpg';

// == Composant
const FactSheet = () => (
  <div id="card-grp">
    <Card id="fact-sheet">
      <Card.Img id="card-img" variant="top" src={riviere} />
      <Card.Body>
        <Card.Title>Pêche en rivière</Card.Title>
        <Button variant="flat" size="xxl">Je vais voir mon noeud</Button>
      </Card.Body>
    </Card>
    <Card id="fact-sheet">
      <Card.Img id="card-img" variant="top" src={mer} />
      <Card.Body>
        <Card.Title>Pêche en mer</Card.Title>
        <Button variant="flat" size="xxl">Je vais voir mon noeud</Button>
      </Card.Body>
    </Card>
  </div>
);

// == Export
export default FactSheet;
