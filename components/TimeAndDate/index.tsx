import React, { FormEvent, SyntheticEvent, useState } from "react";
import { Button, FloatingLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import styles from "../../styles/TimeAndDate.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TimeAndDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleChange = (e: SyntheticEvent) => {};

  const handleDateStartChange = (date: Date) => {
    setStartDate(date);
  };
  const handleDateEndChange = (date: Date) => {
    setEndDate(date);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };
  return (
    <div className={styles.container}>
      <div>
        <Form onSubmit={handleSubmit} className={styles.form}>
          <FloatingLabel
            controlId='floatingInput'
            label='City, region'
            className={styles.formGroup}
            style={{ width: 250 }}
          >
            <Form.Control
              type='text'
              onChange={handleChange}
              placeholder='City, region'
            />
          </FloatingLabel>
          <div className={styles.dateWrapper}>
            <DatePicker
              // as={DatePicker}
              dateFormat={"Pp"}
              selected={startDate}
              showTimeSelect
              onChange={handleDateStartChange}
              className={`form-control ${styles.datepicker}`}
            />
            <DatePicker
              // as={DatePicker}
              dateFormat={"Pp"}
              selected={endDate}
              showTimeSelect
              onChange={handleDateEndChange}
              className={`form-control ${styles.datepicker}`}
            />
          </div>
          <FloatingLabel
            controlId='floatingInput'
            label='Max budget'
            className={styles.formGroup}
            style={{ width: 250 }}
          >
            <Form.Control
              type='text'
              onChange={handleChange}
              placeholder='Max budget'
            />
          </FloatingLabel>
          <Button className={styles.button}>Search</Button>
        </Form>
      </div>
    </div>
  );
};

export default TimeAndDate;
