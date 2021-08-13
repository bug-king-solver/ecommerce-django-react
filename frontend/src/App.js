/* REACT BOOTSTRAP */
import { Container } from "react-bootstrap";

/* COMPONENTS */
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

/* REACT ROUTER */
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <main className="py-3">
          <Route exact path="/" component={HomeScreen} />
          <Route path="/product/:id" component={ProductScreen} />
        </main>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
