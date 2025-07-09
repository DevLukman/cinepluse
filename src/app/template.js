import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
export default function Template({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
