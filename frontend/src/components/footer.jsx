import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const footer = () => {
  return (
    <div>
      <footer>
        <Container>
          <Row>
            <Col className="text-center">
              <span>Develop by &copy; Arslan</span>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default footer;
