import React from "react";
import styles from "../../styles/GuestReviewsTotal.module.css";
import { Container } from "react-bootstrap";
import { LinearProgress } from "@mui/material";

const GuestReviewsTotal = () => {
  const reviewsCount = 3149;
  return (
    <Container className={styles.container}>
			<div className={styles.title}>Guests Reviews</div>
      <div className={styles.wrapper}>
        <div className={styles.totalRating}>
          <div className={styles.ratingNumber}>4.8</div>
          <div className={styles.state}>Exceptional</div>
          <div className={styles.reviewsCount}>
            {reviewsCount.toLocaleString("en-US")} reviews
          </div>
        </div>
        <div className={styles.segment}>
          <div className={styles.portion}>
            <div className={styles.portionInner}>
              <div className={styles.portionTitle}>Location</div>
              <div className={styles.portionValue}>9.4</div>
            </div>
            <LinearProgress variant='determinate' value={90} />
          </div>
          <div className={styles.portion}>
            <div className={styles.portionInner}>
              <div className={styles.portionTitle}>Value</div>
              <div className={styles.portionValue}>8</div>
            </div>
            <LinearProgress variant='determinate' value={80} />
          </div>
          <div className={styles.portion}>
            <div className={styles.portionInner}>
              <div className={styles.portionTitle}>Free WiFi</div>
              <div className={styles.portionValue}>9.4</div>
            </div>
            <LinearProgress variant='determinate' value={90} />
          </div>
        </div>
        <div className={styles.segment}>
          <div className={styles.portion}>
            <div className={styles.portionInner}>
              <div className={styles.portionTitle}>Staff</div>
              <div className={styles.portionValue}>8.4</div>
            </div>
            <LinearProgress variant='determinate' value={90} />
          </div>
          <div className={styles.portion}>
            <div className={styles.portionInner}>
              <div className={styles.portionTitle}>Comfort</div>
              <div className={styles.portionValue}>9.4</div>
            </div>
            <LinearProgress variant='determinate' value={90} />
          </div>
        </div>
        <div className={styles.segment}>
          <div className={styles.portion}>
            <div className={styles.portionInner}>
              <div className={styles.portionTitle}>Cleanliness</div>
              <div className={styles.portionValue}>9.1</div>
            </div>
            <LinearProgress variant='determinate' value={90} />
          </div>
          <div className={styles.portion}>
            <div className={styles.portionInner}>
              <div className={styles.portionTitle}>Facilities</div>
              <div className={styles.portionValue}>8.5</div>
            </div>
            <LinearProgress variant='determinate' value={90} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GuestReviewsTotal;
