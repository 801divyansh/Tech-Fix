import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const reasons = [
  {
    id: 1,
    title: "Expert Technicians",
    description: "Our team consists of highly skilled professionals with years of experience.",
  },
  {
    id: 2,
    title: "Affordable Pricing",
    description: "We offer competitive pricing without compromising on quality.",
  },
  {
    id: 3,
    title: "Fast Turnaround",
    description: "We ensure quick and efficient service to minimize your downtime.",
  },
  {
    id: 4,
    title: "Customer Satisfaction",
    description: "Our top priority is ensuring that our customers are happy with our services.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-40 px-4 sm:px-6 lg:px-8 ">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">Why Choose Us?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover why we are the best choice for your tech needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason) => (
          <motion.div
            key={reason.id}
            className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:shadow-green-500 transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.1, delay: reason.id * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-green-600 dark:from-green-500 dark:to-green-700 mb-4">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{reason.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;