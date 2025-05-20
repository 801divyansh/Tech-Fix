import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Cpu, HardDrive, Gamepad2, Download, MonitorDown, ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const WHATSAPP_PHONE = import.meta.env.VITE_WHATSAPP_PHONE;

const services = [
  {
    id: 1,
    title: "Console Cleanup & Thermal Paste Change",
    description: "Professional thermal paste replacement and cleaning service to keep your console running cool and quiet.",
    icon: <Gamepad2 size={24} />,
    color: "from-blue-500 to-blue-700",
    route: "/services/console-cleanup",
  },
  {
    id: 2,
    title: "Software Installation",
    description: "Remote or physical software installation services for all your computing needs.",
    icon: <Download size={24} />,
    color: "from-purple-500 to-purple-700",
    route: "/services/software_service",
  },
  {
    id: 3,
    title: "Cracked Software Collection",
    description: "Access to a wide range of cracked software for Windows and Mac systems.",
    icon: <MonitorDown size={24} />,
    color: "from-green-500 to-green-700",
    route: "/services/software_service",
  },
  {
    id: 4,
    title: "PC/Console Games",
    description: "Get the latest PC and console games with easy installation and setup guidance.",
    icon: <Gamepad2 size={24} />,
    color: "from-amber-500 to-amber-700",
    route: "/services/pc_service",
  },
  {
    id: 5,
    title: "PC/Laptop Hardware Upgrades",
    description: "Professional SSD and RAM upgrades to boost your computer's performance.",
    icon: <Cpu size={24} />,
    color: "from-red-500 to-red-700",
    route: "/services/laptop_service",
  },
  {
    id: 6,
    title: "Console Storage Upgrades",
    description: "Expand your console's storage capacity with professional installation services.",
    icon: <HardDrive size={24} />,
    color: "from-teal-500 to-teal-700",
    route: "/services/console-cleanup",
  },
];

const ServicesSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null); // State for dropdown toggle
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const handleServiceClick = (route: string) => {
    navigate(route);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    if (openDropdownId !== null) {
      const timer = setTimeout(() => {
        setOpenDropdownId(null);
      }, 5000); // 5 seconds

      return () => clearTimeout(timer); // Cleanup timeout on component unmount or dropdown change
    }
  }, [openDropdownId]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdownId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We offer a comprehensive range of tech services to keep your devices running optimally
        </p>
      </div>

      <Carousel
        className="relative w-full"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 10000, stopOnInteraction: false })]}
      >
        <CarouselContent className="flex">
          {services.map((service) => (
            <CarouselItem key={service.id} className="basis-full md:basis-1/2 lg:basis-1/3 px-4">
              <Card
                className="h-full flex flex-col hover:shadow-pink-400 shadow-lg transition-shadow duration-300"
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${service.color} text-white mb-4`}
                  >
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

                {/* Footer with dropdown functionality */}
                <CardFooter className="flex flex-col items-center">
                  <Button
                    className={`w-full bg-gradient-to-r ${service.color} text-white`}
                    onClick={() =>
                      setOpenDropdownId(openDropdownId === service.id ? null : service.id)
                    }
                  >
                    {openDropdownId === service.id ? "Close Options" : "Get Service"}
                    <motion.div
                      animate={{ x: hoveredId === service.id ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </Button>

                  {openDropdownId === service.id && (
                    <motion.div
                      ref={dropdownRef}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 rounded-md shadow-md w-full"
                    >
                      <Button
                        variant="secondary"
                        className="w-full mb-2 bg-blue-500 text-white hover:bg-blue-600"
                        onClick={() => handleServiceClick(service.route)}
                      >
                        View Details
                      </Button>
                      <Button
                        variant="secondary"
                        className="w-full mb-2 bg-green-500 text-white hover:bg-green-600"
                        onClick={() => {
                          const message = encodeURIComponent("Hello, I would like to book a service."); // Pre-filled message
                          const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;
                          window.open(whatsappUrl, "_blank"); // Open WhatsApp in a new tab
                        }}
                      >
                        Book Now
                      </Button>
                      <Button
                        variant="secondary"
                        className="w-full bg-yellow-500 text-white hover:bg-yellow-600"
                        onClick={scrollToContact}
                      >
                        Contact Support
                      </Button>
                    </motion.div>
                  )}
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default ServicesSection;
