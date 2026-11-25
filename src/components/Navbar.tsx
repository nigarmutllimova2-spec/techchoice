import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Navbar: React.FC = () => {
  const {
    route,
    navigate,
    wishlistIds,
    compareIds,
    bagTotalItems,
    setIsBagOpen,
    searchQuery,
    setSearchQuery,
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [navSearchInput, setNavSearchInput] = useState(searchQuery);

  const handleNavSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(navSearchInput.trim());
    setSearchOpen(false);
    setMobileMenuOpen(false);
    navigate({ page: 'catalogue' });
  };

  const navItems: Array<{
    label: string;
    active: boolean;
    count?: number;
    onClick: () => void;
  }> = [
    {
      label: 'Home',
      active: route.page === 'home',
      onClick: () => navigate({ page: 'home' }),
    },
    {
      label: 'Categories',
      active: route.page === 'categories',
      onClick: () => navigate({ page: 'categories' }),
    },
    {
      label: 'Products',
      active: route.page === 'catalogue' || route.page === 'product',
      onClick: () => navigate({ page: 'catalogue' }),
    },
    {
      label: 'Compare',
      active: route.page === 'compare',
      count: compareIds.length,
      onClick: () => navigate({ page: 'compare' }),
    },
    {
      label: 'Wishlist',
      active: route.page === 'wishlist',
      count: wishlistIds.length,
      onClick: () => navigate({ page: 'wishlist' }),
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#071B33]/95 backdrop-blur-md text-[#F3F6FA] border-b border-[#263D55]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-4 lg:gap-8">
          {/* Zone 1: Soft-white Brand Logo */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              navigate({ page: 'home' });
            }}
            className="font-display text-xl font-extrabold tracking-tight text-[#F3F6FA] whitespace-nowrap shrink-0 hover:text-[#A7D66D] transition-colors"
          >
            Tech<span className="text-[#A7D66D]">Choice</span>
          </button>

          {/* Zone 2: Cool-grey Navigation Labels with Green Active Indicator */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-medium"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={item.onClick}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                  item.active
                    ? 'text-[#A7D66D] font-semibold'
                    : 'text-[#AAB6C3] hover:text-[#F3F6FA]'
                }`}
                aria-current={item.active ? 'page' : undefined}
              >
                <span>{item.label}</span>
                {typeof item.count === 'number' && (
                  <span className="ml-1 text-xs tabular-nums opacity-85">
                    ({item.count})
                  </span>
                )}
                {item.active && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-[#A7D66D]"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: Search, Bag & Green Primary Action */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => {
                setNavSearchInput(searchQuery);
                setSearchOpen((prev) => !prev);
              }}
              aria-expanded={searchOpen}
              aria-label="Toggle product search"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-[#AAB6C3] hover:text-[#F3F6FA] hover:bg-[#263D55]/60 transition-colors whitespace-nowrap shrink-0"
            >
              <Search className="w-4 h-4" aria-hidden="true" />
              <span>Search</span>
            </button>

            <button
              type="button"
              onClick={() => setIsBagOpen(true)}
              aria-label={`Open demonstration shopping bag with ${bagTotalItems} items`}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#102B49] hover:bg-[#263D55] border border-[#263D55] text-[#F3F6FA] font-semibold text-sm transition-colors whitespace-nowrap shrink-0"
            >
              <ShoppingBag className="w-4 h-4 text-[#A7D66D]" aria-hidden="true" />
              <span>Bag</span>
              <span className="tabular-nums font-bold">({bagTotalItems})</span>
            </button>

            <button
              type="button"
              onClick={() => navigate({ page: 'catalogue' })}
              className="hidden lg:inline-flex items-center px-4 py-2 rounded-lg bg-[#A7D66D] hover:bg-[#b8e284] text-[#071B33] font-bold text-sm transition-colors whitespace-nowrap shrink-0"
            >
              Explore Products
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden p-2 rounded-lg text-[#F3F6FA] hover:bg-[#263D55] transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Expandable Quick Search Bar */}
        {searchOpen && (
          <div className="pb-4 pt-2 border-t border-[#263D55]">
            <form onSubmit={handleNavSearchSubmit} className="flex gap-2 max-w-xl ml-auto">
              <label htmlFor="navbar-search-input" className="sr-only">
                Search technology products by name or brand
              </label>
              <input
                id="navbar-search-input"
                type="search"
                value={navSearchInput}
                onChange={(e) => setNavSearchInput(e.target.value)}
                placeholder="Search by product name or brand (e.g. Apple, Sony, Laptop)..."
                className="flex-1 min-h-[42px] px-3.5 py-2 rounded-lg bg-[#102B49] text-[#F3F6FA] placeholder:text-[#AAB6C3] border border-[#263D55] text-sm"
                autoFocus
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-[#A7D66D] hover:bg-[#b8e284] text-[#071B33] font-bold text-sm whitespace-nowrap"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search bar"
                className="px-3.5 py-2 rounded-lg bg-[#263D55] hover:bg-[#2f4b68] text-[#F3F6FA] text-sm font-medium"
              >
                Close
              </button>
            </form>
          </div>
        )}

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="md:hidden py-4 border-t border-[#263D55] space-y-3"
          >
            <form onSubmit={handleNavSearchSubmit} className="flex gap-2">
              <label htmlFor="mobile-search-input" className="sr-only">
                Search products
              </label>
              <input
                id="mobile-search-input"
                type="search"
                value={navSearchInput}
                onChange={(e) => setNavSearchInput(e.target.value)}
                placeholder="Search products or brands..."
                className="flex-1 min-h-[42px] px-3.5 py-2 rounded-lg bg-[#102B49] text-[#F3F6FA] placeholder:text-[#AAB6C3] border border-[#263D55] text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-[#A7D66D] text-[#071B33] font-bold text-sm"
              >
                Go
              </button>
            </form>

            <div className="grid grid-cols-1 gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    item.onClick();
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
                    item.active
                      ? 'bg-[#263D55] text-[#A7D66D]'
                      : 'text-[#AAB6C3] hover:text-[#F3F6FA] hover:bg-[#102B49]'
                  }`}
                >
                  <span>{item.label}</span>
                  {typeof item.count === 'number' && (
                    <span className="tabular-nums text-xs opacity-80">({item.count})</span>
                  )}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                navigate({ page: 'catalogue' });
              }}
              className="w-full min-h-[42px] px-4 py-2 rounded-lg bg-[#A7D66D] text-[#071B33] font-bold text-sm"
            >
              Explore Products
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};
