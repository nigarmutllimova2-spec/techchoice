import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, Plus, Scale, Star, Trash2 } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useApp } from '../context/AppContext';
import { ProductImage } from '../components/ProductImage';
import { formatGBP } from '../utils/adaptiveLogic';

export const ComparePage: React.FC = () => {
  const {
    compareIds,
    toggleCompare,
    removeCompare,
    clearCompare,
    navigate,
    navigateToProduct,
    addToBag,
  } = useApp();

  const [selectedQuickAdd, setSelectedQuickAdd] = useState<string>('');

  const comparedProducts = compareIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  const availableToAdd = PRODUCTS.filter((p) => !compareIds.includes(p.id));

  const lowestPrice =
    comparedProducts.length >= 2
      ? Math.min(...comparedProducts.map((p) => p.price))
      : null;

  const highestRating =
    comparedProducts.length >= 2
      ? Math.max(...comparedProducts.map((p) => p.sampleRating))
      : null;

  const handleQuickAdd = (productId: string) => {
    if (!productId) return;
    toggleCompare(productId);
    setSelectedQuickAdd('');
  };

  const specComparisonRows: Array<{
    label: string;
    getValue: (p: (typeof PRODUCTS)[number]) => string;
  }> = [
    { label: 'Brand', getValue: (p) => p.brand },
    { label: 'Category', getValue: (p) => p.category },
    { label: 'Processor / Chipset', getValue: (p) => p.specs.processor },
    { label: 'Display / Controls', getValue: (p) => p.specs.display },
    { label: 'Memory & Storage', getValue: (p) => p.specs.memoryStorage },
    { label: 'Battery & Power', getValue: (p) => p.specs.battery },
    { label: 'Connectivity', getValue: (p) => p.specs.connectivity },
    { label: 'Weight', getValue: (p) => p.specs.weight },
  ];

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
          Compare Products
        </span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#263D55]">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#A7D66D] tabular-nums">
            Side-by-Side Comparison · {comparedProducts.length} of 3 selected
          </p>
          <h1 className="mt-1.5 font-display text-3xl sm:text-4xl font-extrabold text-[#F3F6FA] tracking-tight">
            Compare Products
          </h1>
          <p className="mt-2 text-sm text-[#AAB6C3]">
            Select up to 3 devices to inspect prices, specifications, and key features side by
            side. Rows with differing values are subtly highlighted.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => navigate({ page: 'catalogue' })}
            className="min-h-[40px] px-4 py-2 rounded-xl bg-[#263D55] hover:bg-[#314d6a] border border-[#263D55] text-[#F3F6FA] text-sm font-semibold inline-flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#A7D66D]" aria-hidden="true" />
            <span>Back to Catalogue</span>
          </button>

          {comparedProducts.length > 0 && (
            <button
              type="button"
              onClick={clearCompare}
              className="min-h-[40px] px-4 py-2 rounded-xl border border-[#263D55] bg-[#102B49] hover:border-red-400/70 text-sm font-semibold text-[#AAB6C3] hover:text-red-300 transition-colors"
            >
              Clear Comparison
            </button>
          )}
        </div>
      </div>

      {/* Add Another Product Bar (when < 3 selected) */}
      {comparedProducts.length < 3 && (
        <div className="mt-6 bg-[#102B49] border border-[#263D55] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-sm text-[#F3F6FA]">
            <Plus className="w-4 h-4 text-[#A7D66D] shrink-0" aria-hidden="true" />
            <span>
              <strong>Add another product</strong> ({3 - comparedProducts.length} slot
              {3 - comparedProducts.length === 1 ? '' : 's'} remaining)
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <label htmlFor="quick-add-compare" className="sr-only">
              Select a product to add to comparison
            </label>
            <select
              id="quick-add-compare"
              value={selectedQuickAdd}
              onChange={(e) => handleQuickAdd(e.target.value)}
              className="min-h-[40px] px-3.5 py-2 rounded-xl border border-[#263D55] bg-[#071B33] text-sm font-medium text-[#F3F6FA]"
            >
              <option value="">Select a device to add...</option>
              {availableToAdd.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({formatGBP(p.price)})
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={() => navigate({ page: 'catalogue' })}
              className="min-h-[40px] px-5 py-2 rounded-xl bg-[#A7D66D] hover:bg-[#b8e284] text-[#071B33] font-bold text-sm transition-colors whitespace-nowrap"
            >
              Browse Catalogue
            </button>
          </div>
        </div>
      )}

      {/* Helpful Instruction when fewer than 2 products selected */}
      {comparedProducts.length < 2 && (
        <div className="mt-6 bg-[#102B49] border border-[#A7D66D]/40 rounded-2xl p-5 flex items-start gap-3">
          <Scale className="w-5 h-5 text-[#A7D66D] shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h2 className="font-display text-sm font-bold text-[#F3F6FA]">
              {comparedProducts.length === 0
                ? 'Select at least 2 products to compare'
                : 'Add 1 more product to compare side by side'}
            </h2>
            <p className="mt-1 text-sm text-[#AAB6C3]">
              Use the selector above or click &ldquo;Compare&rdquo; on any product card in the
              catalogue or wishlist. You can compare up to 3 devices at once.
            </p>
          </div>
        </div>
      )}

      {/* Comparison Table */}
      {comparedProducts.length > 0 && (
        <div className="mt-6 bg-[#102B49] border border-[#263D55] rounded-2xl overflow-hidden shadow-xl shadow-black/25">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left border-collapse">
              <thead>
                <tr className="border-b border-[#263D55] align-top">
                  <th className="w-48 p-5 bg-[#0B213B] text-xs font-bold uppercase tracking-widest text-[#A7D66D]">
                    Device Overview
                  </th>
                  {comparedProducts.map((product) => (
                    <th key={product.id} className="p-5 align-top min-w-[220px]">
                      <div className="flex flex-col h-full">
                        <button
                          type="button"
                          onClick={() => navigateToProduct(product.id)}
                          className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#0B213B] border border-[#263D55] mb-3"
                        >
                          <ProductImage
                            src={product.image}
                            alt={product.name}
                            category={product.category}
                            className="w-full h-full object-cover"
                          />
                        </button>

                        <button
                          type="button"
                          onClick={() => navigateToProduct(product.id)}
                          className="font-display text-base font-bold text-[#F3F6FA] hover:text-[#A7D66D] text-left transition-colors"
                        >
                          {product.name}
                        </button>

                        <div className="mt-3 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => addToBag(product.id)}
                            className="flex-1 min-h-[38px] px-3 py-1.5 rounded-xl bg-[#A7D66D] hover:bg-[#b8e284] text-[#071B33] text-xs font-bold transition-colors whitespace-nowrap"
                          >
                            Add to Bag
                          </button>
                          <button
                            type="button"
                            onClick={() => removeCompare(product.id)}
                            aria-label={`Remove ${product.name} from comparison`}
                            className="min-h-[38px] px-3 py-1.5 rounded-xl border border-[#263D55] bg-[#071B33]/60 hover:border-red-400/70 hover:text-red-300 text-[#AAB6C3] transition-colors"
                          >
                            <Trash2 className="w-4 h-4" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-[#263D55] text-sm">
                {/* Price Row */}
                <tr>
                  <th className="p-4 sm:px-5 bg-[#0B213B] font-semibold text-[#A7D66D]">
                    Illustrative Price
                  </th>
                  {comparedProducts.map((product) => {
                    const isBestPrice =
                      lowestPrice !== null && product.price === lowestPrice;
                    return (
                      <td
                        key={product.id}
                        className={`p-4 sm:px-5 tabular-nums ${
                          isBestPrice ? 'bg-[#A7D66D]/15' : ''
                        }`}
                      >
                        <span
                          className={`font-display text-lg font-extrabold ${
                            isBestPrice ? 'text-[#A7D66D]' : 'text-[#F3F6FA]'
                          }`}
                        >
                          {formatGBP(product.price)}
                        </span>
                        {isBestPrice && (
                          <span className="block text-xs font-bold text-[#A7D66D] mt-0.5">
                            Lowest price in selection
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>

                {/* Sample Rating Row */}
                <tr>
                  <th className="p-4 sm:px-5 bg-[#0B213B] font-semibold text-[#A7D66D]">
                    Sample Rating
                  </th>
                  {comparedProducts.map((product) => {
                    const isTopRating =
                      highestRating !== null && product.sampleRating === highestRating;
                    return (
                      <td
                        key={product.id}
                        className={`p-4 sm:px-5 tabular-nums ${
                          isTopRating ? 'bg-[#A7D66D]/[0.07]' : ''
                        }`}
                      >
                        <span className="inline-flex items-center gap-1 font-semibold text-[#F3F6FA]">
                          <Star
                            className="w-4 h-4 fill-[#A7D66D] text-[#A7D66D]"
                            aria-hidden="true"
                          />
                          <span>{product.sampleRating.toFixed(1)}</span>
                          <span className="text-xs font-normal text-[#AAB6C3]">(Sample)</span>
                        </span>
                      </td>
                    );
                  })}
                </tr>

                {/* Spec Rows with difference highlighting */}
                {specComparisonRows.map((row) => {
                  const values = comparedProducts.map((p) => row.getValue(p));
                  const hasDifference =
                    comparedProducts.length >= 2 && new Set(values).size > 1;
                  return (
                    <tr key={row.label} className={hasDifference ? 'bg-[#263D55]/35' : ''}>
                      <th className="p-4 sm:px-5 bg-[#0B213B] font-semibold text-[#A7D66D] align-top">
                        <span>{row.label}</span>
                        {hasDifference && (
                          <span className="block text-[11px] font-semibold text-[#AAB6C3] mt-0.5">
                            Differs
                          </span>
                        )}
                      </th>
                      {comparedProducts.map((product) => (
                        <td
                          key={product.id}
                          className="p-4 sm:px-5 text-[#F3F6FA]/90 align-top leading-relaxed"
                        >
                          {row.getValue(product)}
                        </td>
                      ))}
                    </tr>
                  );
                })}

                {/* Key Features Row */}
                <tr>
                  <th className="p-4 sm:px-5 bg-[#0B213B] font-semibold text-[#A7D66D] align-top">
                    Key Features
                  </th>
                  {comparedProducts.map((product) => (
                    <td key={product.id} className="p-4 sm:px-5 align-top">
                      <ul className="space-y-1.5 text-xs sm:text-sm text-[#F3F6FA]/90 list-disc pl-4">
                        {product.keyFeatures.map((feat) => (
                          <li key={feat}>{feat}</li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
