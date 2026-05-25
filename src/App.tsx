import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Layout from './components/layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const CondominiumManagement = lazy(() => import('./pages/services/CondominiumManagement'));
const HOAManagement = lazy(() => import('./pages/services/HOAManagement'));
const TownhomeManagement = lazy(() => import('./pages/services/TownhomeManagement'));
const FinancialManagement = lazy(() => import('./pages/services/FinancialManagement'));
const MaintenanceCoordination = lazy(() => import('./pages/services/MaintenanceCoordination'));
const BoardSupport = lazy(() => import('./pages/services/BoardSupport'));
const ViolationManagement = lazy(() => import('./pages/services/ViolationManagement'));
const ServiceAreas = lazy(() => import('./pages/ServiceAreas'));
const NeighborhoodPage = lazy(() => import('./pages/NeighborhoodPage'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const Resources = lazy(() => import('./pages/Resources'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      let tries = 0;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (tries < 14) {
          tries += 1;
          window.setTimeout(tryScroll, 110);
        }
      };
      tryScroll();
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function LoadingFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-9 w-9 animate-spin rounded-full border-[3px] border-brand-200 border-t-brand-600" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/condominium-management" element={<CondominiumManagement />} />
            <Route path="/services/hoa-management" element={<HOAManagement />} />
            <Route path="/services/townhome-management" element={<TownhomeManagement />} />
            <Route path="/services/financial-management" element={<FinancialManagement />} />
            <Route path="/services/maintenance-coordination" element={<MaintenanceCoordination />} />
            <Route path="/services/board-support" element={<BoardSupport />} />
            <Route path="/services/violation-management" element={<ViolationManagement />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/property-management-:slug" element={<NeighborhoodPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
