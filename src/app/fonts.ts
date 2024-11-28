import { Poppins, Raleway } from "next/font/google";

export const poppins = Poppins({
  weight: ["500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const raleway = Raleway({
  weight: ["200", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});
