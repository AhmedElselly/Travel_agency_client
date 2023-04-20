import React from "react";
import styles from "@/styles/BlogCard.module.css";
import { Col, Row } from "react-bootstrap";
import Moment from "react-moment";

const BlogCard = () => {
  const date =
    "Thu Apr 20 2023 11:43:31 GMT+0200 (Eastern European Standard Time)";
  return (
    <Row className={`${styles.container}`}>
      <Col md={4} lg={4} sm={12}>
        <div className={`${styles.imageContainer}`}>
          <img
            className={`${styles.image} img-fluid`}
            src='https://images.unsplash.com/photo-1596665758190-d8b3a3a9ee44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80'
            alt='blog title'
          />
        </div>
      </Col>
      <Col md={8} lg={8} sm={12} className={`d-flex gap-4 justify-content-center flex-column align-items-start`}>
        <div className={`${styles.date}`}>
          <Moment fromNow>{date}</Moment>
        </div>
        <div className={styles.title}>
          Booking travel during Corona: good advice in an uncertain time
        </div>
        <div className={styles.content}>
          For decades, travelers have been escaping to the Catskills — a
          mountainous region in upstate New York — whenever they’ve needed a
          reset.
        </div>
      </Col>
    </Row>
  );
};

export default BlogCard;
