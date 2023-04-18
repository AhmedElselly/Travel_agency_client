import React, { useState } from "react";
import styles from "@/styles/Facilities.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Facility from "./Facility";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";

const Facilities = () => {
  const [facilities, setFacilities] = useState([
    "bathroom",
    "media & technology",
    "safety & security",
    "bedroom",
    "food & drink",
    "general",
    "reception services",
    "cleaning services",
  ]);
  
  const generateIcon = () => {
    return <ShowerOutlinedIcon />;
  };

  const generateFacilities = () => {
    return facilities?.map((facility) => {
      return (
        <Col lg={4} md={4} sm={12} className='mb-4'>
          <Facility icon={generateIcon} text={facility} />
        </Col>
      );
    });
  };

  return (
    <Container className={styles.container}>
      <div className={styles.title}>Facilities of This Hotel</div>
      <Row>
        {generateFacilities()}
        {/* <Col lg={4} md={4} sm={12} className="mb-4">
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
        </Col> */}
      </Row>
    </Container>
  );
};

export default Facilities;
