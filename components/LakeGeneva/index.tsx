import React from "react";
import styles from "../../styles/LakeGeneva.module.css";

const LakeGeneva = () => {
  const images = [
    "https://images.unsplash.com/photo-1595792666088-32037ffc33c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    "https://images.unsplash.com/photo-1624026966771-20c609411e66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1127&q=80",
    "https://images.unsplash.com/photo-1634842543395-1f502123e081?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
		'https://images.unsplash.com/photo-1530878902700-5ad4f9e4c318?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80'
  ];
  return (
    <div className={styles.container}>
      <div
        className={styles.banner}
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${images[3]})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div>
    </div>
  );
};

export default LakeGeneva;
