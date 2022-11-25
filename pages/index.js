import Head from "next/head";
import Left from "/components/Left";
import Right from "/components/Right";
export default function Home() {
  return (
    <body className=" bg-slate-100 ">
      <body>
        <Head>
          <title>Chebanenko Aleksandr</title>
        </Head>
      </body>
      <main>
        <div className="mx-auto w-auto md:w-[960px] flex flex-col-reverse md:flex-row">
          <Left />
          <Right />
        </div>
      </main>
    </body>
  );
}
