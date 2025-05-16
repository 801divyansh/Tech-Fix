import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout';
import ConsoleServicePage from '@/services/console_service/page';
import LaptopServicePage from '@/services/laptop_service/page'
import PCServicePage from '@/services/pc_service/page';
import SoftwareServicePage from '@/services/software_service/page';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<Layout />} />

        {/* Service Pages */}
        <Route path="/services/console-cleanup" element={<ConsoleServicePage />} />
        <Route path="/services/laptop_service" element={<LaptopServicePage />} />
        <Route path="/services/pc_service" element={<PCServicePage />} />
        <Route path="/services/software_service" element={<SoftwareServicePage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;