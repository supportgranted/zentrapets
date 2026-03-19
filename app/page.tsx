import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBlock from "@/components/TrustBlock";
import Products from "@/components/Products";
import CentralMessage from "@/components/CentralMessage";
import B2B from "@/components/B2B";
import Transparency from "@/components/Transparency";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBlock />
        <Products />
        <CentralMessage />
        <B2B />
        <Transparency />
      </main>
      <Footer />
    </>
  );
}
