import { Bebas_Neue } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { Nosifer } from "next/font/google";

const BebasFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});
const GeistFont = Geist_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
});
const NosiferFont = Nosifer({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-nosifer",
});
import "./globals.css";
import Navigation from "@/components/Navigation";
import ReduxProvider from "@/store/ReduxProvider";
export const metadata = {
  title: "CINEPLUSE | Home",
  description: "CinePluse a movie website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${BebasFont.variable} ${GeistFont.variable} ${NosiferFont.variable}`}
      >
        <Navigation />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
