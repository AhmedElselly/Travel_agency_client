import React, { SyntheticEvent, useState } from "react";
import { Container, FloatingLabel, Form } from "react-bootstrap";
import styles from "../../styles/ListContainer.module.css";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const PriceSlider = styled(Slider)(({ theme }) => ({
  color: "#3554d1",
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    border: "2px solid #3554d1",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "#3554d1",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-track": {
    height: 5,
  },
  "& .MuiSlider-rail": {
    color: "#3554d1",
    opacity: "#3554d1",
    height: 5,
  },
}));

type ListProps = {
  children: React.ReactNode;
};

const ListContainer = (props: ListProps) => {
  const [value, setValue] = useState([27, 50]);
  const handleChange = (e: SyntheticEvent) => {};
  const handleSliderChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
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
              <Form.Check type='checkbox' className={styles.option} id='free' />
              <Form.Label className={styles.label} htmlFor='free'>
                Free cancellation
              </Form.Label>
            </Form.Group>
            <Form.Group className={`mb-3 ${styles.optionGroup}`}>
              <Form.Check
                type='checkbox'
                className={styles.option}
                id='reserve'
              />
              <Form.Label className={styles.label} htmlFor='reserve'>
                Reserve now, pay at stay
              </Form.Label>
            </Form.Group>
            <Form.Group className={`mb-3 ${styles.optionGroup}`}>
              <Form.Check
                type='checkbox'
                className={styles.option}
                id='properties'
              />
              <Form.Label className={styles.label} htmlFor='properties'>
                Properties with special offers
              </Form.Label>
            </Form.Group>
          </Form>
        </div>
        <hr className={`mt-4`} />
        <div className={styles.section}>
          <div className={styles.title}>Popular Filters</div>
          <Form className={`mt-3`}>
            <Form.Group className={`mb-3 ${styles.optionGroup}`}>
              <Form.Check
                type='checkbox'
                className={styles.option}
                id='breakfast'
              />
              <Form.Label className={styles.label} htmlFor='breakfast'>
                Breakfast included
              </Form.Label>
            </Form.Group>
            <Form.Group className={`mb-3 ${styles.optionGroup}`}>
              <Form.Check
                type='checkbox'
                className={styles.option}
                id='romantic'
              />
              <Form.Label className={styles.label} htmlFor='romantic'>
                Romantic
              </Form.Label>
            </Form.Group>
            <Form.Group className={`mb-3 ${styles.optionGroup}`}>
              <Form.Check
                type='checkbox'
                className={styles.option}
                id='airport'
              />
              <Form.Label className={styles.label} htmlFor='airport'>
                Airport transfer
              </Form.Label>
            </Form.Group>
            <Form.Group className={`mb-3 ${styles.optionGroup}`}>
              <Form.Check type='checkbox' className={styles.option} id='wifi' />
              <Form.Label className={styles.label} htmlFor='wifi'>
                WiFi Included
              </Form.Label>
            </Form.Group>
            <Form.Group className={`mb-3 ${styles.optionGroup}`}>
              <Form.Check
                type='checkbox'
                className={styles.option}
                id='stars'
              />
              <Form.Label className={styles.label} htmlFor='stars'>
                5 Star
              </Form.Label>
            </Form.Group>
          </Form>
        </div>
        <hr />
        <div className={styles.section}>
          <div className={`${styles.title} mb-4`}>Nightly Price</div>
          <div className='d-flex gap-1' style={{ color: "#051036" }}>
            <div>${value[0] * 100}</div>
            <div>-</div>
            <div>${value[1] * 100}</div>
          </div>
          <PriceSlider
            getAriaLabel={() => "Price range"}
            value={value}
            onChange={handleSliderChange}
            sx={{ mt: 2 }}
          />
        </div>
        <hr />
        <div className={styles.section}>
          <div className={styles.title}>Guest Rating</div>
          <Form className={`mt-3`}>
            <Form.Group className={styles.optionGroup}>
              <Form.Check type='radio' onChange={handleChange} id='any'/>
							<Form.Label htmlFor="any" className={`m-0`}>Any</Form.Label>
            </Form.Group>
            <Form.Group className={styles.optionGroup}>
              <Form.Check type='radio' onChange={handleChange} id='wonderful' />
							<Form.Label htmlFor="wonderful" className={`m-0`}>Wondeful 4.5+</Form.Label>
            </Form.Group>
            <Form.Group className={styles.optionGroup}>
              <Form.Check type='radio' onChange={handleChange} id='verygood' />
							<Form.Label htmlFor="verygood" className={`m-0`}>Very good 4+</Form.Label>
            </Form.Group>
            <Form.Group className={styles.optionGroup}>
              <Form.Check type='radio' onChange={handleChange} id='good' />
							<Form.Label htmlFor="good" className={`m-0`}>Good 3.5+</Form.Label>
            </Form.Group>
          </Form>
        </div>
      </div>
      <div className={styles.right}>{props.children}</div>
    </Container>
  );
};

export default ListContainer;
