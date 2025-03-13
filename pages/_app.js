import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mansi Portfolio</title>  {/* ✅ Title yaha change karein */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

