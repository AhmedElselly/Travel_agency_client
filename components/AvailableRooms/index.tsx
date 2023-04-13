import React from "react";
import styles from "../../styles/AvailableRooms.module.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";
import WifiIcon from "@mui/icons-material/Wifi";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import BoyOutlinedIcon from "@mui/icons-material/BoyOutlined";
import CallMadeIcon from '@mui/icons-material/CallMade';

interface Props {
	title: string;
}

const AvailableRooms = ({title}: Props) => {
  return (
    <div className={`${styles.container} mt-5`}>
      <Container
        className={`border rounded p-4 d-flex flex-column justify-content-start`}
      >
        <div className={`${styles.subtitle} mb-2`}>{title}</div>
        <div className={`${styles.titlesContainer} p-3`}>
          <div className={styles.start}>
            <div className={styles.tableTitle}>Room Type</div>
            <div className={styles.tableTitle}>Benefits</div>
          </div>
          <div className={styles.middle}>
            <div className={styles.tableTitle}>Sleeps</div>
            <div className={styles.tableTitle}>Price for 5 nights</div>
            <div className={styles.tableTitleLast}>Select Rooms</div>
          </div>
          <div className={styles.end}></div>
        </div>
        <div className={`${styles.details} mt-4`}>
          <div className={styles.left}>
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src='https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
              />
            </div>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.iconContainer}>
                  <SmokeFreeIcon className={styles.featureIcon} />
                </div>
                <div className={styles.featureText}>Non-smoking rooms</div>
              </div>
              <div className={styles.feature}>
                <div className={styles.iconContainer}>
                  <WifiIcon className={styles.featureIcon} />
                </div>
                <div className={styles.featureText}>Free WiFi</div>
              </div>
              <div className={styles.feature}>
                <div className={styles.iconContainer}>
                  <SoupKitchenIcon className={styles.featureIcon} />
                </div>
                <div className={styles.featureText}>Kitchen</div>
              </div>
              <div className={styles.feature}>
                <div className={styles.iconContainer}>
                  <HealthAndSafetyIcon className={styles.featureIcon} />
                </div>
                <div className={styles.featureText}>Safety & security</div>
              </div>
            </div>
          </div>
          <div className={styles.middleDetails}>
            <div className={styles.middleInfo}>
              <div className={styles.wrapper}>
                <div className={styles.priceTitle}>Your price includes:</div>
                <div className={styles.benefits}>
                  <div className={styles.benefit}>
                    <div className={styles.benefitIconContainer}>
                      <CheckOutlinedIcon />
                    </div>
                    <div className={styles.text}>Pay at the hotel</div>
                  </div>
                  <div className={styles.benefit}>
                    <div className={styles.benefitIconContainer}>
                      <CheckOutlinedIcon />
                    </div>
                    <div className={styles.text}>
                      Pay nothing until March 30, 2022
                    </div>
                  </div>
                  <div className={styles.benefit}>
                    <div className={styles.benefitIconContainer}>
                      <CheckOutlinedIcon />
                    </div>
                    <div className={styles.text}>
                      Free cancellation before April 1, 2022
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.wrapperMiddle}>
                <BoyOutlinedIcon className={styles.personIcon} />
                <BoyOutlinedIcon className={styles.personIcon} />
              </div>
              <div className={styles.priceNights}>
                <div className={styles.price}>US$99</div>
                <div className={styles.priceCaption}>
                  Includes taxes and charges
                </div>
              </div>
              <div className={styles.selectRoomsWrapper}>
                <Form.Select size='sm' className={styles.select}>
                  <option className={styles.option}>{`1 (US$ 3,120)`}</option>
                  <option className={styles.option}>{`1 (US$ 3,120)`}</option>
                  <option className={styles.option}>{`1 (US$ 3,120)`}</option>
                  <option className={styles.option}>{`1 (US$ 3,120)`}</option>
                </Form.Select>
              </div>
            </div>
            <div
              className={`my-4`}
              style={{ background: "rgba(0,0,0,0.1)", height: 1 }}
            ></div>
            <div className={styles.middleInfo}>
              <div className={styles.wrapper}>
                <div className={styles.priceTitle}>Your price includes:</div>
                <div className={styles.benefits}>
                  <div className={styles.benefit}>
                    <div className={styles.benefitIconContainer}>
                      <CheckOutlinedIcon />
                    </div>
                    <div className={styles.text}>Pay at the hotel</div>
                  </div>
                  <div className={styles.benefit}>
                    <div className={styles.benefitIconContainer}>
                      <CheckOutlinedIcon />
                    </div>
                    <div className={styles.text}>
                      Pay nothing until March 30, 2022
                    </div>
                  </div>
                  <div className={styles.benefit}>
                    <div className={styles.benefitIconContainer}>
                      <CheckOutlinedIcon />
                    </div>
                    <div className={styles.text}>
                      Free cancellation before April 1, 2022
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.wrapperMiddle}>
                <BoyOutlinedIcon className={styles.personIcon} />
                <BoyOutlinedIcon className={styles.personIcon} />
              </div>
              <div className={styles.priceNights}>
                <div className={styles.price}>US$99</div>
                <div className={styles.priceCaption}>
                  Includes taxes and charges
                </div>
              </div>
              <div className={styles.selectRoomsWrapper}>
                <Form.Select size='sm' className={styles.select}>
                  <option className={styles.option}>{`1 (US$ 3,120)`}</option>
                  <option className={styles.option}>{`1 (US$ 3,120)`}</option>
                  <option className={styles.option}>{`1 (US$ 3,120)`}</option>
                  <option className={styles.option}>{`1 (US$ 3,120)`}</option>
                </Form.Select>
              </div>
            </div>
            <div
              className={`my-4`}
              style={{ background: "rgba(0,0,0,0.1)", height: 1 }}
            ></div>
            <div className={styles.middleInfo}>
              <div className={styles.wrapper}>
                <div className={styles.priceTitle}>Your price includes:</div>
                <div className={styles.benefits}>
                  <div className={styles.benefit}>
                    <div className={styles.benefitIconContainer}>
                      <CheckOutlinedIcon />
                    </div>
                    <div className={styles.text}>Pay at the hotel</div>
                  </div>
                  <div className={styles.benefit}>
                    <div className={styles.benefitIconContainer}>
                      <CheckOutlinedIcon />
                    </div>
                    <div className={styles.text}>
                      Pay nothing until March 30, 2022
                    </div>
                  </div>
                  <div className={styles.benefit}>
                    <div className={styles.benefitIconContainer}>
                      <CheckOutlinedIcon />
                    </div>
                    <div className={styles.text}>
                      Free cancellation before April 1, 2022
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.wrapperMiddle}>
                <BoyOutlinedIcon className={styles.personIcon} />
                <BoyOutlinedIcon className={styles.personIcon} />
              </div>
              <div className={styles.priceNights}>
                <div className={styles.price}>US$99</div>
                <div className={styles.priceCaption}>
                  Includes taxes and charges
                </div>
              </div>
              <div className={styles.selectRoomsWrapper}>
                <Form.Select size='sm' className={styles.select}>
                  <option className={styles.option}>{`1 (US$ 3,120)`}</option>
                  <option className={styles.option}>{`1 (US$ 3,120)`}</option>
                  <option className={styles.option}>{`1 (US$ 3,120)`}</option>
                  <option className={styles.option}>{`1 (US$ 3,120)`}</option>
                </Form.Select>
              </div>
              <div
                className={`mt-5`}
                style={{ background: "rgba(0,0,0,0.1)", height: 1 }}
              ></div>
            </div>
          </div>
          <div className={styles.right}>
						<div className={styles.rightTop}>
							<div className={styles.roomsCount}>3 rooms for</div>
							<div className={styles.price}>US$99</div>
						</div>
						<div className={styles.rightMiddle}>
							<div className={styles.button}>
								<div className={styles.btnText}>Reserve</div>
								<div className={styles.btnIcon}>
									<CallMadeIcon/>
								</div>
							</div>
						</div>
						<div className={styles.rightBottom}>
							<div>You‘ll be taken to the next step</div>
							<ul>
								<li>Confirmation is immediate</li>
								<li>No registration required</li>
								<li>No booking or credit card fees!</li>
							</ul>
						</div>
					</div>
        </div>
      </Container>
    </div>
  );
};

export default AvailableRooms;
