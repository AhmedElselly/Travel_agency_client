import CardContainer from "@/components/CardContainer";
import ListContainer from "@/components/ListContainer";
import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from '../../styles/ToursPage.module.css'

interface Post {
  title: string;
  image: string;
  city: string;
  rating: number;
  state: string;
  reviews: number;
  price: number;
}

type Posts = Array<Post>;

const PostsList: React.FC = () => {
  const posts: Posts = [
    {
      title: "The Montcalm At Brewery London City",
      image:
        "https://images.unsplash.com/photo-1520986606214-8b456906c813?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      city: "Westminster Borough, London",
      rating: 4.7,
      state: "Exceptional",
      reviews: 3014,
      price: 72,
    },
    {
      title: "Staycity Aparthotels Deptford Bridge Station",
      image:
        "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F1.png&w=384&q=75",
      city: "Ciutat Vella, Barcelona",
      rating: 4.8,
      state: "Exceptional",
      reviews: 2345,
      price: 85,
    },
    {
      title: "The Westin New York at Times Square West",
      image:
        "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F2.png&w=384&q=75",
      city: "Manhattan, New York",
      rating: 4.7,
      state: "Exceptional",
      reviews: 3014,
      price: 72,
    },
    {
      title: "The Montcalm At Brewery London City",
      image:
        "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F3.png&w=384&q=75",
      city: "Westminster Borough, London",
      rating: 4.7,
      state: "Exceptional",
      reviews: 3467,
      price: 79,
    },
    {
      title: "Staycity Aparthotels Deptford Bridge Station",
      image:
        "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F4.png&w=384&q=75",
      city: "Ciutat Vella, Barcelona",
      rating: 4.7,
      state: "Exceptional",
      reviews: 3014,
      price: 88,
    },
    {
      title: "The Westin New York at Times Square West",
      image:
        "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F5.png&w=384&q=75",
      city: "Manhattan, New York",
      rating: 4.9,
      state: "Exceptional",
      reviews: 7645,
      price: 92,
    },
    {
      title: "The Westin New York at Times Square West",
      image:
        "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F6.png&w=384&q=75",
      city: "Manhattan, New York",
      rating: 4.9,
      state: "Exceptional",
      reviews: 7645,
      price: 92,
    },
    {
      title: "The Westin New York at Times Square West",
      image:
        "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F7.png&w=384&q=75",
      city: "Manhattan, New York",
      rating: 4.9,
      state: "Exceptional",
      reviews: 7645,
      price: 92,
    },
  ];
  const generatePosts = () => {
    return posts?.map((post) => {
      return (
        <Col sm={12} md={8} lg={4} className={`my-3`}>
          <CardContainer post={post} />
        </Col>
      );
    });
  };

  return (
    <ListContainer>
      <Row className={styles.wrapper}>
        {generatePosts()}
      </Row>
    </ListContainer>
  );
};

export default PostsList;
