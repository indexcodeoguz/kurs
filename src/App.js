import React from "react";
import Navi from "./Navi";
import Category from "./Category";
import Productlist from "./Productlist";
import { Container, Row, Col } from "reactstrap";



 
function App() {
  let productInfo = {title:"Product"};
  let categoryInfo = {title:"Category"};
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>

        <Row>
          <Col xs="3">
            <Category info={categoryInfo} />
          </Col>
          <Col xs="9">
            <Productlist info={productInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
