import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Hero = lazy(() => import("./components/Hero"));
const ServiceSection = lazy(() => import("./components/ServiceSection"));
const ContactUs = lazy(() => import("./components/ContactUs"));


const Loader = () => (
  <div className="text-center text-gray-500 py-5">Please wait...</div>
);

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-full min-h-screen bg-gray-50">
      <Header />
      <Suspense fallback={<Loader />}>
        <Hero />
        <ServiceSection />
        <ContactUs />
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
