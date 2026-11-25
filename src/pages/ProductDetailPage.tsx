import React, { useState } from 'react';
import {
  ArrowLeft,
  Check,
  ChevronRight,
  Heart,
  Scale,
  ShoppingBag,
  Star,
  BookOpen,
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useApp } from '../context/AppContext';
import { ProductImage } from '../components/ProductImage';
import { ProductCard } from '../components/ProductCard';
import { formatGBP, getKnowledgeLabel } from '../utils/adaptiveLogic';
import { KnowledgeLevel } from '../types';

interface ProductDetailPageProps {
  productId: string;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId }) => {
  const {
    navigate,
    navigateToCategory,
    knowledgeLevel,
    toggleWishlist,
    isInWishlist,
    toggleCompare,
    isInCompare,
    compareIds,
    addToBag,
    setIsBagOpen,
  } = useApp();

  const [previewLevel, setPreviewLevel] = useState<KnowledgeLevel | null>(null);
  const activeLevel: KnowledgeLevel = previewLevel ?? knowledgeLevel ?? 'somewhat_familiar';

  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="font-display text-2xl font-extrabold text-[#F3F6FA]">
          Product not found
        </h1>
        <p className="mt-2 text-sm text-[#AAB6C3]">
          The requested device could not be located in the prototype catalogue.
        </p>
        <button
          type="button"
          onClick={() => navigate({ page: 'catalogue' })}
          className="mt-6 min-h-[42px] px-6 py-2.5 rounded-xl bg-[#A7D66D] hover:bg-[#b8e284] text-[#071B33] font-bold text-sm transition-colors"
        >
          Back to Products
        </button>
      </div>
    );
  }

  const saved = isInWishlist(product.id);
  const compared = isInCompare(product.id);
  const compareFull = compareIds.length >= 3 && !compared;

  const sameCategory = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  );
  const otherCategory = PRODUCTS.filter(
    (p) => p.category !== product.category && p.id !== product.id
  );
  const relatedProducts = [...sameCategory, ...otherCategory].slice(0, 3);

  const specRows: Array<{ label: string; value: string }> = [
    { label: 'Processor / Chipset', value: product.specs.processor },
    { label: 'Display / Controls', value: product.specs.display },
    { label: 'Memory & Storage', value: product.specs.memoryStorage },
    { label: 'Battery & Power', value: product.specs.battery },
    { label: 'Connectivity', value: product.specs.connectivity },
    { label: 'Weight', value: product.specs.weight },
  ];

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
        <button
          type="button"
          onClick={() => navigateToCategory(product.category)}
          className="hover:text-[#A7D66D] hover:underline font-medium"
        >
          {product.category}
        </button>
        <ChevronRight className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span className="font-semibold text-[#F3F6FA]" aria-current="page">
          {product.name}
        </span>
      </nav>

      {/* Back to Products */}
      <div className="mb-6">
        <button
          type="button"
          onClick={() => navigate({ page: 'catalogue' })}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#A7D66D] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to Products</span>
        </button>
      </div>

      {/* Contiguous Product Hero & Purchase Module */}
      <section className="bg-[#102B49] border border-[#263D55] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-black/25">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Product Visual */}
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#0B213B] border border-[#263D55]">
              <ProductImage
                src={product.image}
                alt={product.name}
                category={product.category}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Contiguous Purchase & Specification Summary */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-bold uppercase tracking-widest text-[#A7D66D]">
                {product.brand} <span aria-hidden="true">·</span> {product.category}
              </span>
              <span className="inline-flex items-center gap-1 tabular-nums font-semibold text-[#F3F6FA]">
                <Star className="w-4 h-4 fill-[#A7D66D] text-[#A7D66D]" aria-hidden="true" />
                <span>{product.sampleRating.toFixed(1)}</span>
                <span className="text-[#AAB6C3] font-normal">(Sample demonstration rating)</span>
              </span>
            </div>

            <h1 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-[#F3F6FA] tracking-tight">
              {product.name}
            </h1>

            <div className="mt-4 pb-5 border-b border-[#263D55] flex flex-wrap items-baseline gap-3">
              <span className="font-display text-3xl font-extrabold text-[#A7D66D] tabular-nums">
                {formatGBP(product.price)}
              </span>
              <span className="text-xs font-medium text-[#AAB6C3]">
                Illustrative sample price (academic prototype)
              </span>
            </div>

            <p className="mt-5 text-base text-[#F3F6FA]/90 leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Primary Actions */}
            <div className="mt-6 space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => {
                    addToBag(product.id);
                    setIsBagOpen(true);
                  }}
                  className="flex-1 min-h-[46px] px-5 py-3 rounded-xl bg-[#A7D66D] hover:bg-[#b8e284] text-[#071B33] font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                >
                  <ShoppingBag className="w-4 h-4" aria-hidden="true" />
                  <span>Add to Bag (Demo)</span>
                </button>

                <button
                  type="button"
                  onClick={() => toggleWishlist(product.id)}
                  aria-pressed={saved}
                  className={`min-h-[46px] px-5 py-3 rounded-xl border text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap ${
                    saved
                      ? 'bg-[#A7D66D]/20 border-[#A7D66D] text-[#A7D66D]'
                      : 'bg-[#071B33]/60 border-[#263D55] text-[#F3F6FA] hover:bg-[#263D55]'
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 ${saved ? 'fill-[#A7D66D] text-[#A7D66D]' : 'text-[#AAB6C3]'}`}
                    aria-hidden="true"
                  />
                  <span>{saved ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => toggleCompare(product.id)}
                  aria-pressed={compared}
                  className={`flex-1 min-h-[42px] px-4 py-2 rounded-xl border text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap ${
                    compared
                      ? 'bg-[#A7D66D] border-[#A7D66D] text-[#071B33]'
                      : compareFull
                        ? 'bg-[#071B33]/40 border-[#263D55] text-[#AAB6C3] hover:border-[#A7D66D]/50'
                        : 'bg-[#071B33]/60 border-[#263D55] text-[#F3F6FA] hover:bg-[#263D55]'
                  }`}
                >
                  {compared ? (
                    <Check className="w-4 h-4 text-[#071B33]" aria-hidden="true" />
                  ) : (
                    <Scale className="w-4 h-4 text-[#AAB6C3]" aria-hidden="true" />
                  )}
                  <span>
                    {compared
                      ? `Added to Compare (${compareIds.length}/3)`
                      : `Add to Compare (${compareIds.length}/3)`}
                  </span>
                </button>

                {compareIds.length > 0 && (
                  <button
                    type="button"
                    onClick={() => navigate({ page: 'compare' })}
                    className="min-h-[42px] px-5 py-2 rounded-xl bg-[#263D55] hover:bg-[#314d6a] border border-[#263D55] text-[#F3F6FA] text-sm font-semibold whitespace-nowrap transition-colors"
                  >
                    Open Comparison ({compareIds.length})
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adaptive Knowledge-Level Presentation */}
      <section
        aria-labelledby="adaptive-explanation-heading"
        className="mt-8 bg-[#102B49] border border-[#263D55] rounded-3xl p-6 sm:p-8"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-[#263D55]">
          <div className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-[#A7D66D] shrink-0 mt-1" aria-hidden="true" />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#A7D66D]">
                Adapted for: {getKnowledgeLabel(activeLevel)}
                {!knowledgeLevel && !previewLevel && ' (Default view)'}
              </p>
              <h2
                id="adaptive-explanation-heading"
                className="font-display text-2xl font-extrabold text-[#F3F6FA] mt-0.5"
              >
                {activeLevel === 'beginner' && 'Simple Explanation'}
                {activeLevel === 'somewhat_familiar' && 'Balanced Overview & Practical Notes'}
                {activeLevel === 'very_familiar' && 'Detailed Technical Information'}
              </h2>
            </div>
          </div>

          {/* Interactive level preview selector for user control */}
          <div
            className="inline-flex items-center gap-1 p-1 bg-[#071B33] border border-[#263D55] rounded-xl self-start"
            role="group"
            aria-label="Preview explanation by familiarity level"
          >
            {(
              [
                { id: 'beginner', label: 'Beginner' },
                { id: 'somewhat_familiar', label: 'Somewhat familiar' },
                { id: 'very_familiar', label: 'Very familiar' },
              ] as Array<{ id: KnowledgeLevel; label: string }>
            ).map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setPreviewLevel(opt.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                  activeLevel === opt.id
                    ? 'bg-[#A7D66D] text-[#071B33] font-bold'
                    : 'text-[#AAB6C3] hover:text-[#F3F6FA]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Beginner Explanation */}
        {activeLevel === 'beginner' && (
          <div className="pt-6 space-y-5">
            <p className="text-base text-[#F3F6FA]/90 leading-relaxed">
              {product.knowledgeExplanations.beginner.summary}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {product.knowledgeExplanations.beginner.specTips.map((tip) => (
                <div
                  key={tip.label}
                  className="p-5 rounded-2xl bg-[#071B33]/75 border border-[#263D55]"
                >
                  <h3 className="font-display text-base font-bold text-[#A7D66D]">
                    {tip.label}
                  </h3>
                  <p className="mt-2 text-sm text-[#AAB6C3] leading-relaxed">
                    {tip.plainExplanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Somewhat Familiar Explanation */}
        {activeLevel === 'somewhat_familiar' && (
          <div className="pt-6 space-y-5">
            <p className="text-base text-[#F3F6FA]/90 leading-relaxed">
              {product.knowledgeExplanations.somewhat_familiar.summary}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {product.knowledgeExplanations.somewhat_familiar.highlights.map((item) => (
                <div
                  key={item}
                  className="p-4 rounded-2xl bg-[#071B33]/75 border border-[#263D55] flex items-start gap-2.5"
                >
                  <Check
                    className="w-4 h-4 text-[#A7D66D] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-[#F3F6FA]/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Very Familiar Explanation */}
        {activeLevel === 'very_familiar' && (
          <div className="pt-6 space-y-5">
            <p className="text-base text-[#F3F6FA]/90 leading-relaxed">
              {product.knowledgeExplanations.very_familiar.summary}
            </p>
            <div className="divide-y divide-[#263D55] border border-[#263D55] rounded-2xl overflow-hidden bg-[#071B33]/75">
              {product.knowledgeExplanations.very_familiar.technicalDetails.map((row) => (
                <div
                  key={row.metric}
                  className="p-4 sm:px-5 grid grid-cols-1 md:grid-cols-12 gap-2"
                >
                  <div className="md:col-span-3 text-xs sm:text-sm font-bold text-[#A7D66D]">
                    {row.metric}
                  </div>
                  <div className="md:col-span-9 text-xs sm:text-sm font-mono text-[#F3F6FA]/90 leading-relaxed">
                    {row.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Key Technical Specifications & Features */}
      <section className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 bg-[#102B49] border border-[#263D55] rounded-3xl p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-[#F3F6FA] pb-4 border-b border-[#263D55]">
            Key Technical Specifications
          </h2>
          <dl className="divide-y divide-[#263D55]">
            {specRows.map((row) => (
              <div
                key={row.label}
                className="py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 text-sm"
              >
                <dt className="sm:col-span-4 font-semibold text-[#A7D66D]">{row.label}</dt>
                <dd className="sm:col-span-8 text-[#F3F6FA]/90 tabular-nums">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5 bg-[#102B49] border border-[#263D55] rounded-3xl p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-[#F3F6FA] pb-4 border-b border-[#263D55]">
            Key Features
          </h2>
          <ul className="mt-4 space-y-3">
            {product.keyFeatures.map((feat) => (
              <li key={feat} className="flex items-start gap-3 text-sm text-[#F3F6FA]/90">
                <span className="w-5 h-5 rounded-full bg-[#A7D66D] text-[#071B33] inline-flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
                <span className="leading-relaxed">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Products */}
      <section className="mt-14 pt-10 border-t border-[#263D55]" aria-labelledby="related-heading">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2
            id="related-heading"
            className="font-display text-2xl sm:text-3xl font-extrabold text-[#F3F6FA]"
          >
            Related Products
          </h2>
          <button
            type="button"
            onClick={() => navigate({ page: 'catalogue' })}
            className="text-sm font-semibold text-[#A7D66D] hover:underline"
          >
            View All Products
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts.map((rel) => (
            <ProductCard key={rel.id} product={rel} />
          ))}
        </div>
      </section>
    </div>
  );
};
