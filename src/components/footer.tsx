import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">TechFix</h3>
            <p className="text-muted-foreground mb-6">
              Professional tech services for all your computer and console needs.
              We offer remote and physical assistance for all your technical requirements.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-500/20">
                <Facebook size={18} className="text-blue-400" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-500/20">
                <Twitter size={18} className="text-blue-400" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-500/20">
                <Instagram size={18} className="text-pink-500"/>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-500/20">
                <Youtube size={18} className="text-red-800"/>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Services', 'About Us', 'Contact', 'FAQ', 'Terms of Service', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center">
                    <ChevronRight size={16} className="mr-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Console Cleanup',
                'Software Installation',
                'Cracked Software',
                'PC/Console Games',
                'Hardware Upgrades',
                'Storage Upgrades'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 flex items-center">
                    <ChevronRight size={16} className="mr-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex h-10 w-full rounded-l-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="rounded-l-none bg-blue-500 hover:bg-blue-600 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <motion.div 
          className="border-t border-border mt-12 pt-6 text-center text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} <span className="text-blue-400">TechFix</span>. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;