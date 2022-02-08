import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>LaMark</title>
        </Head>
        <body className="flex w-full  justify-center items-center bg-red-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
