import React from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { DemoBagDrawer } from './components/DemoBagDrawer';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CategoriesPage } from './pages/CategoriesPage';
import { CataloguePage } from './pages/CataloguePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ComparePage } from './pages/ComparePage';
import { WishlistPage } from './pages/WishlistPage';

const AppShell: React.FC = () => {
  const { route, toastMessage, dismissToast } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-[#071B33] text-[#F3F6FA]">
      <Navbar />

      <main className="flex-1">
        {route.page === 'home' && <HomePage />}
        {route.page === 'categories' && <CategoriesPage />}
        {route.page === 'catalogue' && <CataloguePage />}
        {route.page === 'product' && <ProductDetailPage productId={route.productId} />}
        {route.page === 'compare' && <ComparePage />}
        {route.page === 'wishlist' && <WishlistPage />}
      </main>

      <Footer />
      <DemoBagDrawer />

      {/* Accessible Non-Blocking Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 right-5 z-50 max-w-sm bg-[#102B49] text-[#F3F6FA] px-4 py-3 rounded-xl shadow-2xl border border-[#263D55] flex items-center gap-3"
        >
          <CheckCircle2 className="w-4 h-4 text-[#A7D66D] shrink-0" aria-hidden="true" />
          <p className="text-xs sm:text-sm font-medium leading-snug flex-1">{toastMessage}</p>
          <button
            type="button"
            onClick={dismissToast}
            aria-label="Dismiss notification"
            className="p-1 rounded text-[#AAB6C3] hover:text-[#F3F6FA] transition-colors"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  );
}
