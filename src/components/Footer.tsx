import React from 'react';
import { RotateCcw } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { navigate, startAgain } = useApp();

  return (
    <footer className="bg-[#051426] text-[#F3F6FA] border-t border-[#263D55] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#263D55]">
          <div className="md:col-span-5 space-y-3">
            <div className="font-display text-2xl font-extrabold tracking-tight">
              Tech<span className="text-[#A7D66D]">Choice</span>
            </div>
            <p className="text-sm font-semibold text-[#A7D66D]">
              Smart shopping. Better decisions.
            </p>
            <p className="text-sm text-[#AAB6C3] leading-relaxed max-w-md">
              University academic HCI prototype exploring &ldquo;Adaptive Choice Reduction:
              Personalising the Number of Options&rdquo; through transparent, rule-based
              recommendation sizing.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2.5">
            <h3 className="font-display text-sm font-bold text-[#F3F6FA]">Navigation</h3>
            <ul className="space-y-2 text-sm text-[#AAB6C3] font-medium">
              <li>
                <button
                  type="button"
                  onClick={() => navigate({ page: 'home' })}
                  className="hover:text-[#A7D66D] transition-colors"
                >
                  Home &amp; Onboarding
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate({ page: 'categories' })}
                  className="hover:text-[#A7D66D] transition-colors"
                >
                  Product Categories
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate({ page: 'catalogue' })}
                  className="hover:text-[#A7D66D] transition-colors"
                >
                  Adaptive Catalogue
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate({ page: 'compare' })}
                  className="hover:text-[#A7D66D] transition-colors"
                >
                  Compare Products
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate({ page: 'wishlist' })}
                  className="hover:text-[#A7D66D] transition-colors"
                >
                  Wishlist
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h3 className="font-display text-sm font-bold text-[#F3F6FA]">
              Academic Prototype Scope
            </h3>
            <p className="text-xs text-[#AAB6C3] leading-relaxed">
              This rule-based frontend prototype demonstrates goal- and knowledge-based
              adaptive list sizes, user-controlled expansion, filtering, comparison, and
              satisfaction feedback. It uses illustrative sample prices and ratings, and does
              not train an AI model or process real payments.
            </p>
            <button
              type="button"
              onClick={startAgain}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#263D55] hover:bg-[#314d6a] text-sm font-semibold text-[#F3F6FA] transition-colors"
            >
              <RotateCcw className="w-4 h-4 text-[#A7D66D]" aria-hidden="true" />
              <span>Start Again / Reset Session</span>
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#AAB6C3]/80 font-medium">
          <span>TechChoice Academic HCI Prototype · Rule-Based Choice Reduction</span>
          <span>Illustrative sample dataset (15 devices) · Frontend only</span>
        </div>
      </div>
    </footer>
  );
};
