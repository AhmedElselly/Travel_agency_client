import React, { useState } from "react";
import DashboardContainer from "@/components/DashboardContainer";
import styles from "@/styles/AddHotel.module.css";
import { Box } from "@mui/system";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";

const Tab = (props: any) => {
  return (
    <div hidden={props.index !== props.value}>
      <div>{props.children}</div>
    </div>
  );
};

const AddHotel = () => {
  const [value, setValue] = useState(0);

  const handleClick = (val: number) => {
    setValue(val);
  };

  return (
    <DashboardContainer>
      <div className={styles.titleContainer}>
        <div className={styles.title}>Add Hotel</div>
        <div className={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
      <Box className={styles.container} sx={{ boxShadow: 2, height: '100%' }}>
        <div className={styles.tabs}>
          <div className={styles.tab} onClick={() => handleClick(0)}>
            1. Content
          </div>
          <div className={styles.tab} onClick={() => handleClick(1)}>
            2. Location
          </div>
          <div className={styles.tab} onClick={() => handleClick(2)}>
            3. Pricing
          </div>
          <div className={styles.tab} onClick={() => handleClick(3)}>
            4. Attributes
          </div>
        </div>
        <Tab index={0} value={value}>
          <div className={styles.content}>
            <div className={styles.formTitle}>Hotel Content</div>
            <Form className={styles.form}>
              <FloatingLabel
                controlId='floatingInput'
                label='Hotel name'
                className='mb-3'
              >
                <Form.Control type='text' placeholder='Hotel name' />
              </FloatingLabel>
              <FloatingLabel controlId='floatingTextarea2' label='Content'>
                <Form.Control
                  as='textarea'
                  placeholder='Content'
                  style={{ height: "150px" }}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId='floatingInput'
                label='Youtube video'
                className='my-3'
              >
                <Form.Control type='text' placeholder='Youtube video' />
              </FloatingLabel>
            </Form>
          </div>
        </Tab>
        <Tab index={1} value={value}>
          <div className={styles.content}>
            <div className={styles.formTitle}>Location</div>
            <Form>
              <FloatingLabel
                controlId='floatingInput'
                label='Hotel name'
                className='mb-3'
              >
                <Form.Control type='text' placeholder='Location' />
              </FloatingLabel>
              <FloatingLabel
                controlId='floatingInput'
                label='Real address'
                className='mb-3'
              >
                <Form.Control type='text' placeholder='Real address' />
              </FloatingLabel>
              <Row>
                <Col>
                  <FloatingLabel
                    controlId='floatingInput'
                    label='Latitude'
                    className='mb-3'
                  >
                    <Form.Control type='text' placeholder='Latitude' />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId='floatingInput'
                    label='Longitude'
                    className='mb-3'
                  >
                    <Form.Control type='text' placeholder='Longitude' />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId='floatingInput'
                    label='Map zoom'
                    className='mb-3'
                  >
                    <Form.Control type='text' placeholder='Map zoom' />
                  </FloatingLabel>
                </Col>
              </Row>
              <div className={styles.formTitle}>Surroundings</div>
              <FloatingLabel
                controlId='floatingInput'
                label='Map zoom'
                className='mb-3'
              >
                <Form.Control type='text' placeholder='Map zoom' />
              </FloatingLabel>
              <Row>
                <Col>
                  <FloatingLabel
                    controlId='floatingInput'
                    label='Name'
                    className='mb-3'
                  >
                    <Form.Control type='text' placeholder='Latitude' />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId='floatingInput'
                    label='Content'
                    className='mb-3'
                  >
                    <Form.Control type='text' placeholder='Longitude' />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId='floatingInput'
                    label='Distance'
                    className='mb-3'
                  >
                    <Form.Control type='text' placeholder='Map zoom' />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId='floatingInput'
                    label='Select country'
                    className='mb-3'
                  >
                    <Form.Control type='text' placeholder='Map zoom' />
                  </FloatingLabel>
                </Col>
              </Row>
            </Form>
          </div>
        </Tab>
        <Tab index={2} value={value}>
          <div className={styles.content}>
            <div className={styles.formTitle}>Pricing</div>
          </div>
        </Tab>
        <Tab index={3} value={value}>
          <div className={styles.content}>
            <div className={styles.formTitle}>Attributes</div>
          </div>
        </Tab>
      </Box>
    </DashboardContainer>
  );
};

export default AddHotel;
