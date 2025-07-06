import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Smoother from "@/components/Smoother";

export default function Template({ children }) {
  return (
    <>
      <Navigation />
      <Smoother>
        {children}
        <Footer />
      </Smoother>
    </>
  );
}
