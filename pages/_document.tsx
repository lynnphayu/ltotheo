import { Head, Html, Main, NextScript } from "next/document";

const Document = () => (
  <Html>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      ></link>
      {/* <link href="https://unpkg.com/pattern.css" rel="stylesheet"></link> */}
    </Head>

    <body className="bg-neutral-900 text-white">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
