import React from "react";
import Sheader from "../components/Sheader";
import HeaderOptions from "../components/HeaderOptions";
import Response from "../Response";
import { useRouter } from "next/router";
import Head from "next/head";
import SearchResults from "../components/SearchResults";

function Search({ results }) {
  const router = useRouter();
  return (
    <div className="bg-white h-full w-full p-2">
      <Head>
        <title>{router.query.input} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* search header */}
      <Sheader />
      <section className="mx-auto w-full h-full sm:pl-[5%] md:pl-[14%] lg:pl-44">
        <HeaderOptions />
        <SearchResults results={results} />
      </section>
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummy = false;

  const startIndex = context.query.start || "0";

  const data = useDummy
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.input}&start=${startIndex}`
      ).then((res) => res.json());

  return {
    props: {
      results: data,
    },
  };
}
