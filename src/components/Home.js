import React from 'react';

import { Row, Col, Container } from 'react-bootstrap';
const Home = () => {
  return (
    <div className="home w-100 h-100">
      <div className="home-background w-100">
        <div className="home-background__title w-50">
          <p>AUTHENTIC AND MODERN CARIBBEAN CUISINE</p>
        </div>
      </div>
      <Container  className="body-position">
        <Row className="justify-content-center" >
          <Col md={9} lg={7}>
            <img
              className="home-img"
              src="https://media.istockphoto.com/photos/beach-dining-in-barbados-picture-id1139761423?k=20&m=1139761423&s=612x612&w=0&h=hV_fcGFOb31zXwYcuU1kMi-gNa-4U9dzhmDaPWn6zGQ="
            ></img>
          </Col>
          <Col  md={3} lg={5}>
            <div className="home-background__story w-100">
              <p className="home-background__story__title">
                AUTHENTIC AND MODERN CARIBBEAN CUISINE
              </p>
              <p className="home-background__story__about">
                The best authentic caribbean food in Toronto
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="column-height"></Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={3} lg={5}>
            <div className="home-background__story w-100">
              <p className="home-background__story__title">
                AUTHENTIC AND MODERN CARIBBEAN CUISINE
              </p>
              <p className="home-background__story__about">
                The best authentic caribbean food in Toronto
              </p>
            </div>
          </Col>
          <Col md={9} lg={7}>
            <img
              className="home-img"
              src="https://yasogrill.com/wp-content/uploads/2021/03/favorite-ingredients-in-jamaican-food.png"
            ></img>
          </Col>
        </Row>
        <Row>
          <Col className="column-height"></Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={9} lg={7}>
            <img
              className="home-img"
              src="https://www.beaches.com/blog/content/images/2020/03/Jamaican-Jerk-Chicken.jpg"
            ></img>
          </Col>
          <Col md={3} lg={5}>
            <div className="home-background__story w-100">
              <p className="home-background__story__title">
                AUTHENTIC AND MODERN CARIBBEAN CUISINE
              </p>
              <p className="home-background__story__about">
                The best authentic caribbean food in Toronto
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
