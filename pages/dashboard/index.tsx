import React from "react";
import styles from "@/styles/Dashboard.module.css";
import { Col, Container, Row } from "react-bootstrap";
import DashboardContainer from "@/components/DashboardContainer";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Test",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const Dashboard = () => {
  const features = [
    {
      title: "pending",
      total: 12800,
      description: "total pendings",
      icon: "https://gotrip-next.vercel.app/img/dashboard/icons/1.svg",
    },
    {
      title: "earnings",
      total: 14200,
      description: "total earnings",
      icon: "https://gotrip-next.vercel.app/img/dashboard/icons/2.svg",
    },
    {
      title: "bookings",
      total: 8100,
      description: "total hotel bookings",
      icon: "https://gotrip-next.vercel.app/img/dashboard/icons/3.svg",
    },
    {
      title: "services",
      total: 22786,
      description: "total bookable services",
      icon: "https://gotrip-next.vercel.app/img/dashboard/icons/4.svg",
    },
  ];

  function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => getRandomArbitrary(-1000, 1000)),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const generateFeatures = () => {
    return features?.map((feature, i) => {
      return (
        <Col key={i} md={3} lg={3} sm={12} className={styles.feCard}>
          <div className={styles.left}>
            <div className={styles.feTitle}>{feature.title}</div>
            <div className={styles.total}>${feature.total.toLocaleString('en-US')}</div>
            <div className={styles.feDescription}>{feature.description}</div>
          </div>
          <div className={styles.right}>
            <div className={styles.iconContainer}>
              <img src={feature.icon} className={styles.icon} />
            </div>
          </div>
        </Col>
      );
    });
  };

  return (
    <DashboardContainer>
      <div className={styles.childrenContainer}>
        <div className={`${styles.title}`}>Dashboard</div>
        <div className={`text-muted`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
        <Row className={`mt-5 gap-4`}>{generateFeatures()}</Row>
        <Row>
          <Col md={8} lg={8} sm={12}>
            <Line options={options} data={data} />
          </Col>
        </Row>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
