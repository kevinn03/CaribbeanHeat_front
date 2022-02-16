import React from 'react';

import { Row, Col, Container } from 'react-bootstrap';
const Home = () => {
  return (
    <div className="home w-100 h-100">
      <div className="home-background w-100">
        <div className="home-background__title w-50">
          <p>A TASTE OF THE ISLANDS</p>
        </div>

        <Container className="body-position">
          <Row className="justify-content-center">
            <Col sm={12} md={8} lg={6}>
              <img
                className="home-img"
                src="https://media.istockphoto.com/photos/beach-dining-in-barbados-picture-id1139761423?k=20&m=1139761423&s=612x612&w=0&h=hV_fcGFOb31zXwYcuU1kMi-gNa-4U9dzhmDaPWn6zGQ="
              ></img>
            </Col>
            <Col sm={12} md={4} lg={6}>
              <div className="home-background__story w-100">
                <p className="home-background__story__title">
                  AUTHENTIC AND MODERN CHINESE CARIBBEAN CUISINE
                </p>
                <p className="home-background__story__about">
                  The best authentic chinese caribbean food in Toronto
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="column-height"></Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={12} md={4} lg={6}>
              <div className="home-background__story w-100">
                <p className="home-background__story__title">
                  FRESH INGRIEDIENTS
                </p>
                <p className="home-background__story__about">
                  Fresh ingredients sourced locally
                </p>
              </div>
            </Col>
            <Col sm={12} md={8} lg={6}>
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
            <Col sm={12} md={8} lg={6}>
              <img
                className="home-img"
                src="https://www.beaches.com/blog/content/images/2020/03/Jamaican-Jerk-Chicken.jpg"
              ></img>
            </Col>
            <Col sm={12} md={4} lg={6}>
              <div className="home-background__story w-100">
                <p className="home-background__story__title">
                  JAMAICAN JERK CHICKEN
                </p>
                <p className="home-background__story__about">
                  The best jerk chicken
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="footer w-100">
          <p>2022 Caribbean Heat Ltd</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
