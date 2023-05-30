import React from "react";

import Layout from "../components/Layout";
import HeroSection from "../components/Section/HeroSection";
import CryptocurrencySection from "../components/Section/CryptocurrencySection";
import Footer from "../components/Footer";

import BuyAndTradeSection from "../components/Section/BuyAndTradeSection";
import PartnerSection from "../components/section/PartnerSection";


import FaqSection from "../components/Section/FaqSection";
import BackToTopSection from "../components/Section/BackToTopSection";
import SecuritySection from "../components/Section/SecuritySection";
import StepSection from "../components/Section/StepSection";
export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <CryptocurrencySection />

      <BuyAndTradeSection />
      <PartnerSection />

      <SecuritySection />
      <StepSection />
      <FaqSection />
      <BackToTopSection />

      <Footer />
    </Layout>
  );
}
