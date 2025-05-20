import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  MessageCircle, 
  Send
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const WHATSAPP_PHONE = import.meta.env.VITE_WHATSAPP_PHONE;

const SocialButtons = () => {
  return (
    <motion.div
      className="social-buttons"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
              <Button size="icon" 
                onClick={() => {
                  const message = encodeURIComponent("Hello, I would like to book a service."); // Pre-filled message
                  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;
                  window.open(whatsappUrl, "_blank"); // Open WhatsApp in a new tab
                }} 
                className="rounded-full h-12 w-12 bg-[#25D366] hover:bg-[#128C7E] text-white">
                <MessageCircle className="h-5 w-5" />
              </Button>
            
          </TooltipTrigger>
          <TooltipContent>
            <p>Chat on WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a href="https://t.me/TechFix_Service" target="_blank" rel="noopener noreferrer">
              <Button size="icon" className="rounded-full h-12 w-12 bg-[#0088cc] hover:bg-[#0077b5] text-white">
                <Send className="h-5 w-5" />
              </Button>
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Message on Telegram</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  );
};

export default SocialButtons;