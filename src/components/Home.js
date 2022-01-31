import React, { useEffect } from 'react';
// import stickScroll from '../util';
import { Row, Col, Container } from 'react-bootstrap';
const Home = () => {
  useEffect(() => {
    // document.querySelector('.homeBackground').backgroundImage =
    //   'url(https://rvca738f6h5tbwmj3mxylox3-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/GI-1168880617-caribbean-food.jpg)';
  }, []);
  return (
    <div>
      <div className="homeBackground">
        <div className="backgroundTitle">
          <p>AUTHENTIC AND MODERN CARIBBEAN CUISINE</p>
        </div>
      </div>
      <Container fluid className="bodyPosition">
        <Row className="justify-content-center">
          {/* <Col md="1"></Col> */}
          <Col md="4">
            <img src="https://media.istockphoto.com/photos/beach-dining-in-barbados-picture-id1139761423?k=20&m=1139761423&s=612x612&w=0&h=hV_fcGFOb31zXwYcuU1kMi-gNa-4U9dzhmDaPWn6zGQ="></img>
          </Col>
          <Col md="3">
            <div className="story">
              <p className="title">AUTHENTIC AND MODERN CARIBBEAN CUISINE</p>
              <p className="about">
                The best authentic caribbean food in Toronto
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="columnHeight"></Col>
        </Row>
        <Row className="justify-content-start">
          <Col md="2"></Col>
          <Col md="3">
            <div className="story">
              <p className="title">AUTHENTIC AND MODERN CARIBBEAN CUISINE</p>
              <p className="about">
                The best authentic caribbean food in Toronto
              </p>
            </div>
          </Col>
          <Col md="4">
            <img src="https://yasogrill.com/wp-content/uploads/2021/03/favorite-ingredients-in-jamaican-food.png"></img>
          </Col>
        </Row>
        <Row>
          <Col className="columnHeight"></Col>
        </Row>
        <Row className="justify-content-end">
          <Col md="4">
            <img src="https://www.beaches.com/blog/content/images/2020/03/Jamaican-Jerk-Chicken.jpg"></img>
          </Col>
          <Col md="3">
            <div className="story">
              <p className="title">AUTHENTIC AND MODERN CARIBBEAN CUISINE</p>
              <p className="about">
                The best authentic caribbean food in Toronto
              </p>
            </div>
          </Col>
          <Col md="2"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
