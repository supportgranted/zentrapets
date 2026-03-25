import Hero from "@/components/Hero";
import TrustBlock from "@/components/TrustBlock";
import Products from "@/components/Products";
import CentralMessage from "@/components/CentralMessage";
import B2B from "@/components/B2B";
import Transparency from "@/components/Transparency";
import Footer from "@/components/Footer";
import DossierTab from "@/components/DossierTab";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <>
      <DossierTab />
      <main>
        <Hero />
        <TrustBlock />
        <Products />
        <CentralMessage />
        <B2B />
        <ContactForm />
        <Transparency />
      </main>
      <Footer />
    </>
  );
}
