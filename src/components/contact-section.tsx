import { motion } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const WHATSAPP_PHONE = import.meta.env.VITE_WHATSAPP_PHONE;

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const ContactSection = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const userId = import.meta.env.VITE_EMAILJS_USER_ID;

      if (!serviceId || !templateId || !userId) {
        throw new Error('EmailJS configuration is missing in the environment variables.');
      }

      await emailjs.send(serviceId, templateId, values, userId);

      toast({
        title: 'Message Sent!',
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: 'Error',
        description: 'Failed to send the message. Please try again later.',
        variant: 'destructive',
      });
    }
  }

  return (
    <section id="contact" className="py-20 flex items-center justify-center min-h-screen">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team for personalized tech services and solutions
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="h-full bg-gradient-to-br from-white via-gray-100 to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-black shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Send Us a Message
              </CardTitle>
              <CardDescription className="text-gray-400">
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" type="email" {...field} className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your tech needs"
                            className="min-h-[120px] bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-col gap-4">
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
                    >
                      Send Message
                    </Button>
                    <Button
                      variant="secondary"
                      className="w-full mb-2 flex items-center justify-center gap-2 bg-green-500 text-white hover:bg-green-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                      onClick={() => {
                        const message = encodeURIComponent("Hello, I would like to book a service."); // Pre-filled message
                        const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;
                        window.open(whatsappUrl, "_blank"); // Open WhatsApp in a new tab
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.735 5.564 2.13 7.97L0 32l8.25-2.11A15.92 15.92 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.797 23.797c-.33.93-1.92 1.82-2.64 1.89-.68.06-1.5.3-4.98-1.06-4.2-1.65-6.9-5.73-7.12-6.01-.21-.27-1.7-2.27-1.7-4.33 0-2.06 1.08-3.07 1.47-3.5.39-.43.86-.54 1.14-.54.27 0 .57.003.82.015.26.012.61-.1.95.72.33.82 1.12 2.82 1.22 3.03.1.21.17.48.03.75-.13.27-.2.43-.39.66-.2.23-.42.51-.6.68-.2.17-.4.36-.17.7.23.34 1.02 1.68 2.2 2.72 1.51 1.34 2.78 1.76 3.13 1.92.35.17.55.14.76-.08.22-.22.87-1.02 1.1-1.37.23-.35.46-.3.78-.18.32.12 2.04.96 2.39 1.14.35.18.58.27.67.42.1.15.1.87-.22 1.8z" />
                      </svg>
                      Contact Us on WhatsApp
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;