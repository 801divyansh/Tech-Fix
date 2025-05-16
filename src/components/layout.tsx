
import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';
import ContactSection from '@/components/contact-section';

import BackgroundBubbles from '@/components/background-bubbles';
import SocialButtons from '@/components/social-buttons';
import AboutSection from './about-section';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background ">
      <BackgroundBubbles />

      <main className="container mx-auto px-4">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SocialButtons />
    </div>
  );
};

export default Layout;