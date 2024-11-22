
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import BlogSection from "./component/BlogSection";
import AboutSection from "./component/AboutSection";
import Header from "./component/Header";

export default function Home() {
  return (
      <div>
      <Header />
      <HeroSection />
      <BlogSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
