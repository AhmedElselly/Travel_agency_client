import Link from "next/link";
import React from "react";
import styles from "../../styles/Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
				<img className={styles.image} src="https://themes.themegoods.com/altair/demo/wp-content/themes/altair/images/logo@2x_white.png" />
			</div>
      <div className={styles.center}>
				<Link className={styles.link} href='/'>Home</Link>
				<Link className={styles.link} href='/tours'>Tours</Link>
				<Link className={styles.link} href='/gallery'>Gallery</Link>
				<Link className={styles.link} href='/blog'>Blog</Link>
				<Link className={styles.link} href='/shop'>Shop</Link>
			</div>
    </div>
  );
};

export default Navbar;
