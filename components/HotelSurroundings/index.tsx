import React from "react";
import styles from '@/styles/HotelSurroundings.module.css';
import { Col, Row } from "react-bootstrap";
import Surrounding from "./Surrounding";

const HotelSurroundings = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Hotel surroundings</div>
			<Row>
				<Col md={4} lg={4} sm={12} className="mb-5">
					<Surrounding/>
				</Col>
				<Col md={4} lg={4} sm={12} className="mb-5">
					<Surrounding/>
				</Col>
				<Col md={4} lg={4} sm={12} className="mb-5">
					<Surrounding/>
				</Col>
				<Col md={4} lg={4} sm={12} className="mb-5">
					<Surrounding/>
				</Col>
				<Col md={4} lg={4} sm={12} className="mb-5">
					<Surrounding/>
				</Col>
			</Row>
    </div>
  );
};

export default HotelSurroundings;
