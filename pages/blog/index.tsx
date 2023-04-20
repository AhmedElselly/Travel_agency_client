import React from "react";
import styles from "@/styles/Blogs.module.css";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import BlogCard from "@/components/BlogCard";
import { Divider } from "@mui/material";
import Moment from "react-moment";

const Blogs = () => {
  const date =
    "Thu Apr 20 2023 11:43:31 GMT+0200 (Eastern European Standard Time)";
  return (
    <Container className={styles.container}>
      <div
        className={`${styles.banner} d-flex justify-content-center align-items-center flex-column`}
      >
        <div className={styles.title}>Travel Articles</div>
        <div className={styles.subtitle}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
        </div>
      </div>
      <Row className={`${styles.wrapper}`}>
        <Col lg={8} md={12} sm={12} className={`d-flex flex-column gap-5`}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Col>
        <Col lg={4} md={12} sm={12} className={`px-5`}>
          <div className={styles.searchTitle}>Search</div>
          <Form>
            <FloatingLabel
              controlId='floatingInput'
              label='Search'
              className={`mb-3 text-muted`}
            >
              <Form.Control type='email' placeholder='name@example.com' />
            </FloatingLabel>
          </Form>
          <div className={`${styles.divider} my-4`}></div>
          <div className={`${styles.categories}`}>
            <div className={`${styles.searchTitle}`}>Categories</div>
            <div
              className={`${styles.category} d-flex justify-content-between py-2`}
            >
              <div className={`${styles.catText}`}>Hotels</div>
              <div className={`${styles.catValue}`}>92</div>
            </div>
            <div
              className={`${styles.category} d-flex justify-content-between py-2`}
            >
              <div className={`${styles.catText}`}>Cars</div>
              <div className={`${styles.catValue}`}>92</div>
            </div>
            <div
              className={`${styles.category} d-flex justify-content-between py-2`}
            >
              <div className={`${styles.catText}`}>Holiday rentals</div>
              <div className={`${styles.catValue}`}>92</div>
            </div>
            <div
              className={`${styles.category} d-flex justify-content-between py-2`}
            >
              <div className={`${styles.catText}`}>Travel guides</div>
              <div className={`${styles.catValue}`}>92</div>
            </div>
            <div
              className={`${styles.category} d-flex justify-content-between py-2`}
            >
              <div className={`${styles.catText}`}>Flights</div>
              <div className={`${styles.catValue}`}>92</div>
            </div>
          </div>
          <div className={`${styles.divider} my-4`}></div>
          <div className={`${styles.searchTitle}`}>Recent Posts</div>
          <div className={`d-flex flex-column gap-3`}>
            <div className={`${styles.recentPosts}`}>
              <div className={`${styles.imageContainer}`}>
                <img
                  src='https://images.unsplash.com/photo-1600023144744-6df7090fe9c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
                  alt='recent posts'
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.content}>
                <div className={styles.cardTitle}>
                  10 European ski destinations you should visit this winter
                </div>
                <Moment className={styles.cardDate} fromNow>
                  {date}
                </Moment>
              </div>
            </div>
            <div className={`${styles.recentPosts}`}>
              <div className={`${styles.imageContainer}`}>
                <img
                  src='https://images.unsplash.com/photo-1600023144744-6df7090fe9c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
                  alt='recent posts'
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.content}>
                <div className={styles.cardTitle}>
                  10 European ski destinations you should visit this winter
                </div>
                <Moment className={styles.cardDate} fromNow>
                  {date}
                </Moment>
              </div>
            </div>
            <div className={`${styles.recentPosts}`}>
              <div className={`${styles.imageContainer}`}>
                <img
                  src='https://images.unsplash.com/photo-1600023144744-6df7090fe9c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
                  alt='recent posts'
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.content}>
                <div className={styles.cardTitle}>
                  10 European ski destinations you should visit this winter
                </div>
                <Moment className={styles.cardDate} fromNow>
                  {date}
                </Moment>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Blogs;
