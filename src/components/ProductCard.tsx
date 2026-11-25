import React from 'react';
import { Heart, Scale, Star, ArrowRight, Check } from 'lucide-react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';
import { formatGBP } from '../utils/adaptiveLogic';
import { ProductImage } from './ProductImage';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    navigateToProduct,
    toggleWishlist,
    isInWishlist,
    toggleCompare,
    isInCompare,
    compareIds,
  } = useApp();

  const saved = isInWishlist(product.id);
  const compared = isInCompare(product.id);
  const compareFull = compareIds.length >= 3 && !compared;

  return (
    <article className="group flex flex-col bg-[#102B49] border border-[#263D55] hover:border-[#A7D66D]/60 rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30">
      <button
        type="button"
        onClick={() => navigateToProduct(product.id)}
        className="relative aspect-[4/3] w-full bg-[#0B213B] overflow-hidden text-left border-b border-[#263D55]"
        aria-label={`View details for ${product.name}`}
      >
        <ProductImage
          src={product.image}
          alt={product.name}
          category={product.category}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </button>

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center justify-between gap-2 text-xs text-[#AAB6C3]">
          <span className="font-semibold tracking-wide uppercase text-[#A7D66D]">
            {product.brand} <span aria-hidden="true">·</span> {product.subType}
          </span>
          <span className="inline-flex items-center gap-1 tabular-nums text-[#F3F6FA] font-semibold">
            <Star className="w-3.5 h-3.5 fill-[#A7D66D] text-[#A7D66D]" aria-hidden="true" />
            <span>{product.sampleRating.toFixed(1)}</span>
            <span className="text-[#AAB6C3] font-normal">(Sample)</span>
          </span>
        </div>

        <h3 className="mt-2 font-display text-lg font-bold text-[#F3F6FA] leading-snug tracking-wide">
          <button
            type="button"
            onClick={() => navigateToProduct(product.id)}
            className="text-left hover:text-[#A7D66D] transition-colors"
          >
            {product.name}
          </button>
        </h3>

        <p className="mt-2 text-sm text-[#AAB6C3] leading-relaxed line-clamp-2 flex-1">
          {product.shortDescription}
        </p>

        <div className="mt-4 pt-4 border-t border-[#263D55] flex items-baseline justify-between gap-2">
          <div>
            <span className="font-display text-xl font-extrabold text-[#A7D66D] tabular-nums">
              {formatGBP(product.price)}
            </span>
            <span className="ml-1.5 text-xs text-[#AAB6C3]">Sample price</span>
          </div>
          <span className="text-xs font-medium text-[#AAB6C3]">{product.category}</span>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <button
            type="button"
            onClick={() => navigateToProduct(product.id)}
            className="w-full min-h-[42px] px-4 py-2 rounded-xl bg-[#A7D66D] hover:bg-[#b8e284] text-[#071B33] font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => toggleWishlist(product.id)}
              aria-pressed={saved}
              className={`min-h-[40px] px-3 py-2 rounded-xl border text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap ${
                saved
                  ? 'bg-[#A7D66D]/20 border-[#A7D66D] text-[#A7D66D]'
                  : 'bg-[#071B33]/50 border-[#263D55] text-[#F3F6FA] hover:bg-[#263D55]'
              }`}
            >
              <Heart
                className={`w-3.5 h-3.5 ${saved ? 'fill-[#A7D66D] text-[#A7D66D]' : 'text-[#AAB6C3]'}`}
                aria-hidden="true"
              />
              <span>{saved ? 'Saved' : 'Wishlist'}</span>
            </button>

            <button
              type="button"
              onClick={() => toggleCompare(product.id)}
              aria-pressed={compared}
              title={
                compareFull
                  ? 'Maximum 3 products can be compared at once'
                  : compared
                    ? 'Remove from comparison'
                    : 'Add to comparison'
              }
              className={`min-h-[40px] px-3 py-2 rounded-xl border text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap ${
                compared
                  ? 'bg-[#A7D66D] border-[#A7D66D] text-[#071B33]'
                  : compareFull
                    ? 'bg-[#071B33]/40 border-[#263D55] text-[#AAB6C3] hover:border-[#A7D66D]/50'
                    : 'bg-[#071B33]/50 border-[#263D55] text-[#F3F6FA] hover:bg-[#263D55]'
              }`}
            >
              {compared ? (
                <Check className="w-3.5 h-3.5 text-[#071B33]" aria-hidden="true" />
              ) : (
                <Scale className="w-3.5 h-3.5 text-[#AAB6C3]" aria-hidden="true" />
              )}
              <span>{compared ? 'Comparing' : 'Compare'}</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
