import React from "react";
import styles from "@/styles/Dashboard.module.css";
import { Col, Row } from "react-bootstrap";
import ExploreIcon from "@mui/icons-material/Explore";
import MonitorIcon from "@mui/icons-material/Monitor";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Link from "next/link";

const DashboardContainer = (props: any) => {
  return (
    <div className={`${styles.container}`}>
      <Row className={`${styles.wrapper}`}>
        <Col md={2} lg={2} sm={3}>
          <Link
            href='/dashboard'
            className={`${styles.linkActive} d-flex align-items-center gap-2 py-3 px-4 ms-2`}
          >
            <ExploreIcon sx={{ color: "#3554d1" }} />
            <div className={styles.linkActive}>Dashboard</div>
          </Link>
          <Link
            href='/dashboard'
            className={`${styles.link} d-flex align-items-center gap-2 py-3 px-4 ms-2`}
          >
            <MonitorIcon sx={{ color: "#3554d1" }} />
            <div className={styles.linkText}>Booking history</div>
          </Link>
          <Link
            href='/dashboard/add-hotel'
            className={`${styles.link} d-flex align-items-center gap-2 py-3 px-4 ms-2`}
          >
            <AddBusinessIcon sx={{ color: "#3554d1" }} />
            <div className={styles.linkText}>Add hotel</div>
          </Link>
          <Link
            href='/dashboard'
            className={`${styles.link} d-flex align-items-center gap-2 py-3 px-4 ms-2`}
          >
            <TurnedInIcon sx={{ color: "#3554d1" }} />
            <div className={styles.linkText}>Wishlist</div>
          </Link>
          <Link
            href='/dashboard'
            className={`${styles.link} d-flex align-items-center gap-2 py-3 px-4 ms-2`}
          >
            <SettingsIcon sx={{ color: "#3554d1" }} />
            <div className={styles.linkText}>Settings</div>
          </Link>

          <Link
            href='/dashboard'
            className={`${styles.link} d-flex align-items-center gap-2 py-3 px-4 ms-2`}
          >
            <LogoutIcon sx={{ color: "#3554d1" }} />
            <div className={styles.linkText}>Logout</div>
          </Link>
        </Col>
        {/* CONTENT OF DASHBOARD */}
        <Col md={9} lg={9} sm={12}>
          {props.children}
        </Col>
      </Row>
    </div>
  );
};

export default DashboardContainer;
