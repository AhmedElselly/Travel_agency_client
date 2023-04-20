import React from "react";
import styles from "@/styles/ExtraHealth.module.css";

const ExtraHealth = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <img
            src='https://gotrip-next.vercel.app/img/icons/health.svg'
            alt='extra health'
          />
        </div>
				<div className={styles.right}>
					<div className={styles.title}>Extra health & safety measures</div>
					<div className={styles.text}>This property has taken extra health and hygiene measures to ensure that your safety is their priority</div>
				</div>
      </div>
    </div>
  );
};

export default ExtraHealth;
