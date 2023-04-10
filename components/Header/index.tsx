import Image from "next/image";
import React from "react";
import Carousel from "react-material-ui-carousel";
import styles from "../../styles/Header.module.css";

interface Item {
  country: string;
  city: string;
  description: string;
  image: string;
}

type Items = Item[];

const Header: React.FC = () => {
  var items: Items = [
    {
      country: "France",
      city: "Paris",
      description:
        "Arctic temperatures and several meters of snow are no match for the natural impressions and cultural twist that will warm your soul while dog sledding in Greenland.",
      image: "/images/paris.jpg",
    },
    {
      country: "Italy",
      city: "Venezia",
      description:
        "Arctic temperatures and several meters of snow are no match for the natural impressions and cultural twist that will warm your soul while dog sledding in Greenland.",
      image: "/images/venezia.jpg",
    },
  ];

  const generateImages = () => {
    return items?.map((item) => {
      return (
        <div
          style={{
            position: "relative",
						backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${item.image})`,
						height: '100vh',
						backgroundSize: '100% 100%'
          }}
        >
          <div className={styles.caption}>
            <div className={styles.country}>{item.country}</div>
            <div className={styles.city}>{item.city}</div>
            <div className={styles.description}>{item.description}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={styles.container}>
      <Carousel
        IndicatorIcon={false}
        autoPlay={true}
        duration={2000}
        stopAutoPlayOnHover={true}
        fullHeightHover={true}
        animation='slide'
        navButtonsAlwaysVisible={true}
      >
        {generateImages()}
      </Carousel>
    </div>
  );
};

export default Header;
