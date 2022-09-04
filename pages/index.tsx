import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen justify-between items-center bg-white w-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Body */}
      <Body />
      {/* Footer  */}
      <Footer />
    </div>
  );
};

export default Home;
