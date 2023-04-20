import React from "react";
import styles from "@/styles/Surrounding.module.css";
import { FaLocationArrow } from "react-icons/fa";

const Surrounding = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.iconContainer}>
          <FaLocationArrow size={10} />
        </div>
        <div className={styles.title}>What's nearby</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.text}>Royal Pump Room Museum</div>
        <div className={styles.distance}>0.1 km</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.text}>Harrogate Turkish Baths</div>
        <div className={styles.distance}>0.1 km</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.text}>Royal Hall Theatre</div>
        <div className={styles.distance}>0.1 km</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.text}>Harrogate Theatre</div>
        <div className={styles.distance}>0.1 km</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.text}>Harrogate Library</div>
        <div className={styles.distance}>0.1 km</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.text}>The Valley Gardens</div>
        <div className={styles.distance}>0.1 km</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.text}>Harrogate District Hospital</div>
        <div className={styles.distance}>0.1 km</div>
      </div>
    </div>
  );
};

export default Surrounding;
