import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Fragment } from "react";
import Header from "@/components/Header";
import TimeAndDate from "@/components/TimeAndDate";
import BestOffers from "@/components/BestOffers";
import LakeGeneva from "@/components/LakeGeneva";


export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Travel Agency</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header/>
      <TimeAndDate />
      <hr/>
      <BestOffers/>
      <LakeGeneva/>
    </Fragment>
  );
}