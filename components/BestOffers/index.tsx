import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/BestOffers.module.css";

interface Item {
  title: string;
  subtitle: string;
  duration: string;
  price: number;
  image: string;
}

type Items = Array<Item>;

const BestOffers: React.FC = () => {
  const items: Items = [
    {
      title: "Turkey",
      subtitle: "Grand Turkey",
      duration: "8 days",
      price: 2000,
      image:
        "https://images.unsplash.com/photo-1613923146681-f07555603fa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      title: "Paris",
      subtitle: "The city of lights",
      duration: "8 days",
      price: 1100,
      image:
        "https://images.unsplash.com/photo-1659003505996-d5d7ca66bb25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
    },
    {
      title: "Italy",
      subtitle: "Venezia",
      duration: "8 days",
      price: 900,
      image:
        "https://images.unsplash.com/photo-1511135570219-bbad9a02f103?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      title: "Czech",
      subtitle: "Prague",
      duration: "8 days",
      price: 3000,
      image:
        "https://images.unsplash.com/photo-1570704988696-dafe232e8cb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    },
    {
      title: "Czech",
      subtitle: "Bouzov",
      duration: "8 days",
      price: 2500,
      image:
        "https://images.unsplash.com/photo-1592838464221-a7268248a9ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    },
  ];

  const generateItems = () => {
    return items?.map((item) => {
      return (
        <Col xs={12} md={6} lg={4} style={{ maxHeight: 500, marginBottom: 20 }}>
          <Card className='text-white' style={{border: 'none'}}>
            <Card.Img
              src={item.image}
              alt={item.title}
              style={{ maxHeight: 500, minHeight: 500 }}
            />
            <Card.ImgOverlay style={{ position: "relative", maxHeight: 500 }}>
              <div style={{position: 'absolute', bottom: 50}}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Title>{item.subtitle}</Card.Title>
                <Row>
                  <Col>
                    <Card.Text>${item.price}</Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>{item.duration}</Card.Text>
                  </Col>
                </Row>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
      );
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>Best Offers</div>
        <div className={styles.subtitle}>Checkout our best promotion tours</div>
      </div>
      <Container>
        <Row className={`py-5`}>{generateItems()}</Row>
      </Container>
    </div>
  );
};

export default BestOffers;
