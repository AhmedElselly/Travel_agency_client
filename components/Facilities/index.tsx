import React from "react";
import styles from "@/styles/Facilities.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Facility from "./Facility";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";

const Facilities = () => {
  const generateIcon = () => {
    return <ShowerOutlinedIcon/>
  }
  return (
    <Container className={styles.container}>
      <div className={styles.title}>Facilities of This Hotel</div>
      <Row>
        <Col lg={4} md={4} sm={12} className="mb-4">
          <Facility icon={generateIcon} text={'bathroom'} />
        </Col>
        <Col lg={4} md={4} sm={12} className="mb-4">
          <Facility icon={generateIcon} text={'bathroom'} />
        </Col>
        <Col lg={4} md={4} sm={12} className="mb-4">
          <Facility icon={generateIcon} text={'bathroom'} />
        </Col>
        <Col lg={4} md={4} sm={12} className="mb-4">
          <Facility icon={generateIcon} text={'bathroom'} />
        </Col>
        <Col lg={4} md={4} sm={12} className="mb-4">
          <Facility icon={generateIcon} text={'bathroom'} />
        </Col>
        <Col lg={4} md={4} sm={12} className="mb-4">
          <Facility icon={generateIcon} text={'bathroom'} />
        </Col>
        <Col lg={4} md={4} sm={12} className="mb-4">
          <Facility icon={generateIcon} text={'bathroom'} />
        </Col>
      </Row>
    </Container>
  );
};

export default Facilities;
