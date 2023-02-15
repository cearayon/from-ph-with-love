import { type AppType } from "next/dist/shared/lib/utils";

import { Roboto as Ultra } from "@next/font/google";
import "../styles/globals.css";

const ultra = Ultra({
  subsets: ["latin"],
  weight: ["400"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={ultra.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
