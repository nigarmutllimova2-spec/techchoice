import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, Info } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';
import { formatGBP } from '../utils/adaptiveLogic';
import { ProductImage } from './ProductImage';

export const DemoBagDrawer: React.FC = () => {
  const {
    isBagOpen,
    setIsBagOpen,
    bagItems,
    updateBagQuantity,
    removeFromBag,
    clearBag,
    navigate,
    navigateToProduct,
  } = useApp();

  if (!isBagOpen) return null;

  const detailedItems = bagItems
    .map((item) => {
      const product = PRODUCTS.find((p) => p.id === item.productId);
      return product ? { ...item, product } : null;
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null);

  const subtotal = detailedItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/65 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-bag-heading"
    >
      <div
        className="flex-1"
        onClick={() => setIsBagOpen(false)}
        aria-hidden="true"
      />

      <aside className="w-full max-w-md bg-[#102B49] text-[#F3F6FA] h-full flex flex-col shadow-2xl border-l border-[#263D55]">
        <div className="px-6 py-5 bg-[#071B33] border-b border-[#263D55] flex items-center justify-between gap-4">
          <div>
            <h2
              id="demo-bag-heading"
              className="font-display text-lg font-bold text-[#F3F6FA] flex items-center gap-2"
            >
              <ShoppingBag className="w-5 h-5 text-[#A7D66D]" aria-hidden="true" />
              <span>Demonstration Shopping Bag</span>
            </h2>
            <p className="mt-0.5 text-xs text-[#AAB6C3]">
              Academic prototype only · No real checkout or payment
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsBagOpen(false)}
            aria-label="Close demonstration shopping bag"
            className="p-2 rounded-lg text-[#AAB6C3] hover:text-[#F3F6FA] hover:bg-[#263D55] transition-colors"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="px-6 py-3 bg-[#263D55]/60 border-b border-[#263D55] flex items-start gap-2.5 text-xs text-[#AAB6C3]">
          <Info className="w-4 h-4 text-[#A7D66D] shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            This bag demonstrates e-commerce selection state. Prices are illustrative sample figures
            and no payment or order processing occurs.
          </span>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
          {detailedItems.length === 0 ? (
            <div className="py-16 text-center">
              <ShoppingBag
                className="w-10 h-10 mx-auto text-[#AAB6C3]/45"
                aria-hidden="true"
              />
              <p className="mt-4 font-display text-lg font-bold text-[#F3F6FA]">
                Your demonstration bag is empty
              </p>
              <p className="mt-1.5 text-sm text-[#AAB6C3]">
                Explore products in the catalogue and add any device to preview quantity and
                subtotal calculations.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsBagOpen(false);
                  navigate({ page: 'catalogue' });
                }}
                className="mt-6 px-6 py-2.5 rounded-xl bg-[#A7D66D] hover:bg-[#b8e284] text-[#071B33] font-bold text-sm transition-colors"
              >
                Browse Products
              </button>
            </div>
          ) : (
            detailedItems.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex gap-4 pb-4 border-b border-[#263D55] last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => {
                    setIsBagOpen(false);
                    navigateToProduct(product.id);
                  }}
                  className="w-20 h-16 rounded-xl overflow-hidden bg-[#0B213B] border border-[#263D55] shrink-0"
                  aria-label={`View ${product.name}`}
                >
                  <ProductImage
                    src={product.image}
                    alt={product.name}
                    category={product.category}
                    className="w-full h-full object-cover"
                  />
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setIsBagOpen(false);
                        navigateToProduct(product.id);
                      }}
                      className="font-display text-sm font-bold text-[#F3F6FA] hover:text-[#A7D66D] text-left truncate"
                    >
                      {product.name}
                    </button>
                    <button
                      type="button"
                      onClick={() => removeFromBag(product.id)}
                      aria-label={`Remove ${product.name} from bag`}
                      className="p-1 text-[#AAB6C3] hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>

                  <p className="text-xs text-[#AAB6C3] mt-0.5">
                    {formatGBP(product.price)} illustrative each
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="inline-flex items-center border border-[#263D55] bg-[#071B33] rounded-lg">
                      <button
                        type="button"
                        onClick={() => updateBagQuantity(product.id, -1)}
                        aria-label={`Decrease quantity of ${product.name}`}
                        className="w-8 h-8 inline-flex items-center justify-center text-[#F3F6FA] hover:text-[#A7D66D]"
                      >
                        <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                      <span
                        className="w-8 text-center text-sm font-bold tabular-nums text-[#F3F6FA]"
                        aria-label={`Quantity: ${quantity}`}
                      >
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateBagQuantity(product.id, 1)}
                        aria-label={`Increase quantity of ${product.name}`}
                        className="w-8 h-8 inline-flex items-center justify-center text-[#F3F6FA] hover:text-[#A7D66D]"
                      >
                        <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>

                    <span className="font-display text-base font-extrabold text-[#A7D66D] tabular-nums">
                      {formatGBP(product.price * quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {detailedItems.length > 0 && (
          <div className="p-6 border-t border-[#263D55] bg-[#071B33] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-[#AAB6C3]">Demo Subtotal</span>
              <span className="font-display text-2xl font-extrabold text-[#A7D66D] tabular-nums">
                {formatGBP(subtotal)}
              </span>
            </div>
            <p className="text-xs text-[#AAB6C3]">
              Checkout and payment collection are disabled in this university prototype.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={clearBag}
                className="flex-1 min-h-[42px] px-4 py-2 rounded-xl bg-[#263D55] hover:bg-[#314d6a] text-[#F3F6FA] text-sm font-semibold transition-colors"
              >
                Clear Demo Bag
              </button>
              <button
                type="button"
                onClick={() => setIsBagOpen(false)}
                className="flex-1 min-h-[42px] px-4 py-2 rounded-xl bg-[#A7D66D] hover:bg-[#b8e284] text-[#071B33] text-sm font-bold transition-colors"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
};
