import React from 'react';
import { ArrowRight, ChevronRight, Grid } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { useApp } from '../context/AppContext';
import { ProductImage } from '../components/ProductImage';

export const CategoriesPage: React.FC = () => {
  const { navigate, navigateToCategory, setSelectedCategory } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-[#AAB6C3]"
      >
        <button
          type="button"
          onClick={() => navigate({ page: 'home' })}
          className="hover:text-[#A7D66D] hover:underline font-medium"
        >
          Home
        </button>
        <ChevronRight className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span className="font-semibold text-[#F3F6FA]" aria-current="page">
          Categories
        </span>
      </nav>

      {/* Page Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#263D55]">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#A7D66D]">
            6 Core Device Groups · {PRODUCTS.length} Sample Products Total
          </p>
          <h1 className="mt-1.5 font-display text-3xl sm:text-4xl font-extrabold text-[#F3F6FA] tracking-tight [text-wrap:balance]">
            Explore Technology Categories
          </h1>
          <p className="mt-2.5 text-sm sm:text-base text-[#AAB6C3] max-w-2xl leading-relaxed">
            Select a category to jump straight into a filtered catalogue view, or view all devices
            with your adaptive recommendation size applied.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setSelectedCategory('All');
            navigate({ page: 'catalogue' });
          }}
          className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#A7D66D] hover:bg-[#b8e284] text-[#071B33] font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0"
        >
          <Grid className="w-4 h-4" aria-hidden="true" />
          <span>View All Products ({PRODUCTS.length})</span>
        </button>
      </div>

      {/* Category Cards Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((category) => {
          const count = PRODUCTS.filter((p) => p.category === category.id).length;
          return (
            <article
              key={category.id}
              className="group flex flex-col bg-[#102B49] border border-[#263D55] hover:border-[#A7D66D]/60 rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
            >
              <button
                type="button"
                onClick={() => navigateToCategory(category.id)}
                className="aspect-[4/3] w-full bg-[#0B213B] overflow-hidden text-left border-b border-[#263D55]"
                aria-label={`Explore ${category.name} category`}
              >
                <ProductImage
                  src={category.image}
                  alt={`${category.name} representative device`}
                  category={category.id}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </button>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-semibold uppercase tracking-wide text-[#A7D66D]">
                    Category
                  </span>
                  <span className="tabular-nums font-semibold text-[#F3F6FA]">
                    {count} {count === 1 ? 'product' : 'products'}
                  </span>
                </div>

                <h2 className="mt-1.5 font-display text-xl font-bold text-[#F3F6FA]">
                  {category.name}
                </h2>

                <p className="mt-2 text-sm text-[#AAB6C3] leading-relaxed flex-1">
                  {category.description}
                </p>

                <button
                  type="button"
                  onClick={() => navigateToCategory(category.id)}
                  className="mt-5 w-full min-h-[42px] px-4 py-2.5 rounded-xl bg-[#A7D66D] hover:bg-[#b8e284] text-[#071B33] font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Explore Category</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
