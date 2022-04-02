// == Import SCSS
import './home.scss';

// Import composants
import Header from 'src/components/Header';
import FactSheet from 'src/components/FactSheet';
import Footer from 'src/components/Footer';

// import composant(s) bootstrap
import {
  CardGroup,
} from 'react-bootstrap';

// == Composant
const Home = () => (

  <div className="background">
    <Header />
    <CardGroup>
      <FactSheet />
    </CardGroup>
    <Footer />
  </div>
);

// == Export
export default Home;
