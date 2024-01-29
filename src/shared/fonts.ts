// import { Lato } from "next/font/google";
import localFont from "next/font/local";

/*
export const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});
*/

export const lato = localFont({
  src: [
    {
      path: "./Lato-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Lato-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Lato-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lato",
});
