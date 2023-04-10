import React from "react";
import styles from "../../styles/LakeGeneva.module.css";

const LakeGeneva = () => {
  const images = [
    "https://images.unsplash.com/photo-1595792666088-32037ffc33c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    "https://images.unsplash.com/photo-1624026966771-20c609411e66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1127&q=80",
    "https://images.unsplash.com/photo-1634842543395-1f502123e081?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    "https://images.unsplash.com/photo-1530878902700-5ad4f9e4c318?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80",
    "https://images.unsplash.com/photo-1598994333517-52f73f80c27d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ];
  return (
    <div className={`${styles.container}`}>
      <div
        className={styles.banner}
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${images[4]})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      ></div>
      <div className={styles.wrapper}>
        <div className={styles.title}>LAKE GENEVA SWITZERLAND</div>
        <div className={styles.text}>
          Lake Geneva is the largest body of water in Switzerland, and greatly
          exceeds in size all others that are connected with the main valleys of
          the Alps.
        </div>
      </div>
    </div>
  );
};

export default LakeGeneva;
