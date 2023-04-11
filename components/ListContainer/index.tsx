import React, { SyntheticEvent, useState } from "react";
import { Container, FloatingLabel, Form } from "react-bootstrap";
import styles from "../../styles/ListContainer.module.css";

type ListProps = {
  children: React.ReactNode;
};

const ListContainer = (props: ListProps) => {
  const handleChange = (e: SyntheticEvent) => {};
  return (
    <Container className={styles.container}>
      <div className={styles.left}>
        <div className={styles.title}>Search by property name</div>
        <Form className={`mt-3`}>
          <FloatingLabel
            controlId='floatingInput'
            label='City, region'
            className={styles.formGroup}
            style={{ color: "gray" }}
          >
            <Form.Control
              type='text'
              onChange={handleChange}
              placeholder='City, region'
              className={styles.input}
            />
          </FloatingLabel>
        </Form>
        <hr className={`mt-4`} />
        <div className={styles.section}>
          <div className={styles.title}>Deals</div>
          <Form className={`mt-3`}>
            <Form.Group className={`mb-3 ${styles.optionGroup}`}>
              <Form.Check type='checkbox' className={styles.option} id='free'/>
							<Form.Label className={styles.label} htmlFor='free'>Free cancellation</Form.Label>
            </Form.Group>
            <Form.Group className={`mb-3 ${styles.optionGroup}`}>
              <Form.Check type='checkbox' className={styles.option} id='reserve' />
							<Form.Label className={styles.label} htmlFor='reserve'>Reserve now, pay at stay</Form.Label>
            </Form.Group>
						<Form.Group className={`mb-3 ${styles.optionGroup}`}>
              <Form.Check type='checkbox' className={styles.option} id='properties' />
							<Form.Label className={styles.label} htmlFor='properties'>Properties with special offers</Form.Label>
            </Form.Group>
          </Form>
        </div>
        <hr className={`mt-4`} />
        <div className={styles.section}>
          <div className={styles.title}>Popular Filters</div>
          <Form className={`mt-3`}>
            <Form.Group className={`mb-3 ${styles.optionGroup}`}>
              <Form.Check type='checkbox' className={styles.option} id='breakfast' />
							<Form.Label className={styles.label} htmlFor='breakfast'>Breakfast included</Form.Label>
            </Form.Group>
            <Form.Group className={`mb-3 ${styles.optionGroup}`}>
              <Form.Check type='checkbox' className={styles.option} id='romantic'/>
							<Form.Label className={styles.label} htmlFor='romantic'>Romantic</Form.Label>
            </Form.Group>
						<Form.Group className={`mb-3 ${styles.optionGroup}`}>
              <Form.Check type='checkbox' className={styles.option} id='airport'/>
							<Form.Label className={styles.label} htmlFor='airport'>Airport transfer</Form.Label>
            </Form.Group>
						<Form.Group className={`mb-3 ${styles.optionGroup}`}>
              <Form.Check type='checkbox' className={styles.option} id='wifi'/>
							<Form.Label className={styles.label} htmlFor='wifi'>WiFi Included</Form.Label>
            </Form.Group>
						<Form.Group className={`mb-3 ${styles.optionGroup}`}>
              <Form.Check type='checkbox' className={styles.option} id='stars'/>
							<Form.Label className={styles.label} htmlFor='stars'>5 Star</Form.Label>
            </Form.Group>
          </Form>
        </div>
      </div>
      <div className={styles.right}>{props.children}</div>
    </Container>
  );
};

export default ListContainer;
