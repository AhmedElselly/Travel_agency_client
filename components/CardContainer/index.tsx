import React from "react";
import { Card } from "react-bootstrap";
import styles from "../../styles/CardContainer.module.css";
import Link from "next/link";

const CardContainer = ({ post }: any) => {
  return (
    <Link href={`/hotels/${post._id}`}>
      <Card className={styles.card} style={{ width: "100%" }}>
        <div className={styles.imageContainer}>
          <Card.Img
            className={styles.image}
            variant='top'
            src={post.image}
            alt={post.title}
          />
        </div>
        <Card.Body className={`p-0 mt-3 d-flex flex-column gap-3`}>
          <Card.Title className={styles.cardTitle}>{post.title}</Card.Title>
          <Card.Subtitle className={styles.cardSubtitle}>
            {post.city}
          </Card.Subtitle>
          <div className={`d-flex gap-2 align-items-center`}>
            <Card.Text className={styles.rating}>{post.rating}</Card.Text>
            <Card.Text className={styles.state}>{post.state}</Card.Text>
            <Card.Text className={styles.reviews}>
              {post.reviews} reviews
            </Card.Text>
          </div>
          <Card.Text className={styles.price}>
            Starting from US${post.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default CardContainer;
