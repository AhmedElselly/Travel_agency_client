import React from "react";
import styles from "@/styles/Facility.module.css";
import CheckIcon from "@mui/icons-material/Check";

const Facility = ({ icon, text }: any) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.wrapper} mb-2`}>
        <div className={styles.iconWrapper}>{icon()}</div>
        <div className={styles.text}>{text}</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.subFacility}>
          <div className={styles.subIcon}>
            <CheckIcon />
          </div>
          <div className={styles.subtext}>Towels</div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.subFacility}>
          <div className={styles.subIcon}>
            <CheckIcon />
          </div>
          <div className={styles.subtext}>Bath or shower</div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.subFacility}>
          <div className={styles.subIcon}>
            <CheckIcon />
          </div>
          <div className={styles.subtext}>Private bathroom</div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.subFacility}>
          <div className={styles.subIcon}>
            <CheckIcon />
          </div>
          <div className={styles.subtext}>Toilet</div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.subFacility}>
          <div className={styles.subIcon}>
            <CheckIcon />
          </div>
          <div className={styles.subtext}>Free toiletries</div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.subFacility}>
          <div className={styles.subIcon}>
            <CheckIcon />
          </div>
          <div className={styles.subtext}>Hairdryer</div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.subFacility}>
          <div className={styles.subIcon}>
            <CheckIcon />
          </div>
          <div className={styles.subtext}>Bath</div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
