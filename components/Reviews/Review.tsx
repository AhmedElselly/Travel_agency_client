import React from "react";
import styles from "../../styles/Review.module.css";
import { Avatar } from "@mui/material";
import Moment from "react-moment";
import { stringAvatar } from "../helpers";

const Review = () => {
  const createdAt = new Date(
    "Mon Apr 17 2023 12:24:06 GMT+0200 (Eastern European Standard Time)"
  );
  return (
    <div className={styles.container}>
      <div className={styles.avatarContainer}>
        <Avatar {...stringAvatar("Kent Dodds")} />
        <div className={styles.usernameAndDate}>
          <div className={styles.username}>Samy</div>
          <div className={styles.date}>
            <Moment fromNow>{createdAt}</Moment>
          </div>
        </div>
      </div>
      <div className={styles.rating}>9.2 Superb</div>
      <div className={styles.text}>
        Nice two level apartment in great London location. Located in quiet
        small street, but just 50 meters from main street and bus stop. Tube
        station is short walk, just like two grocery stores.
      </div>
      <div className={styles.images}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={
              "https://images.unsplash.com/photo-1621502863666-e47e3bd2547b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }
            alt={"amazing"}
          />
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={
              "https://images.unsplash.com/photo-1612214103141-0212f15adeb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80"
            }
            alt={"amazing"}
          />
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={
              "https://images.unsplash.com/photo-1593031376239-a2551cc09c3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            }
            alt={"amazing"}
          />
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={
              "https://images.unsplash.com/photo-1601183438081-517f63b51b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }
            alt={"amazing"}
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
