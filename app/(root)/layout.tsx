import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import React from "react";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col bg-primary-50 h-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
