import React from "react";

import Layout from "../components/Layout";
import HeroSection from "../components/Section/HeroSection";
import CryptocurrencySection from "../components/Section/CryptocurrencySection";
import Footer from "../components/Footer";
import BuyAndTradeSection from "../components/Section/BuyAndTradeSection";
import PartnerSection from "../components/section/PartnerSection";

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <CryptocurrencySection />
      <BuyAndTradeSection />
      <PartnerSection />
      <Footer />
    </Layout>
  );
}
