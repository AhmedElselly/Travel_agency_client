import React, { SyntheticEvent, useState } from "react";
import styles from "../../styles/Reviews.module.css";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import Review from "./Review";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { Button, Rating, Typography } from "@mui/material";

const Reviews = () => {
  const [rating, setRating] = useState(1);
  const handleRatingChange = (event: SyntheticEvent, newValue: any) => {
    setRating(newValue);
  };
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

      <Button variant='contained' className={styles.button}>
        <div className={styles.buttonText}>Show all 116 reviews</div>
        <CallMadeIcon />
      </Button>

      <div className={styles.replySection}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>Leave a Reply</div>
          <div className={styles.subtitle}>
            Your email address will not be published.
          </div>
        </div>
        <Row>
          <Col md={4} lg={4} sm={6} className={styles.column}>
            <Typography component='legend' className={styles.ratingText}>
              Location
            </Typography>
            <Rating
              name='simple-controlled'
              value={rating}
              onChange={handleRatingChange}
            />
          </Col>
          <Col md={4} lg={4} sm={6} className={styles.column}>
            <Typography component='legend' className={styles.ratingText}>
              Staff
            </Typography>
            <Rating
              name='simple-controlled'
              value={rating}
              onChange={handleRatingChange}
            />
          </Col>
          <Col md={4} lg={4} sm={6} className={styles.column}>
            <Typography component='legend' className={styles.ratingText}>
              Cleanliness
            </Typography>
            <Rating
              name='simple-controlled'
              value={rating}
              onChange={handleRatingChange}
            />
          </Col>
          <Col md={4} lg={4} sm={6} className={styles.column}>
            <Typography component='legend' className={styles.ratingText}>
              Value for money
            </Typography>
            <Rating
              name='simple-controlled'
              value={rating}
              onChange={handleRatingChange}
            />
          </Col>
          <Col md={4} lg={4} sm={6} className={styles.column}>
            <Typography component='legend' className={styles.ratingText}>
              Comfort
            </Typography>
            <Rating
              name='simple-controlled'
              value={rating}
              onChange={handleRatingChange}
            />
          </Col>
          <Col md={4} lg={4} sm={6} className={styles.column}>
            <Typography component='legend' className={styles.ratingText}>
              Facilities
            </Typography>
            <Rating
              name='simple-controlled'
              value={rating}
              onChange={handleRatingChange}
            />
          </Col>
          <Col md={4} lg={4} sm={6} className={styles.column}>
            <Typography component='legend' className={styles.ratingText}>
              Free WiFi
            </Typography>
            <Rating
              name='simple-controlled'
              value={rating}
              onChange={handleRatingChange}
            />
          </Col>
        </Row>
      </div>
      <Form>
        <FloatingLabel
          controlId='floatingInput'
          label='Email address'
          className='mb-3 text-muted'
        >
          <Form.Control type='email' placeholder='name@example.com' />
        </FloatingLabel>
        <FloatingLabel
          controlId='floatingTextarea2'
          className='text-muted'
          label='Comments'
        >
          <Form.Control
            as='textarea'
            placeholder='Leave a comment here'
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <Button type='submit' variant='contained' className={styles.formButton}>
          Post Comment <CallMadeIcon />
        </Button>
      </Form>
    </Container>
  );
};

export default Reviews;
