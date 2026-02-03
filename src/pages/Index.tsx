import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import InquirySection from "@/components/InquirySection";
import ContactSection from "@/components/ContactSection";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import BrandsSection from "@/components/BrandsSection";
import StatsSection from "@/components/StatsSection";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Appliance Fix | Expert Home Appliance Repair in Kolar</title>
        <meta name="description" content="Trusted appliance repair in Kolar. We fix water purifiers, washing machines, geysers, and more. Fast service & 90-day warranty. Book now!" />
        <link rel="canonical" href="https://appliancefix.in/" />
      </Helmet>
      <HeroSection />
      <BrandsSection />
      <StatsSection />
      <ProductsSection />
      <InquirySection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default Index;
