import { ClerkProvider } from '@clerk/clerk-react';
import { ThemeProvider } from '@/components/theme-provider';
import { Helmet } from 'react-helmet';
import '@/App.css';
import AppRoutes from './routes/route';
import NavBar from './components/navbar';
import Footer from './components/footer';
import { ToastProvider } from '@/components/ui/toast';
import { Toaster } from '@/components/ui/toaster';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

function App() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Helmet>
        <title>TechFix - Tech Solutions</title>
        <link rel="icon" href="/favicon.svg" />
      </Helmet>
      <ThemeProvider defaultTheme="dark">
        <ToastProvider>
          <NavBar />
          <AppRoutes />
          <Footer />
          <Toaster /> 
        </ToastProvider>
      </ThemeProvider>
    </ClerkProvider>
  );
}

export default App;