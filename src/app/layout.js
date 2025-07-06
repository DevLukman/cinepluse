import ReduxProvider from "@/store/ReduxProvider";
import { Bebas_Neue, Geist_Mono, Nosifer } from "next/font/google";
import "./globals.css";

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
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
