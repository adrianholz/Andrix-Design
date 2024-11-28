import { Livvic, Lora, Poppins, Raleway, Roboto_Mono } from "next/font/google";

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

export const lora = Lora({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const livvic = Livvic({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-livvic",
  display: "swap",
});

export const robotoMono = Roboto_Mono({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-robotoMono",
  display: "swap",
});
