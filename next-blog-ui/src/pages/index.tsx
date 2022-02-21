import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SignInForm from "@next/modules/authentication/components/login";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <SignInForm />
    </div>
  );
};

export default Home;
