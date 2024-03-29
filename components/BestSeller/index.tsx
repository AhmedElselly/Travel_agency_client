import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/BestSeller.module.css";
import CardContainer from "../CardContainer";

interface Post {
  title: string;
  image: {
    url: string;
  };
  city: string;
  rating: number;
  state: string;
  reviews: number;
  price: number;
}

type Posts = Array<Post>;

const BestSeller = () => {
  const tags = ["hotel", "tour", "activity", "car", "cruise", "flights"];
  const posts: Posts = [
    {
      title: "The Montcalm At Brewery London City",
      image: {
        url: "https://images.unsplash.com/photo-1520986606214-8b456906c813?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      city: "Westminster Borough, London",
      rating: 4.7,
      state: "Exceptional",
      reviews: 3014,
      price: 72,
    },
    {
      title: "Staycity Aparthotels Deptford Bridge Station",
      image: {
        url: "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F1.png&w=384&q=75",
      },
      city: "Ciutat Vella, Barcelona",
      rating: 4.8,
      state: "Exceptional",
      reviews: 2345,
      price: 85,
    },
    {
      title: "The Westin New York at Times Square West",
      image: {
        url: "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F2.png&w=384&q=75",
      },
      city: "Manhattan, New York",
      rating: 4.7,
      state: "Exceptional",
      reviews: 3014,
      price: 72,
    },
    {
      title: "The Montcalm At Brewery London City",
      image: {
        url: "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F3.png&w=384&q=75",
      },
      city: "Westminster Borough, London",
      rating: 4.7,
      state: "Exceptional",
      reviews: 3467,
      price: 79,
    },
    {
      title: "Staycity Aparthotels Deptford Bridge Station",
      image: {
        url: "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F4.png&w=384&q=75",
      },
      city: "Ciutat Vella, Barcelona",
      rating: 4.7,
      state: "Exceptional",
      reviews: 3014,
      price: 88,
    },
    {
      title: "The Westin New York at Times Square West",
      image: {
        url: "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F5.png&w=384&q=75",
      },
      city: "Manhattan, New York",
      rating: 4.9,
      state: "Exceptional",
      reviews: 7645,
      price: 92,
    },
    {
      title: "The Westin New York at Times Square West",
      image: {
        url: "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F6.png&w=384&q=75",
      },
      city: "Manhattan, New York",
      rating: 4.9,
      state: "Exceptional",
      reviews: 7645,
      price: 92,
    },
    {
      title: "The Westin New York at Times Square West",
      image: {
        url: "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F7.png&w=384&q=75",
      },
      city: "Manhattan, New York",
      rating: 4.9,
      state: "Exceptional",
      reviews: 7645,
      price: 92,
    },
  ];
  const [selectedTag, setSelectedTag] = useState(tags[0]);

  const handleSelect = (tag: string) => {
    setSelectedTag(tag);
  };

  const generateTags = () => {
    return tags?.map((tag) => {
      return (
        <Button
          onClick={() => handleSelect(tag)}
          className={selectedTag === tag ? styles.tagActive : styles.tag}
        >
          {tag}
        </Button>
      );
    });
  };

  const generatePosts = () => {
    return posts?.map((post) => {
      return (
        <Col sm={12} md={8} lg={3} className={`my-3`}>
          <CardContainer post={post} styles={styles} />
        </Col>
      );
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className={styles.title}>Best Seller</div>
          <div className={styles.text}>Find our best deals</div>
        </Col>
        <Col className={`d-flex gap-4 ${styles.tagsContainer}`}>
          {generateTags()}
        </Col>
      </Row>
      <Row className={`my-5`}>{generatePosts()}</Row>
    </Container>
  );
};

export default BestSeller;
