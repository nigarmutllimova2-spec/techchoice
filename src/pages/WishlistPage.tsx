import React from 'react';
import {
  ArrowRight,
  Check,
  ChevronRight,
  Heart,
  Scale,
  ShoppingBag,
  Star,
  Trash2,
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useApp } from '../context/AppContext';
import { ProductImage } from '../components/ProductImage';
import { formatGBP } from '../utils/adaptiveLogic';

export const WishlistPage: React.FC = () => {
  const {
    wishlistIds,
    toggleWishlist,
    toggleCompare,
    isInCompare,
    compareIds,
    addToBag,
    navigate,
    navigateToProduct,
  } = useApp();

  const savedProducts = wishlistIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
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
          Wishlist
        </span>
      </nav>

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#263D55]">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#A7D66D] tabular-nums">
            Saved Devices · {savedProducts.length} item{savedProducts.length === 1 ? '' : 's'}
          </p>
          <h1 className="mt-1.5 font-display text-3xl sm:text-4xl font-extrabold text-[#F3F6FA] tracking-tight">
            Your Wishlist
          </h1>
          <p className="mt-2 text-sm text-[#AAB6C3]">
            Saved products remain stored in your browser so you can review specifications or add
            them to your side-by-side comparison.
          </p>
        </div>

        {savedProducts.length > 0 && (
          <button
            type="button"
            onClick={() => navigate({ page: 'catalogue' })}
            className="min-h-[42px] px-5 py-2 rounded-xl bg-[#A7D66D] hover:bg-[#b8e284] text-[#071B33] font-bold text-sm inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0"
          >
            <span>Explore More Products</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Empty State or Saved List */}
      {savedProducts.length === 0 ? (
        <div className="mt-10 bg-[#102B49] border border-[#263D55] rounded-3xl p-12 text-center max-w-2xl mx-auto">
          <Heart className="w-12 h-12 mx-auto text-[#A7D66D]/70" aria-hidden="true" />
          <h2 className="mt-4 font-display text-xl font-bold text-[#F3F6FA]">
            Your wishlist is empty
          </h2>
          <p className="mt-2 text-sm text-[#AAB6C3] leading-relaxed">
            Save laptops, smartphones, headphones, tablets, smartwatches, or gaming consoles as
            you browse to keep your shortlist organised in one place.
          </p>
          <button
            type="button"
            onClick={() => navigate({ page: 'catalogue' })}
            className="mt-6 min-h-[44px] px-6 py-2.5 rounded-xl bg-[#A7D66D] hover:bg-[#b8e284] text-[#071B33] font-bold text-sm inline-flex items-center gap-2 transition-colors"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedProducts.map((product) => {
            const compared = isInCompare(product.id);
            const compareFull = compareIds.length >= 3 && !compared;

            return (
              <article
                key={product.id}
                className="flex flex-col bg-[#102B49] border border-[#263D55] hover:border-[#A7D66D]/60 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-black/30 transition-all"
              >
                <button
                  type="button"
                  onClick={() => navigateToProduct(product.id)}
                  className="aspect-[4/3] w-full bg-[#0B213B] border-b border-[#263D55] overflow-hidden text-left"
                >
                  <ProductImage
                    src={product.image}
                    alt={product.name}
                    category={product.category}
                    className="w-full h-full object-cover"
                  />
                </button>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-semibold uppercase tracking-wide text-[#A7D66D]">
                      {product.brand} <span aria-hidden="true">·</span> {product.category}
                    </span>
                    <span className="inline-flex items-center gap-1 tabular-nums text-[#F3F6FA] font-semibold">
                      <Star
                        className="w-3.5 h-3.5 fill-[#A7D66D] text-[#A7D66D]"
                        aria-hidden="true"
                      />
                      <span>{product.sampleRating.toFixed(1)}</span>
                      <span className="text-[#AAB6C3] font-normal">(Sample)</span>
                    </span>
                  </div>

                  <h2 className="mt-1.5 font-display text-lg font-bold text-[#F3F6FA]">
                    <button
                      type="button"
                      onClick={() => navigateToProduct(product.id)}
                      className="text-left hover:text-[#A7D66D] transition-colors"
                    >
                      {product.name}
                    </button>
                  </h2>

                  <p className="mt-2 text-sm text-[#AAB6C3] line-clamp-2 flex-1">
                    {product.shortDescription}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#263D55] flex items-baseline justify-between">
                    <span className="font-display text-xl font-extrabold text-[#A7D66D] tabular-nums">
                      {formatGBP(product.price)}
                    </span>
                    <span className="text-xs text-[#AAB6C3]">Sample price</span>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => navigateToProduct(product.id)}
                        className="min-h-[40px] px-3 py-2 rounded-xl bg-[#A7D66D] hover:bg-[#b8e284] text-[#071B33] text-xs font-bold transition-colors"
                      >
                        View Details
                      </button>

                      <button
                        type="button"
                        onClick={() => addToBag(product.id)}
                        className="min-h-[40px] px-3 py-2 rounded-xl bg-[#263D55] hover:bg-[#314d6a] text-[#F3F6FA] text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-[#A7D66D]" aria-hidden="true" />
                        <span>Add to Bag</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => toggleCompare(product.id)}
                        aria-pressed={compared}
                        className={`min-h-[40px] px-3 py-2 rounded-xl border text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-colors ${
                          compared
                            ? 'bg-[#A7D66D] border-[#A7D66D] text-[#071B33]'
                            : compareFull
                              ? 'bg-[#071B33]/40 border-[#263D55] text-[#AAB6C3]'
                              : 'bg-[#071B33]/50 border-[#263D55] text-[#F3F6FA] hover:bg-[#263D55]'
                        }`}
                      >
                        {compared ? (
                          <Check className="w-3.5 h-3.5 text-[#071B33]" aria-hidden="true" />
                        ) : (
                          <Scale className="w-3.5 h-3.5 text-[#AAB6C3]" aria-hidden="true" />
                        )}
                        <span>{compared ? 'In Compare' : 'Compare'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => toggleWishlist(product.id)}
                        className="min-h-[40px] px-3 py-2 rounded-xl border border-[#263D55] bg-[#071B33]/50 hover:border-red-400/70 hover:text-red-300 text-xs font-semibold text-[#AAB6C3] inline-flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
};
