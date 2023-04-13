import CardContainer from "@/components/CardContainer";
import ListContainer from "@/components/ListContainer";
import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from '../../styles/ToursPage.module.css'
import { getHotels } from "@/actions/hotelApi";

interface Post {
  _id: string;
  name: string;
  image: string;
  location: string;
  rating: number;
  state: string;
  reviews: number;
  price: number;
}

type Posts = Array<Post>;

interface Props {
  posts: Posts
}

const PostsList = ({posts}: Props) => {
  // const posts: Posts = [
  //   {
  //     _id: '1',
  //     title: "The Montcalm At Brewery London City",
  //     image:
  //       "https://images.unsplash.com/photo-1520986606214-8b456906c813?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //     city: "Westminster Borough, London",
  //     rating: 4.7,
  //     state: "Exceptional",
  //     reviews: 3014,
  //     price: 72,
  //   },
  //   {
  //     _id: '2',
  //     title: "Staycity Aparthotels Deptford Bridge Station",
  //     image:
  //       "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F1.png&w=384&q=75",
  //     city: "Ciutat Vella, Barcelona",
  //     rating: 4.8,
  //     state: "Exceptional",
  //     reviews: 2345,
  //     price: 85,
  //   },
  //   {
  //     _id: '3',
  //     title: "The Westin New York at Times Square West",
  //     image:
  //       "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F2.png&w=384&q=75",
  //     city: "Manhattan, New York",
  //     rating: 4.7,
  //     state: "Exceptional",
  //     reviews: 3014,
  //     price: 72,
  //   },
  //   {
  //     _id: '4',
  //     title: "The Montcalm At Brewery London City",
  //     image:
  //       "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F3.png&w=384&q=75",
  //     city: "Westminster Borough, London",
  //     rating: 4.7,
  //     state: "Exceptional",
  //     reviews: 3467,
  //     price: 79,
  //   },
  //   {
  //     _id: '5',
  //     title: "Staycity Aparthotels Deptford Bridge Station",
  //     image:
  //       "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F4.png&w=384&q=75",
  //     city: "Ciutat Vella, Barcelona",
  //     rating: 4.7,
  //     state: "Exceptional",
  //     reviews: 3014,
  //     price: 88,
  //   },
  //   {
  //     _id: '6',
  //     title: "The Westin New York at Times Square West",
  //     image:
  //       "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F5.png&w=384&q=75",
  //     city: "Manhattan, New York",
  //     rating: 4.9,
  //     state: "Exceptional",
  //     reviews: 7645,
  //     price: 92,
  //   },
  //   {
  //     _id: '7',
  //     title: "The Westin New York at Times Square West",
  //     image:
  //       "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F6.png&w=384&q=75",
  //     city: "Manhattan, New York",
  //     rating: 4.9,
  //     state: "Exceptional",
  //     reviews: 7645,
  //     price: 92,
  //   },
  //   {
  //     _id: '8',
  //     title: "The Westin New York at Times Square West",
  //     image:
  //       "https://gotrip-next.vercel.app/_next/image?url=%2Fimg%2Fhotels%2F7.png&w=384&q=75",
  //     city: "Manhattan, New York",
  //     rating: 4.9,
  //     state: "Exceptional",
  //     reviews: 7645,
  //     price: 92,
  //   },
  // ];
  const generatePosts = () => {
    return posts?.map((post: Post) => {
      return (
        <Col key={post._id} sm={12} md={8} lg={4} className={`my-3`}>
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

export const getServerSideProps = async (ctx:any) => {
  const res = await getHotels();
  return {
    props: {
      posts: res.data
    }
  }
}

export default PostsList;
