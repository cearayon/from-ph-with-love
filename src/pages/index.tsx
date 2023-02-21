import Button from "components/core/Button";
import { Footer } from "components/core/Footer";
import { PackageItem } from "components/core/PackageItem";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { useRef } from "react";

const menu = [
  {
    name: "Sweetest Package",
    description:
      "Turon, ensaymada, and Leche Flan - perfect dessert for sharing",
    img: "/sweetest package.png",
  },
  {
    name: "Kakanin Package",
    description: "Ube calamay, puto and sapin-sapin for sharing",
    img: "/kakanin package.png",
  },
  {
    name: "Merienda Package",
    description: "Halo-halo, bananaque and spanish bread for sharing",
    img: "/merienda package.png",
  },
  {
    name: "Sweetest Drinks Package",
    description: "Taho and sago't gulaman for sharing",
    img: "/sweetest drinks package.png",
  },
];

const Home: NextPage = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (footerRef.current != null)
  //     // ⛔️ Object is possibly 'null'.ts(2531)
  //     footerRef.current.focus();
  // }, []);

  return (
    <div>
      <Head>
        <title>From PH with Love</title>
        <meta property="og:title" content="From PH with Love" key="title" />
      </Head>

      <Script defer src="/your-path-to-fontawesome/js/brands.js"></Script>
      <Script defer src="/your-path-to-fontawesome/js/solid.js"></Script>
      <Script defer src="/your-path-to-fontawesome/js/fontawesome.js"></Script>

      <section className="grid bg-pink-100 md:grid-cols-[minmax(500px,_1fr)_auto]">
        <div className="mb-2 flex flex-col items-center justify-center gap-2 p-8">
          <h1 className="text-center text-6xl text-rose-600">
            From PH with Love
          </h1>
          <p className="text-center text-xl text-rose-600">
            authentic and homemade Filipino desserts and goodies delivered to
            you
          </p>
          <Button
            text="Order Now!"
            onClick={() => {
              if (footerRef.current != null) footerRef.current.scrollIntoView();
            }}
          />
        </div>
        <div className="relative">
          <Image src="/hero.jpg" alt="placeholder" height="800" width="800" />
        </div>
      </section>

      <PackageItem
        name={menu[0].name}
        description={menu[0].description}
        img={menu[0].img}
      />
      <PackageItem
        reversed
        name={menu[1].name}
        description={menu[1].description}
        img={menu[1].img}
      />
      <PackageItem
        name={menu[2].name}
        description={menu[2].description}
        img={menu[2].img}
      />
      <PackageItem
        reversed
        name={menu[3].name}
        description={menu[3].description}
        img={menu[3].img}
      />
      <section className="flex flex-col items-center bg-pink-100 p-4">
        <h2 className="text-6xl text-rose-600">What To Expect</h2>
        <div className="flex">
          <div className="rounded-full"></div>

          <div className="rounded-full"></div>

          <div className="rounded-full"></div>
        </div>
      </section>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
