import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/OurDestinations.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import { Card, Col, Container, Row } from "react-bootstrap";

interface Author {
  name: string;
  job: string;
  image: string;
}

interface Item {
  title: string;
  description: string;
  image: string;
  author: Author;
}

type Items = Array<Item>;

const OurDestinations = () => {
  const items: Items = [
    {
      title: "Hotel equatorial melaka",
      description:
        "Our family was traveling via bullet train between cities in	Japan with our luggage - the location for this hotel made that so	easy. Agoda price was fantastic.",
      image:
        "https://images.unsplash.com/photo-1613923146681-f07555603fa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      author: {
        name: "John Doe",
        job: "UI / UX Designer",
        image:
          "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
    },
    {
      title: "Hotel equatorial melaka",
      description:
        "Our family was traveling via bullet train between cities in	Japan with our luggage - the location for this hotel made that so	easy. Agoda price was fantastic.",
      image:
        "https://images.unsplash.com/photo-1659003505996-d5d7ca66bb25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
      author: {
        name: "John Doe",
        job: "UI / UX Designer",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
    },
    {
      title: "Hotel equatorial melaka",
      description:
        "Our family was traveling via bullet train between cities in	Japan with our luggage - the location for this hotel made that so	easy. Agoda price was fantastic.",
      image:
        "https://images.unsplash.com/photo-1511135570219-bbad9a02f103?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      author: {
        name: "John Doe",
        job: "UI / UX Designer",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
    },
  ];

  const generateItems = () => {
    return items?.map((item) => {
      return (
        <SwiperSlide>
          <Card
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 20,
              border: "none",
            }}
          >
            <Card.Img
              variant='top'
              src={item.image}
              style={{ objectFit: "cover", objectPosition: "bottom" }}
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>"{item.description}"</Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
      );
    });
  };

  return (
    <Container fluid className={`my-5 ${styles.container} p-5 `}>
      <Row className='justify-content-center align-items-center gap-5'>
        <Col>
          <div className={styles.title}>Our Destinations</div>
          <div className={styles.text}>
            “Always remember that your present situation is not your final
            destination. The best is yet to come.”
          </div>
        </Col>
        <Col>
          <div className="d-flex align-items-center justify-content-center">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className='swiper'
            >
              {generateItems()}
            </Swiper>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OurDestinations;
