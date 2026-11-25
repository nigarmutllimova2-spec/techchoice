import React, { useMemo, useState } from 'react';
import {
  ChevronRight,
  Search,
  X,
  SlidersHorizontal,
  Plus,
  Minus,
  RotateCcw,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { useApp } from '../context/AppContext';
import { ProductCard } from '../components/ProductCard';
import { CategoryId, PriceRangeFilter, SortOption } from '../types';
import {
  getAdaptiveExplanation,
  getGoalLabel,
  getKnowledgeLabel,
  MAX_VISIBLE_PRODUCTS,
  MIN_VISIBLE_PRODUCTS,
} from '../utils/adaptiveLogic';

const PRICE_OPTIONS: Array<{ id: PriceRangeFilter; label: string }> = [
  { id: 'all', label: 'All prices' },
  { id: 'under_300', label: 'Under £300' },
  { id: '300_700', label: '£300–£700' },
  { id: '700_1200', label: '£700–£1,200' },
  { id: 'above_1200', label: 'Above £1,200' },
];

const SORT_OPTIONS: Array<{ id: SortOption; label: string }> = [
  { id: 'recommended', label: 'Recommended' },
  { id: 'price_asc', label: 'Price: Low to High' },
  { id: 'price_desc', label: 'Price: High to Low' },
  { id: 'rating_desc', label: 'Rating: High to Low' },
  { id: 'alphabetical', label: 'Alphabetical' },
];

export const CataloguePage: React.FC = () => {
  const {
    navigate,
    goal,
    knowledgeLevel,
    setOnboardingStep,
    visibleCount,
    showMoreProducts,
    showFewerProducts,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    sortBy,
    setSortBy,
    clearAllFilters,
    feedback,
    setFeedback,
    startAgain,
  } = useApp();

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const filtered = PRODUCTS.filter((product) => {
      if (query) {
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesCategory = product.category.toLowerCase().includes(query);
        if (!matchesName && !matchesBrand && !matchesCategory) {
          return false;
        }
      }

      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }

      if (priceRange === 'under_300' && product.price >= 300) return false;
      if (priceRange === '300_700' && (product.price < 300 || product.price > 700)) return false;
      if (priceRange === '700_1200' && (product.price <= 700 || product.price > 1200))
        return false;
      if (priceRange === 'above_1200' && product.price <= 1200) return false;

      return true;
    });

    const sorted = [...filtered];
    switch (sortBy) {
      case 'price_asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'rating_desc':
        sorted.sort((a, b) => b.sampleRating - a.sampleRating || a.price - b.price);
        break;
      case 'alphabetical':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'recommended':
      default:
        sorted.sort((a, b) => a.recommendedRank - b.recommendedRank);
        break;
    }

    return sorted;
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  const hasActiveFilters =
    searchQuery.trim() !== '' || selectedCategory !== 'All' || priceRange !== 'all';

  const displayedProducts = filteredAndSortedProducts.slice(0, visibleCount);
  const matchingCount = filteredAndSortedProducts.length;
  const shownCount = displayedProducts.length;

  const isAtMin = visibleCount <= MIN_VISIBLE_PRODUCTS;
  const isAtMax = visibleCount >= MAX_VISIBLE_PRODUCTS;

  const activeFilterSummary: string[] = [];
  if (searchQuery.trim()) activeFilterSummary.push(`Search: "${searchQuery.trim()}"`);
  if (selectedCategory !== 'All') activeFilterSummary.push(`Category: ${selectedCategory}`);
  if (priceRange !== 'all') {
    const label = PRICE_OPTIONS.find((p) => p.id === priceRange)?.label;
    if (label) activeFilterSummary.push(`Price: ${label}`);
  }

  const handleChangeGoalClick = () => {
    setOnboardingStep(1);
    navigate({ page: 'home' });
  };

  const renderFilterControls = () => (
    <div className="space-y-6">
      {/* Category Filter */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#A7D66D] mb-3">
          Category
        </h3>
        <div className="space-y-1.5">
          {(['All', ...CATEGORIES.map((c) => c.id)] as Array<'All' | CategoryId>).map((cat) => {
            const active = selectedCategory === cat;
            const catCount =
              cat === 'All'
                ? PRODUCTS.length
                : PRODUCTS.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={active}
                className={`w-full min-h-[38px] px-3 py-2 rounded-xl text-sm font-medium flex items-center justify-between transition-colors ${
                  active
                    ? 'bg-[#A7D66D] text-[#071B33] font-bold'
                    : 'text-[#F3F6FA] hover:bg-[#263D55]'
                }`}
              >
                <span className="truncate">{cat}</span>
                <span
                  className={`text-xs tabular-nums ${
                    active ? 'text-[#071B33] font-bold' : 'text-[#AAB6C3]'
                  }`}
                >
                  {catCount}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Filter */}
      <div className="pt-5 border-t border-[#263D55]">
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#A7D66D] mb-3">
          Illustrative Price
        </h3>
        <div className="space-y-1.5">
          {PRICE_OPTIONS.map((option) => {
            const active = priceRange === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setPriceRange(option.id)}
                aria-pressed={active}
                className={`w-full min-h-[38px] px-3 py-2 rounded-xl text-sm font-medium text-left transition-colors ${
                  active
                    ? 'bg-[#A7D66D] text-[#071B33] font-bold'
                    : 'text-[#F3F6FA] hover:bg-[#263D55]'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      {hasActiveFilters && (
        <div className="pt-5 border-t border-[#263D55]">
          <button
            type="button"
            onClick={clearAllFilters}
            className="w-full min-h-[40px] px-4 py-2 rounded-xl bg-[#263D55] hover:bg-[#314d6a] text-[#F3F6FA] text-sm font-semibold transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mb-6 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#AAB6C3]"
      >
        <button
          type="button"
          onClick={() => navigate({ page: 'home' })}
          className="hover:text-[#A7D66D] hover:underline font-medium"
        >
          Home
        </button>
        <ChevronRight className="w-4 h-4 shrink-0" aria-hidden="true" />
        <button
          type="button"
          onClick={() => navigate({ page: 'categories' })}
          className="hover:text-[#A7D66D] hover:underline font-medium"
        >
          Categories
        </button>
        <ChevronRight className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span className="font-semibold text-[#F3F6FA]" aria-current="page">
          {selectedCategory === 'All' ? 'All Products' : selectedCategory}
        </span>
      </nav>

      {/* Page Header & Personalised Information Area */}
      <div className="pb-6 border-b border-[#263D55] space-y-5">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#F3F6FA] tracking-tight [text-wrap:balance]">
              Find Your Perfect Technology
            </h1>
            <p className="mt-2 text-sm sm:text-base font-medium text-[#F3F6FA] tabular-nums">
              {hasActiveFilters ? (
                <>
                  Showing <span className="font-bold text-[#A7D66D]">{shownCount}</span> of{' '}
                  <span className="font-bold text-[#A7D66D]">{matchingCount}</span> matching
                  products{' '}
                  <span className="text-[#AAB6C3] font-normal">
                    (from {PRODUCTS.length} total · adaptive display limit: up to {visibleCount})
                  </span>
                </>
              ) : (
                <>
                  Showing <span className="font-bold text-[#A7D66D]">{shownCount}</span> of{' '}
                  <span className="font-bold text-[#A7D66D]">{PRODUCTS.length}</span> products
                </>
              )}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handleChangeGoalClick}
              className="min-h-[40px] px-4 py-2 rounded-xl bg-[#263D55] hover:bg-[#314d6a] text-[#F3F6FA] text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap"
            >
              Change My Goal
            </button>
            <button
              type="button"
              onClick={startAgain}
              className="min-h-[40px] px-4 py-2 rounded-xl border border-[#263D55] bg-[#102B49] hover:bg-[#263D55] text-xs sm:text-sm font-semibold text-[#AAB6C3] hover:text-[#F3F6FA] inline-flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Start Again</span>
            </button>
          </div>
        </div>

        {/* Personalised Information Strip */}
        <div className="bg-[#102B49] border border-[#263D55] rounded-2xl p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm">
              <span className="text-[#AAB6C3]">
                Shopping goal:{' '}
                <strong className="text-[#F3F6FA]">{getGoalLabel(goal)}</strong>
              </span>
              <span aria-hidden="true" className="text-[#263D55]">
                ·
              </span>
              <span className="text-[#AAB6C3]">
                Knowledge level:{' '}
                <strong className="text-[#A7D66D]">{getKnowledgeLabel(knowledgeLevel)}</strong>
              </span>
              <span aria-hidden="true" className="text-[#263D55]">
                ·
              </span>
              <span className="text-[#AAB6C3] tabular-nums">
                Display limit:{' '}
                <strong className="text-[#F3F6FA]">{visibleCount} of 15</strong>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#AAB6C3] leading-relaxed">
              {getAdaptiveExplanation(goal, knowledgeLevel)}
            </p>
          </div>

          {(!goal || !knowledgeLevel) && (
            <button
              type="button"
              onClick={handleChangeGoalClick}
              className="min-h-[40px] px-5 py-2 rounded-xl bg-[#A7D66D] hover:bg-[#b8e284] text-[#071B33] font-bold text-xs sm:text-sm whitespace-nowrap shrink-0 transition-colors"
            >
              Personalise Now
            </button>
          )}
        </div>
      </div>

      {/* Main Layout: Secondary Navy Filter Sidebar + Catalogue Grid */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8 items-start">
        {/* Desktop Sidebar */}
        <aside
          aria-label="Product filters"
          className="hidden lg:block w-68 shrink-0 bg-[#102B49] border border-[#263D55] rounded-2xl p-5 sticky top-24"
        >
          <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#263D55]">
            <h2 className="font-display text-sm font-bold text-[#F3F6FA] flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#A7D66D]" aria-hidden="true" />
              <span>Filter Products</span>
            </h2>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearAllFilters}
                className="text-xs font-semibold text-[#A7D66D] hover:underline"
              >
                Reset
              </button>
            )}
          </div>
          {renderFilterControls()}
        </aside>

        {/* Right Content Area */}
        <div className="flex-1 min-w-0 w-full space-y-6">
          {/* Search + Sort + Mobile Filter Toggle Bar */}
          <div className="bg-[#102B49] border border-[#263D55] rounded-2xl p-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <div className="relative flex-1">
              <Search
                className="w-4 h-4 text-[#AAB6C3] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <label htmlFor="catalogue-search" className="sr-only">
                Search by product name or brand
              </label>
              <input
                id="catalogue-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by product name or brand..."
                className="w-full min-h-[42px] pl-10 pr-9 py-2 rounded-xl border border-[#263D55] bg-[#071B33]/70 focus:bg-[#071B33] text-sm text-[#F3F6FA] placeholder:text-[#AAB6C3]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded text-[#AAB6C3] hover:text-[#A7D66D]"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen((prev) => !prev)}
                aria-expanded={mobileFiltersOpen}
                className="lg:hidden min-h-[42px] px-4 py-2 rounded-xl border border-[#263D55] bg-[#071B33] text-sm font-semibold text-[#F3F6FA] inline-flex items-center gap-2"
              >
                <SlidersHorizontal className="w-4 h-4 text-[#A7D66D]" aria-hidden="true" />
                <span>Filters</span>
                {activeFilterSummary.length > 0 && (
                  <span className="tabular-nums text-xs">({activeFilterSummary.length})</span>
                )}
              </button>

              <div className="flex items-center gap-2 flex-1 sm:flex-initial">
                <label
                  htmlFor="catalogue-sort"
                  className="text-xs font-semibold text-[#AAB6C3] whitespace-nowrap"
                >
                  Sort by:
                </label>
                <select
                  id="catalogue-sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="flex-1 sm:flex-initial min-h-[42px] px-3.5 py-2 rounded-xl border border-[#263D55] bg-[#071B33] text-sm font-medium text-[#F3F6FA]"
                >
                  {SORT_OPTIONS.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Mobile Collapsible Filter Panel */}
          {mobileFiltersOpen && (
            <div className="lg:hidden bg-[#102B49] border border-[#263D55] rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#263D55]">
                <h2 className="font-display text-sm font-bold text-[#F3F6FA]">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="text-xs font-semibold text-[#A7D66D]"
                >
                  Done
                </button>
              </div>
              {renderFilterControls()}
            </div>
          )}

          {/* Active Filter Indicators */}
          {activeFilterSummary.length > 0 && (
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 rounded-xl bg-[#A7D66D]/15 border border-[#A7D66D]/40 text-xs sm:text-sm">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[#F3F6FA]">
                <span className="font-bold text-[#A7D66D]">Active filters:</span>
                {activeFilterSummary.map((item, idx) => (
                  <React.Fragment key={item}>
                    {idx > 0 && (
                      <span aria-hidden="true" className="text-[#AAB6C3]">
                        ·
                      </span>
                    )}
                    <span className="font-medium">{item}</span>
                  </React.Fragment>
                ))}
              </div>
              <button
                type="button"
                onClick={clearAllFilters}
                className="font-bold text-[#A7D66D] hover:underline whitespace-nowrap"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* Adaptive Product Count Controls Bar */}
          <div className="bg-[#102B49] border border-[#263D55] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-display text-sm sm:text-base font-bold text-[#F3F6FA] tabular-nums">
                Adaptive List Size: {visibleCount} products (min 3 · max 15)
              </p>
              <p className="text-xs text-[#AAB6C3] mt-0.5">
                {isAtMin
                  ? 'Minimum display limit of 3 products reached.'
                  : isAtMax
                    ? 'Maximum display limit of 15 products reached.'
                    : hasActiveFilters && matchingCount <= visibleCount
                      ? `All ${matchingCount} matching filtered products are currently visible.`
                      : 'Adjust how many products are displayed at once using Show More or Show Fewer.'}
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={showFewerProducts}
                disabled={isAtMin}
                className={`min-h-[40px] px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                  isAtMin
                    ? 'border border-[#263D55] bg-[#071B33]/50 text-[#AAB6C3]/40 cursor-not-allowed'
                    : 'bg-[#263D55] hover:bg-[#314d6a] text-[#F3F6FA]'
                }`}
              >
                <Minus className="w-4 h-4" aria-hidden="true" />
                <span>Show Fewer</span>
              </button>

              <button
                type="button"
                onClick={showMoreProducts}
                disabled={isAtMax}
                className={`min-h-[40px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                  isAtMax
                    ? 'border border-[#263D55] bg-[#071B33]/50 text-[#AAB6C3]/40 cursor-not-allowed'
                    : 'bg-[#A7D66D] hover:bg-[#b8e284] text-[#071B33]'
                }`}
              >
                <Plus className="w-4 h-4" aria-hidden="true" />
                <span>Show More</span>
              </button>
            </div>
          </div>

          {/* Product Grid or Empty Filter State */}
          {displayedProducts.length === 0 ? (
            <div className="bg-[#102B49] border border-[#263D55] rounded-2xl p-12 text-center">
              <p className="font-display text-lg font-bold text-[#F3F6FA]">
                No products match your current search or filters
              </p>
              <p className="mt-2 text-sm text-[#AAB6C3] max-w-md mx-auto">
                Try clearing your search term or expanding your price and category selections to
                explore available technology.
              </p>
              <button
                type="button"
                onClick={clearAllFilters}
                className="mt-6 min-h-[42px] px-6 py-2.5 rounded-xl bg-[#A7D66D] hover:bg-[#b8e284] text-[#071B33] font-bold text-sm transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {displayedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* Feedback & User Satisfaction Section */}
          <section
            aria-labelledby="satisfaction-heading"
            className="bg-[#102B49] border border-[#263D55] rounded-2xl p-6 space-y-4"
          >
            <div className="flex items-start gap-3">
              <MessageSquare
                className="w-5 h-5 text-[#A7D66D] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div>
                <h2
                  id="satisfaction-heading"
                  className="font-display text-base font-bold text-[#F3F6FA]"
                >
                  Is this number of recommendations helpful?
                </h2>
                <p className="mt-1 text-xs text-[#AAB6C3]">
                  Academic prototype evaluation question · Selecting an option records your
                  feedback without automatically altering the product count or training an AI
                  model.
                </p>
              </div>
            </div>

            {feedback === null ? (
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setFeedback('helpful')}
                  className="min-h-[42px] px-5 py-2 rounded-xl bg-[#A7D66D] hover:bg-[#b8e284] text-sm font-bold text-[#071B33] transition-colors"
                >
                  Yes, this works for me.
                </button>
                <button
                  type="button"
                  onClick={() => setFeedback('prefer_different')}
                  className="min-h-[42px] px-5 py-2 rounded-xl bg-[#263D55] hover:bg-[#314d6a] text-sm font-semibold text-[#F3F6FA] transition-colors"
                >
                  No, I would prefer a different number.
                </button>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-[#071B33] border border-[#A7D66D]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-2.5 text-sm text-[#F3F6FA]">
                  <CheckCircle2
                    className="w-5 h-5 text-[#A7D66D] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-bold">
                      {feedback === 'helpful'
                        ? 'Thank you — you indicated that this recommendation count works well for you.'
                        : 'Thank you — you indicated you would prefer a different number of options.'}
                    </p>
                    <p className="text-xs text-[#AAB6C3] mt-0.5">
                      {feedback === 'prefer_different'
                        ? 'You stay in full control: use "Show More" or "Show Fewer" above to adjust the list size between 3 and 15 at any time.'
                        : 'Your response is recorded for this demonstration session only.'}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setFeedback(null)}
                  className="text-xs font-semibold text-[#A7D66D] hover:underline whitespace-nowrap self-start sm:self-center"
                >
                  Change feedback
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};
