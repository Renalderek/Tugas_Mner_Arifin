import Layout from "../components/Layout";
import HeroSection from "../components/Section/HeroSection";
import CryptocurrencySection from "../components/Section/CryptocurrencySection";
import Footer from "../components/Footer";
import FaqSection from "../components/Section/FaqSection";
import BackToTopSection from "../components/Section/BackToTopSection";
export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <CryptocurrencySection />
      <FaqSection />
      <BackToTopSection />
      <Footer />
    </Layout>
  );
}
