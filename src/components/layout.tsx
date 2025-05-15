import NavBar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import BackgroundBubbles from '@/components/background-bubbles';
import SocialButtons from '@/components/social-buttons';
import AboutSection from './about-section';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background ">
      <BackgroundBubbles />
      <NavBar />
      <main className="container mx-auto px-4">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <SocialButtons />
    </div>
  );
};

export default Layout;