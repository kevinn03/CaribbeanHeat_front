import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Contact = () => {
  return (
    <Container fluid className="contact-container w-100 h-100">
      <Row>
        <Col>
          <img
            className="contact"
            src="https://medmunch.com/wp-content/uploads/2020/09/Caribbean-Food-1536x1046.jpg"
          ></img>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="w-100 h-100 text-center">
            <h5>Contact</h5>
            <div>
              LOCATED @ 1300 FINCH AVE. WEST (FINCH & KEELE COMMERCIAL CENTER)
              <p>416-739-6600</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
