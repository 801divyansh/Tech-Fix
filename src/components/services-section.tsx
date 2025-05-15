import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Cpu, 
  HardDrive, 
  Gamepad2,  
  Download, 
  MonitorDown,
  ArrowRight
} from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Console Cleanup & Thermal Paste Change",
    description: "Professional thermal paste replacement and cleaning service to keep your console running cool and quiet.",
    icon: <Gamepad2 size={24} />,
    color: "from-blue-500 to-blue-700",
  },
  {
    id: 2,
    title: "Software Installation",
    description: "Remote or physical software installation services for all your computing needs.",
    icon: <Download size={24} />,
    color: "from-purple-500 to-purple-700",
  },
  {
    id: 3,
    title: "Cracked Software Collection",
    description: "Access to a wide range of cracked software for Windows and Mac systems.",
    icon: <MonitorDown size={24} />,
    color: "from-green-500 to-green-700",
  },
  {
    id: 4,
    title: "PC/Console Games",
    description: "Get the latest PC and console games with easy installation and setup guidance.",
    icon: <Gamepad2 size={24} />,
    color: "from-amber-500 to-amber-700",
  },
  {
    id: 5,
    title: "PC/Laptop Hardware Upgrades",
    description: "Professional SSD and RAM upgrades to boost your computer's performance.",
    icon: <Cpu size={24} />,
    color: "from-red-500 to-red-700",
  },
  {
    id: 6,
    title: "Console Storage Upgrades",
    description: "Expand your console's storage capacity with professional installation services.",
    icon: <HardDrive size={24} />,
    color: "from-teal-500 to-teal-700",
  },
];

const ServicesSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We offer a comprehensive range of tech services to keep your devices running optimally
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 service-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service) => (
          <motion.div key={service.id} variants={serviceVariants} className="service-card">
            <Card 
              className="h-full flex flex-col hover:shadow-pink-400 shadow-lg transition-shadow duration-300"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${service.color} text-white mb-4`}>
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="text-sm text-muted-foreground text-left space-y-2">
                  {service.id === 1 && (
                    <>
                      <li>• Professional cleaning of console internals</li>
                      <li>• High-quality thermal paste application</li>
                      <li>• Fan cleaning and maintenance</li>
                    </>
                  )}
                  {service.id === 2 && (
                    <>
                      <li>• Remote assistance via TeamViewer/AnyDesk</li>
                      <li>• On-site installation services</li>
                      <li>• Post-installation configuration</li>
                    </>
                  )}
                  {service.id === 3 && (
                    <>
                      <li>• Latest versions of premium software</li>
                      <li>• Working activation and updates</li>
                      <li>• Installation assistance</li>
                    </>
                  )}
                  {service.id === 4 && (
                    <>
                      <li>• Latest AAA PC and console titles</li>
                      <li>• Pre-configured for optimal performance</li>
                      <li>• Installation assistance</li>
                    </>
                  )}
                  {service.id === 5 && (
                    <>
                      <li>• High-performance SSD installation</li>
                      <li>• RAM upgrades and optimization</li>
                      <li>• System cloning and data transfer</li>
                    </>
                  )}
                  {service.id === 6 && (
                    <>
                      <li>• SSD upgrades for faster loading</li>
                      <li>• Expanded storage for more games</li>
                      <li>• System transfer and setup</li>
                    </>
                  )}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full bg-gradient-to-r ${service.color} text-white`}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Service
                  <motion.div
                    animate={{ x: hoveredId === service.id ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;