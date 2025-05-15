import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react'; // Example icons for the boxes

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 bg-background text-foreground relative overflow-hidden rounded-2xl shadow-lg"
    >
      {/* Glow effect in the background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At Tech-Fix, we specialize in providing expert technical solutions for
          all your devices. From PCs to consoles and software, our team is
          dedicated to delivering reliable and professional services tailored
          to your needs.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Box with hover glow effect */}
          <div className="p-6 bg-card rounded-lg shadow-md transition-shadow hover:shadow-lg hover:shadow-blue-500/50">
            <div className="flex justify-center items-center mb-4">
              <Target className="h-10 w-10 text-blue-500" /> {/* Icon */}
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To provide top-notch tech solutions that empower individuals and
              businesses to thrive in the digital age.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-md transition-shadow hover:shadow-lg hover:shadow-purple-500/50">
            <div className="flex justify-center items-center mb-4">
              <Eye className="h-10 w-10 text-purple-500" /> {/* Icon */}
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To be the go-to tech service provider, known for innovation,
              reliability, and exceptional customer service.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-md transition-shadow hover:shadow-lg hover:shadow-pink-500/50">
            <div className="flex justify-center items-center mb-4">
              <Heart className="h-10 w-10 text-pink-500" /> {/* Icon */}
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Integrity, excellence, and a customer-first approach are at the
              core of everything we do.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;