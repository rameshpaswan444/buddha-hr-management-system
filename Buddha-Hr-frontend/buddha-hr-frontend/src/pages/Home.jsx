import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import About from "./About";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Services from "./Services";
import RecruitmentProcess from "../components/home/RecruitmentProcess";
import Testimonials from "../components/home/Testimonials";
import Clients from "../components/home/Clients";
import CallToAction from "../components/home/CallToAction";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <RecruitmentProcess />

      <Clients />
      <Testimonials />
      <CallToAction />
    </>
  );
}

export default Home;
