import React from "react";
import styles from "../../styles/Reviews.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Review from "./Review";

const Reviews = () => {
  return (
    <Container className={styles.container}>
      <Row className={styles.wrapper}>
        <Col md={6} lg={6} sm={12} className={`mb-5`}>
          <Review />
        </Col>
        <Col md={6} lg={6} sm={12}>
          <Review />
        </Col>
        <Col md={6} lg={6} sm={12}>
          <Review />
        </Col>
        <Col md={6} lg={6} sm={12}>
          <Review />
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
