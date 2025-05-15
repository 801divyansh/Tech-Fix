import { ClerkProvider } from '@clerk/clerk-react';
import { ThemeProvider } from '@/components/theme-provider';
import Layout from '@/components/layout';
import '@/App.css';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

function App() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <ThemeProvider defaultTheme="dark">
        <Layout />
      </ThemeProvider>
    </ClerkProvider>
  );
}

export default App;