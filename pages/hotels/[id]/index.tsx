import React, { Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "../../../styles/HotelShow.module.css";
import Head from "next/head";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TvIcon from "@mui/icons-material/Tv";

const HotelShow: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Hotel show</title>
      </Head>
      <Container>
        <div className={`${styles.top}`}>
          <div className={styles.left}>
            <div className={styles.title}>
              The Montcalm At Brewery London City
            </div>
            <div className={styles.location}>Westminster Borough, London</div>
          </div>
          <div className={styles.right}>
            <div className={styles.priceContainer}>
              From <span className={styles.price}>US$99</span>
            </div>
            <Button className={styles.button}>Select Room</Button>
          </div>
        </div>
        <Row className={`mt-5 `}>
          <Col
            lg={6}
            md={12}
            sm={12}
            style={{ borderRadius: 8, overflow: "hidden" }}
          >
            <img
              src='https://gotrip-next.vercel.app/img/hotels/5.png'
              style={{ height: "100%", width: "100%" }}
            />
          </Col>
          <Col
            lg={6}
            md={12}
            sm={12}
            className={`d-flex flex-column gap-3`}
            style={{ height: "100%" }}
          >
            <Row style={{ height: "100%" }}>
              <Col lg={6} md={12} sm={12} style={{ maxHeight: "350px" }}>
                <img
                  src='https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </Col>
              <Col lg={6} md={12} sm={12} style={{ maxHeight: "350px" }}>
                <img
                  src='https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={12} sm={12} style={{ maxHeight: "350px" }}>
                <img
                  src='https://images.unsplash.com/photo-1625244695851-1fc873f942bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </Col>
              <Col lg={6} md={12} sm={12} style={{ maxHeight: "350px" }}>
                <img
                  src='https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className={`mt-4`}>
          <Col lg={9} md={12} sm={12} style={{flex: 2.5}} >
            <div className={styles.heighlights}>
              <div className={styles.subtitle}>property heighlights</div>
              <Row className={`mt-4 justify-content-center align-items-center`}>
                <Col
                  className={`d-flex justify-content-center align-items-center flex-column gap-2`}
									sm={6}
									md={3}
									lg={3}
                >
                  <ApartmentIcon className={styles.icon} />
                  <div>In London City Center</div>
                </Col>
                <Col
                  className={`d-flex justify-content-center align-items-center flex-column gap-2`}
									sm={6}
									md={3}
									lg={3}
                >
                  <FlightTakeoffIcon className={styles.icon} />
                  <div>Airport transfer</div>
                </Col>
                <Col
                  className={`d-flex justify-content-center align-items-center flex-column gap-2`}
									sm={6}
									md={3}
									lg={3}
                >
                  <NotificationsIcon className={styles.icon} />
                  <div>Front desk {`[24]-hours`}</div>
                </Col>
                <Col
                  className={`d-flex justify-content-center align-items-center flex-column gap-2`}
									sm={6}
									md={3}
									lg={3}
                >
                  <TvIcon className={styles.icon} />
                  <div>Premium TV Channels</div>
                </Col>
              </Row>
            </div>
						<div className={`mt-5`} style={{background: 'rgba(0,0,0,0.1)', height: 1}}></div>
						<div className={styles.overview}>
							<div className={`${styles.subtitle} mt-5 mb-4`}>Overview</div>
							<div className={`${styles.text} mb-5`}>You can directly book the best price if your travel dates are available, all discounts are already included. In the following house description you will find all information about our listing.</div>
							<div className={`${styles.text}`}>2-room terraced house on 2 levels. Comfortable and cosy furnishings: 1 room with 1 french bed and radio. Shower, sep. WC. Upper floor: (steep stair) living/dining room with 1 sofabed (110 cm, length 180 cm), TV. Exit to the balcony. Small kitchen {`(2 hot plates, oven,`}</div>
						</div>
          </Col>
          <Col lg={3} md={12} sm={12} style={{flex: 1}} >
            <div className={`${styles.checkout} border rounded`}>
              <div className={`d-flex justify-content-between`}>
                <div className={styles.checkoutPrice}>
                  <span className={styles.priceCheckout}>US$99</span>
                  <span style={{ color: "gray" }}>nights</span>
                </div>
                <div className={`d-flex gap-2`}>
                  <div className={`d-flex flex-column`}>
                    <span className={styles.exceptional}>Exceptional</span>
                    <span style={{ color: "gray", fontSize: 13 }}>3014 reviews</span>
                  </div>
									<div className={`${styles.ratingNumber} d-flex justify-content-center align-items-center`}>4.7</div>
                </div>
              </div>
							<div className={`${styles.checkIn} mt-3 p-3 rounded`}>
								<div className={styles.checkInTitle}>Check in - Check out</div>
								<div className={styles.checkInDate}>April 15 2023 ~ May 14 2023</div>
							</div>
							<div className={`${styles.checkIn} mt-3 p-3 rounded`}>
								<div className={styles.checkInTitle}>Guest</div>
								<div className={styles.guestContent}>2 adults - 1 childeren - 1 room</div>
							</div>
							<Button className={styles.checkButton}>Check availability</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default HotelShow;
