import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/clerk-react';
import { motion } from 'framer-motion';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isSignedIn } = useUser();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-2 px-4 border rounded-2xl backdrop-blur-sm bg-background/80 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <span className="font-bold font-mono text-xl sm:inline-block">
                  TECH<span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">FIX</span>
                </span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition duration-300">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition duration-300">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition duration-300">
              Contact
            </a>
            <ThemeToggle />
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <div className="flex gap-4">
                <SignInButton mode="modal">
                  <Button variant="outline">Sign In</Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button>Sign Up</Button>
                </SignUpButton>
              </div>
            )}
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center">
            <ThemeToggle />
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <SignInButton mode="modal">
                <Button variant="outline" size="sm" className="mr-2">Sign In</Button>
              </SignInButton>
            )}
            <Button variant="ghost" onClick={toggleMenu} className="p-1 ml-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            'md:hidden transition-all duration-300 ease-in-out overflow-hidden',
            isOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'
          )}
        >
          <div className="flex flex-col space-y-4 py-4">
            <a 
              href="#services" 
              className="text-foreground hover:text-primary transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;