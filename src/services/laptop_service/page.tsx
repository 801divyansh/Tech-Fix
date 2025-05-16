import { motion } from 'framer-motion';
import { useTheme } from '@/components/theme-provider';

const LaptopServicePage = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`relative min-h-screen ${
        theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      } overflow-hidden transition-colors duration-500`}
    >
      {/* Animated Background Circles */}
      <div className="absolute inset-0 backdrop-blur-lg">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-green-500 to-blue-500 opacity-20'
                : 'bg-gradient-to-r from-yellow-300 to-orange-400 opacity-30'
            }`}
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <header className="relative py-16 text-center z-10">
        <motion.h1
          className={`text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-green-400 to-blue-500'
              : 'bg-gradient-to-r from-yellow-400 to-orange-500'
          }`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Laptop Repair & Maintenance Service
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Comprehensive laptop repair and maintenance services to keep your device running smoothly.
        </motion.p>
      </header>

      {/* Content Section */}
      <motion.div
        className="relative container mx-auto px-6 py-12 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/laptop-repair.png"
              alt="Laptop Repair"
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Service Details */}
          <motion.div
            className="space-y-6"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold">
              Why Choose Our Laptop Services?
            </h2>
            <ul className="space-y-2">
              <li>✔ Hardware diagnostics and repair.</li>
              <li>✔ Software troubleshooting and optimization.</li>
              <li>✔ Battery replacement and upgrades.</li>
              <li>✔ Professional cleaning and thermal paste replacement.</li>
              <li>✔ Data recovery and backup solutions.</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Pricing Section */}
      <motion.div
        className={`relative py-12 z-10 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Basic Plan */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <p className="mb-6">Basic diagnostics and cleaning.</p>
              <p className="text-3xl font-bold">$59</p>
              <button
                className={`mt-6 px-4 py-2 rounded ${
                  theme === 'dark'
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-green-400 hover:bg-green-500 text-black'
                }`}
              >
                Get Started
              </button>
            </motion.div>

            {/* Standard Plan */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold mb-4">Standard</h3>
              <p className="mb-6">Diagnostics, cleaning, and software optimization.</p>
              <p className="text-3xl font-bold">$99</p>
              <button
                className={`mt-6 px-4 py-2 rounded ${
                  theme === 'dark'
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-blue-400 hover:bg-blue-500 text-black'
                }`}
              >
                Get Started
              </button>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <p className="mb-6">
                Full diagnostics, cleaning, hardware repair, and data recovery.
              </p>
              <p className="text-3xl font-bold">$149</p>
              <button
                className={`mt-6 px-4 py-2 rounded ${
                  theme === 'dark'
                    ? 'bg-purple-500 hover:bg-purple-600 text-white'
                    : 'bg-purple-400 hover:bg-purple-500 text-black'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Footer Section */}
      <footer className="relative py-8 text-center z-10">
        <p>&copy; {new Date().getFullYear()} TechFix. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LaptopServicePage;