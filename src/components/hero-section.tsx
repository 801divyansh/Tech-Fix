import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="relative pt-20 pb-24 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-3xl -z-10"></div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Expert Tech Solutions <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            For All Your Devices
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Professional tech services for your PC, console, and software needs.
          We offer remote and physical assistance for all your technical requirements.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
            onClick={scrollToServices}
          >
            Explore Services
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
          >
            Contact Us
          </Button>
        </motion.div>

        <motion.div
          className="bottom-1 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToServices}
            className="animate-bounce"
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;