import "./globals.css";
import {
  poppins,
  raleway,
  lora,
  livvic,
  robotoMono,
  vudotronic,
} from "./fonts";
import Transition from "../components/ui/Transition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${raleway.variable} ${lora.variable} ${livvic.variable} ${robotoMono.variable} ${vudotronic.variable}`}
    >
      <body>
        <Transition />
        {children}
      </body>
    </html>
  );
}
