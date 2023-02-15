import { Button } from "antd";
import { Card } from "components/core/Card";
import { type NextPage } from "next";
import Image from "next/image";

const menu = [
  {
    id: 1,
    packageName: "Sweetest Package",
    packageItems:
      "Turon, ensaymada, and Leche Flan - perfect dessert for sharing",
    packageImg: "/sweetest package.jpg",
  },
  {
    id: 2,
    packageName: "Kakanin Package",
    packageItems: "Ube calamay, puto and sapin-sapin for sharing",
    packageImg: "/kakanin package.jpg",
  },
  {
    id: 3,
    packageName: "Merienda Package",
    packageItems: "Halo-halo, bananaque and spanish bread for sharing",
    packageImg: "/merienda package.jpg",
  },
  {
    id: 4,
    packageName: "Sweetest Drinks Package",
    packageItems: "Taho and sago't gulaman for sharing",
    packageImg: "/sweet drinks package.jpg",
  },
];

const mappedMenu = menu.map((menuItem) => (
  <Card key={menu.id} menu={menuItem} />
));

const Home: NextPage = () => {
  return (
    <div>
      <div className="flex w-full  flex-col items-center justify-around bg-pink-100 p-5 lg:flex-row">
        <Image src="/favicon.ico" alt="placeholder" width="40" height="40" />
        <h2 className="text-4xl text-rose-600">From PH with Love</h2>
        <Button
          className="border-rose-600 text-rose-600"
          size="large"
          shape="round"
          onClick={() => {
            alert("clicked");
          }}
        >
          Order Here
        </Button>
      </div>
      <div className=" bg-pink-300">{mappedMenu}</div>
    </div>
  );
};

export default Home;
