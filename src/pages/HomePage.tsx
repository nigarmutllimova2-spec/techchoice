import React, { useRef } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Compass,
  ShoppingCart,
  SlidersHorizontal,
  RotateCcw,
  Star,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CATEGORIES, HERO_IMAGE, PRODUCTS } from '../data/products';
import { KnowledgeLevel, ShoppingGoal } from '../types';
import {
  formatGBP,
  getAdaptiveExplanation,
  getGoalLabel,
  getInitialRecommendationCount,
  getKnowledgeLabel,
} from '../utils/adaptiveLogic';
import { ProductImage } from '../components/ProductImage';
import { ProductCard } from '../components/ProductCard';

const HERO_FLOATING_IDS = [
  'apple-macbook-air-m3',
  'apple-iphone-16',
  'sony-wh-1000xm5',
  'apple-watch-series-10',
];

export const HomePage: React.FC = () => {
  const {
    goal,
    knowledgeLevel,
    onboardingStep,
    setOnboardingStep,
    selectGoal,
    selectKnowledgeLevel,
    visibleCount,
    navigate,
    navigateToProduct,
    navigateToCategory,
    startAgain,
  } = useApp();

  const onboardingRef = useRef<HTMLElement | null>(null);

  const scrollToOnboarding = () => {
    onboardingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const heroProducts = HERO_FLOATING_IDS.map((id) => PRODUCTS.find((p) => p.id === id)).filter(
    (p): p is NonNullable<typeof p> => p !== undefined
  );

  const featuredProducts = PRODUCTS.slice(0, 3);

  const goalCards: Array<{
    id: ShoppingGoal;
    title: string;
    description: string;
    detail: string;
    icon: React.ReactNode;
  }> = [
    {
      id: 'ready_to_buy',
      title: "I'm ready to buy",
      description: 'I have a product in mind and want to find the right device.',
      detail: 'Starts with a focused shortlist (3 to 7 products) to reduce decision fatigue.',
      icon: <ShoppingCart className="w-5 h-5" aria-hidden="true" />,
    },
    {
      id: 'just_exploring',
      title: "I'm just exploring",
      description: 'I want to discover new technology and compare different options.',
      detail: 'Starts with a broader showcase (8 to 12 products) across categories.',
      icon: <Compass className="w-5 h-5" aria-hidden="true" />,
    },
  ];

  const knowledgeOptions: Array<{
    id: KnowledgeLevel;
    title: string;
    description: string;
    adaptationNote: string;
  }> = [
    {
      id: 'beginner',
      title: 'Beginner',
      description:
        'I prefer simple explanations and need help understanding product specifications.',
      adaptationNote: 'Shows plain-language explanations and smaller initial lists.',
    },
    {
      id: 'somewhat_familiar',
      title: 'Somewhat familiar',
      description:
        'I understand basic technical specifications and want useful comparisons.',
      adaptationNote: 'Balances key specifications with practical comparison notes.',
    },
    {
      id: 'very_familiar',
      title: 'Very familiar',
      description:
        'I know what I am looking for and want detailed technical information.',
      adaptationNote: 'Unlocks deeper technical data and wider initial selections.',
    },
  ];

  const recommendedCount =
    goal && knowledgeLevel ? getInitialRecommendationCount(goal, knowledgeLevel) : visibleCount;

  const howItWorksSteps = [
    {
      num: '01',
      title: 'Tell us what you need.',
      description:
        'Share whether you are ready to buy or browsing, along with how comfortable you feel with technical specifications.',
    },
    {
      num: '02',
      title: 'Explore a personalised selection.',
      description:
        'Start with an adaptive list size of 3 to 12 devices tailored to your goal, and expand or narrow the list at any time.',
    },
    {
      num: '03',
      title: 'Compare and choose confidently.',
      description:
        'Inspect plain-language or technical breakdowns, save favourites to your wishlist, and compare up to 3 devices side by side.',
    },
  ];

  return (
    <div className="bg-[#071B33] text-[#F3F6FA]">
      {/* HERO: Deep Dark Navy Atmosphere with Subtle Radial Lighting */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#071B33] via-[#0B233F] to-[#071B33] border-b border-[#263D55]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[780px] h-[420px] rounded-full bg-[#102B49]/80 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-24 right-[-100px] w-[360px] h-[360px] rounded-full bg-[#A7D66D]/8 blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-14 lg:pt-20 lg:pb-18">
          {/* Centered Hero Copy */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#A7D66D]">
              TechChoice · Adaptive Technology Shopping
            </p>

            <h1 className="mt-3 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight text-[#F3F6FA] [text-wrap:balance]">
              Find the technology that moves you forward.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#AAB6C3] leading-relaxed max-w-2xl mx-auto">
              Discover smarter technology, explore products that match your needs, and make
              confident shopping decisions.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <button
                type="button"
                onClick={scrollToOnboarding}
                className="min-h-[48px] px-7 py-3 rounded-xl bg-[#A7D66D] hover:bg-[#b8e284] text-[#071B33] font-bold text-sm sm:text-base inline-flex items-center gap-2 transition-all hover:-translate-y-0.5 shadow-lg shadow-black/25 whitespace-nowrap"
              >
                <span>Start Exploring</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => navigate({ page: 'catalogue' })}
                className="min-h-[48px] px-6 py-3 rounded-xl bg-[#263D55]/70 hover:bg-[#263D55] text-[#F3F6FA] border border-[#263D55] font-semibold text-sm sm:text-base transition-colors whitespace-nowrap"
              >
                View Products
              </button>
            </div>
          </div>

          {/* Dark-Blended Technology Preview Cards */}
          <div className="mt-12 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 items-stretch">
            {heroProducts.map((product, index) => (
              <button
                key={product.id}
                type="button"
                onClick={() => navigateToProduct(product.id)}
                className={`group text-left bg-[#102B49] border border-[#263D55] hover:border-[#A7D66D]/60 rounded-2xl p-3.5 shadow-xl shadow-black/25 transition-all duration-200 hover:-translate-y-1 flex flex-col ${
                  index % 2 === 1 ? 'lg:translate-y-2' : ''
                }`}
              >
                <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#0B213B] border border-[#263D55]">
                  <ProductImage
                    src={product.image}
                    alt={product.name}
                    category={product.category}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="pt-3 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-wide text-[#A7D66D]">
                      <span>{product.subType}</span>
                      <span className="inline-flex items-center gap-0.5 text-[#F3F6FA] tabular-nums">
                        <Star
                          className="w-3 h-3 fill-[#A7D66D] text-[#A7D66D]"
                          aria-hidden="true"
                        />
                        {product.sampleRating.toFixed(1)}
                      </span>
                    </div>
                    <h2 className="mt-1 font-display text-sm font-bold text-[#F3F6FA] group-hover:text-[#A7D66D] transition-colors truncate">
                      {product.name}
                    </h2>
                  </div>

                  <div className="mt-2.5 pt-2.5 border-t border-[#263D55] flex items-center justify-between text-xs">
                    <span className="font-bold text-[#A7D66D] tabular-nums">
                      {formatGBP(product.price)}
                    </span>
                    <span className="font-semibold text-[#AAB6C3] group-hover:text-[#F3F6FA] inline-flex items-center gap-1 transition-colors">
                      Inspect <ArrowRight className="w-3 h-3" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION A – CATEGORY DOMAIN STRIP */}
      <section
        aria-label="Technology domains covered"
        className="bg-[#0B213B] border-b border-[#263D55]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5 text-xs sm:text-sm font-medium text-[#AAB6C3]">
            <span className="text-[#F3F6FA] font-semibold">Curated across 6 categories</span>
            <span aria-hidden="true" className="text-[#263D55]">
              ·
            </span>
            {CATEGORIES.map((cat, idx) => (
              <React.Fragment key={cat.id}>
                {idx > 0 && (
                  <span aria-hidden="true" className="hidden sm:inline text-[#263D55]">
                    /
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => navigateToCategory(cat.id)}
                  className="hover:text-[#A7D66D] transition-colors"
                >
                  {cat.name}
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION B – ABOUT TECHCHOICE */}
      <section className="bg-[#071B33] py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-xs font-bold uppercase tracking-widest text-[#A7D66D]">
                Adaptive Choice Architecture
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#F3F6FA] tracking-tight [text-wrap:balance]">
                Technology shopping, made more adaptive.
              </h2>
              <p className="text-base text-[#AAB6C3] leading-relaxed">
                TechChoice helps people explore technology at their own pace by adapting the
                number of product options to their shopping goals.
              </p>
              <p className="text-sm text-[#AAB6C3] leading-relaxed">
                Instead of overwhelming every shopper with an identical wall of devices, our
                transparent rule table sets a comfortable initial selection between 3 and 12
                products—while keeping you in complete control to show more or fewer at any step.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={scrollToOnboarding}
                  className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#A7D66D] hover:bg-[#b8e284] text-[#071B33] font-bold text-sm inline-flex items-center gap-2 transition-colors"
                >
                  <span>Personalise My List</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => navigate({ page: 'categories' })}
                  className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#263D55] hover:bg-[#314d6a] text-[#F3F6FA] font-semibold text-sm transition-colors"
                >
                  Explore Categories
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#102B49] border border-[#263D55] shadow-2xl shadow-black/30">
                <img
                  src={HERO_IMAGE}
                  alt="Modern desk featuring laptop, wireless headphones, smartphone, and smartwatch"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover brightness-[0.88] contrast-[1.06]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#071B33]/65 via-transparent to-[#102B49]/30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C – HOW IT WORKS */}
      <section className="bg-[#0B213B] py-14 lg:py-20 border-y border-[#263D55]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#A7D66D]">
              How It Works
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-[#F3F6FA] tracking-tight">
              Three calm steps from browsing to clarity.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {howItWorksSteps.map((step) => (
              <div
                key={step.num}
                className="bg-[#102B49] border border-[#263D55] rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#A7D66D] text-[#071B33] font-display text-sm font-extrabold tabular-nums">
                    {step.num}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-[#F3F6FA]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#AAB6C3] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE ONBOARDING SECTION */}
      <section
        ref={onboardingRef}
        id="onboarding-section"
        aria-labelledby="onboarding-heading"
        className="bg-[#071B33] py-14 lg:py-20"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#102B49] border border-[#263D55] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/25">
            {/* Header & Step Progress Indicator */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#263D55]">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#A7D66D]">
                  Adaptive Choice Personalisation · Step {onboardingStep} of 3
                </p>
                <h2
                  id="onboarding-heading"
                  className="mt-1.5 font-display text-2xl sm:text-3xl font-extrabold text-[#F3F6FA]"
                >
                  {onboardingStep === 1 && 'What brings you to TechChoice today?'}
                  {onboardingStep === 2 && 'How familiar are you with technology products?'}
                  {onboardingStep === 3 && 'Your Personalised Shopping Summary'}
                </h2>
              </div>

              <div
                className="flex items-center gap-2 shrink-0"
                role="tablist"
                aria-label="Onboarding steps"
              >
                {[1, 2, 3].map((step) => {
                  const stepNum = step as 1 | 2 | 3;
                  const canJump =
                    stepNum === 1 ||
                    (stepNum === 2 && goal !== null) ||
                    (stepNum === 3 && goal !== null && knowledgeLevel !== null);
                  const isActive = onboardingStep === stepNum;
                  return (
                    <button
                      key={stepNum}
                      type="button"
                      disabled={!canJump}
                      onClick={() => canJump && setOnboardingStep(stepNum)}
                      className={`min-h-[36px] px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
                        isActive
                          ? 'bg-[#A7D66D] text-[#071B33]'
                          : canJump
                            ? 'bg-[#263D55] text-[#F3F6FA] hover:bg-[#314d6a]'
                            : 'bg-[#071B33]/50 text-[#AAB6C3]/40 cursor-not-allowed'
                      }`}
                    >
                      Step {stepNum}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 1: USER GOAL */}
            {onboardingStep === 1 && (
              <div className="pt-8">
                <p className="text-sm sm:text-base text-[#AAB6C3] mb-6">
                  Choose the option that best reflects your visit. You can change your goal at any
                  time.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {goalCards.map((card) => {
                    const selected = goal === card.id;
                    return (
                      <button
                        key={card.id}
                        type="button"
                        onClick={() => selectGoal(card.id)}
                        aria-pressed={selected}
                        className={`text-left p-6 rounded-2xl border-2 transition-all duration-200 flex flex-col justify-between gap-4 hover:-translate-y-0.5 ${
                          selected
                            ? 'border-[#A7D66D] bg-[#071B33] shadow-lg shadow-black/25'
                            : 'border-[#263D55] bg-[#0B213B] hover:border-[#A7D66D]/50 hover:bg-[#071B33]/80'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-3">
                            <span
                              className={`w-11 h-11 rounded-xl inline-flex items-center justify-center ${
                                selected
                                  ? 'bg-[#A7D66D] text-[#071B33]'
                                  : 'bg-[#263D55] text-[#A7D66D]'
                              }`}
                            >
                              {card.icon}
                            </span>
                            {selected && (
                              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A7D66D]">
                                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                                Selected
                              </span>
                            )}
                          </div>

                          <h3 className="mt-4 font-display text-xl font-bold text-[#F3F6FA]">
                            {card.title}
                          </h3>
                          <p className="mt-2 text-sm text-[#AAB6C3] leading-relaxed">
                            {card.description}
                          </p>
                        </div>

                        <p className="pt-3 border-t border-[#263D55] text-xs font-medium text-[#AAB6C3]">
                          {card.detail}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: TECHNOLOGY KNOWLEDGE */}
            {onboardingStep === 2 && (
              <div className="pt-8">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-sm text-[#AAB6C3]">
                  <span>
                    Selected goal:{' '}
                    <strong className="text-[#F3F6FA]">{getGoalLabel(goal)}</strong>
                  </span>
                  <button
                    type="button"
                    onClick={() => setOnboardingStep(1)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#A7D66D] hover:underline"
                  >
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                    <span>Back to Step 1</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {knowledgeOptions.map((option) => {
                    const selected = knowledgeLevel === option.id;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => selectKnowledgeLevel(option.id)}
                        aria-pressed={selected}
                        className={`text-left p-6 rounded-2xl border-2 transition-all duration-200 flex flex-col justify-between gap-4 hover:-translate-y-0.5 ${
                          selected
                            ? 'border-[#A7D66D] bg-[#071B33] shadow-lg shadow-black/25'
                            : 'border-[#263D55] bg-[#0B213B] hover:border-[#A7D66D]/50 hover:bg-[#071B33]/80'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="font-display text-lg font-bold text-[#F3F6FA]">
                              {option.title}
                            </h3>
                            {selected && (
                              <CheckCircle2
                                className="w-5 h-5 text-[#A7D66D] shrink-0"
                                aria-hidden="true"
                              />
                            )}
                          </div>
                          <p className="mt-2.5 text-sm text-[#AAB6C3] leading-relaxed">
                            {option.description}
                          </p>
                        </div>

                        <p className="pt-3 border-t border-[#263D55] text-xs font-medium text-[#AAB6C3]">
                          {option.adaptationNote}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 3: PERSONALISATION SUMMARY */}
            {onboardingStep === 3 && (
              <div className="pt-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-[#071B33] border border-[#263D55]">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#AAB6C3]">
                      Selected shopping goal
                    </p>
                    <p className="mt-1.5 font-display text-lg font-bold text-[#F3F6FA]">
                      {getGoalLabel(goal)}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#071B33] border border-[#263D55]">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#AAB6C3]">
                      Technology knowledge
                    </p>
                    <p className="mt-1.5 font-display text-lg font-bold text-[#F3F6FA]">
                      {getKnowledgeLabel(knowledgeLevel)}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#A7D66D]/15 border border-[#A7D66D]/50">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#A7D66D]">
                      Initial recommended products
                    </p>
                    <p className="mt-1.5 font-display text-2xl font-extrabold text-[#F3F6FA] tabular-nums">
                      {recommendedCount} products
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#263D55]/50 border border-[#263D55] flex items-start gap-3">
                  <SlidersHorizontal
                    className="w-5 h-5 text-[#A7D66D] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-bold text-[#F3F6FA]">
                      How your catalogue has been adapted
                    </p>
                    <p className="mt-1 text-sm text-[#AAB6C3] leading-relaxed">
                      {getAdaptiveExplanation(goal, knowledgeLevel)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setOnboardingStep(2)}
                      className="min-h-[42px] px-4 py-2 rounded-xl border border-[#263D55] bg-[#071B33] hover:bg-[#263D55] text-sm font-semibold text-[#F3F6FA] inline-flex items-center gap-2 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                      <span>Back</span>
                    </button>

                    <button
                      type="button"
                      onClick={startAgain}
                      className="min-h-[42px] px-4 py-2 rounded-xl border border-[#263D55] bg-[#071B33] hover:bg-[#263D55] text-sm font-semibold text-[#AAB6C3] hover:text-[#F3F6FA] inline-flex items-center gap-2 transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" aria-hidden="true" />
                      <span>Start Again</span>
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => navigate({ page: 'categories' })}
                      className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#263D55] hover:bg-[#314d6a] text-[#F3F6FA] font-semibold text-sm transition-colors"
                    >
                      Browse Categories
                    </button>

                    <button
                      type="button"
                      onClick={() => navigate({ page: 'catalogue' })}
                      className="min-h-[44px] px-6 py-2.5 rounded-xl bg-[#A7D66D] hover:bg-[#b8e284] text-[#071B33] font-bold text-sm inline-flex items-center gap-2 transition-colors"
                    >
                      <span>Explore Products</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION D – FEATURED CATEGORIES */}
      <section className="bg-[#0B213B] py-14 lg:py-20 border-t border-[#263D55]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#A7D66D]">
                Featured Categories
              </p>
              <h2 className="mt-1.5 font-display text-3xl font-extrabold text-[#F3F6FA]">
                Browse by device category
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigate({ page: 'categories' })}
              className="text-sm font-semibold text-[#A7D66D] hover:underline inline-flex items-center gap-1.5"
            >
              <span>All Categories</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((category) => {
              const count = PRODUCTS.filter((p) => p.category === category.id).length;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => navigateToCategory(category.id)}
                  className="group text-left bg-[#102B49] border border-[#263D55] hover:border-[#A7D66D]/60 rounded-2xl p-4 flex items-center gap-4 transition-all hover:-translate-y-0.5"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#0B213B] border border-[#263D55] shrink-0">
                    <ProductImage
                      src={category.image}
                      alt={category.name}
                      category={category.id}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-base font-bold text-[#F3F6FA] group-hover:text-[#A7D66D] transition-colors">
                      {category.name === 'Headphones & Audio' ? 'Audio & Headphones' : category.name}
                    </h3>
                    <p className="mt-1 text-xs text-[#AAB6C3] line-clamp-2">
                      {category.description}
                    </p>
                    <span className="mt-2 inline-block text-xs font-semibold text-[#A7D66D] tabular-nums">
                      {count} products →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION E – FEATURED PRODUCTS */}
      <section className="bg-[#071B33] py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#A7D66D]">
                Featured Selection
              </p>
              <h2 className="mt-1.5 font-display text-3xl font-extrabold text-[#F3F6FA]">
                Popular technology choices
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigate({ page: 'catalogue' })}
              className="min-h-[42px] px-5 py-2 rounded-xl bg-[#A7D66D] hover:bg-[#b8e284] text-[#071B33] font-bold text-sm inline-flex items-center gap-2 transition-colors whitespace-nowrap"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
