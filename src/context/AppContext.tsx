import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import {
  CartItem,
  CategoryId,
  FeedbackOption,
  KnowledgeLevel,
  PageRoute,
  PriceRangeFilter,
  ShoppingGoal,
  SortOption,
} from '../types';
import { PRODUCTS } from '../data/products';
import {
  clampVisibleCount,
  DEFAULT_VISIBLE_PRODUCTS,
  getInitialRecommendationCount,
  MAX_VISIBLE_PRODUCTS,
  MIN_VISIBLE_PRODUCTS,
  STEP_VISIBLE_PRODUCTS,
} from '../utils/adaptiveLogic';

interface AppContextValue {
  route: PageRoute;
  navigate: (nextRoute: PageRoute) => void;
  navigateToProduct: (productId: string) => void;
  navigateToCategory: (category: CategoryId) => void;

  // Adaptive profile & onboarding
  goal: ShoppingGoal | null;
  knowledgeLevel: KnowledgeLevel | null;
  onboardingStep: 1 | 2 | 3;
  setOnboardingStep: (step: 1 | 2 | 3) => void;
  selectGoal: (goal: ShoppingGoal) => void;
  selectKnowledgeLevel: (level: KnowledgeLevel) => void;
  visibleCount: number;
  showMoreProducts: () => void;
  showFewerProducts: () => void;

  // Catalogue filters
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: 'All' | CategoryId;
  setSelectedCategory: (cat: 'All' | CategoryId) => void;
  priceRange: PriceRangeFilter;
  setPriceRange: (range: PriceRangeFilter) => void;
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;
  clearAllFilters: () => void;

  // Wishlist
  wishlistIds: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  // Compare (max 3)
  compareIds: string[];
  toggleCompare: (productId: string) => void;
  removeCompare: (productId: string) => void;
  clearCompare: () => void;
  isInCompare: (productId: string) => boolean;

  // Demo Shopping Bag
  bagItems: CartItem[];
  isBagOpen: boolean;
  setIsBagOpen: (open: boolean) => void;
  addToBag: (productId: string) => void;
  updateBagQuantity: (productId: string, delta: number) => void;
  removeFromBag: (productId: string) => void;
  clearBag: () => void;
  bagTotalItems: number;

  // Feedback
  feedback: FeedbackOption | null;
  setFeedback: (option: FeedbackOption | null) => void;

  // Reset & Toast
  startAgain: () => void;
  toastMessage: string | null;
  dismissToast: () => void;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

const WISHLIST_STORAGE_KEY = 'techchoice_wishlist_v1';
const COMPARE_STORAGE_KEY = 'techchoice_compare_v1';
const BAG_STORAGE_KEY = 'techchoice_demo_bag_v1';
const PROFILE_STORAGE_KEY = 'techchoice_profile_v1';

function parseRouteFromPathname(pathname: string): PageRoute {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (clean === '/') return { page: 'home' };
  if (clean === '/categories') return { page: 'categories' };
  if (clean === '/catalogue') return { page: 'catalogue' };
  if (clean === '/compare') return { page: 'compare' };
  if (clean === '/wishlist') return { page: 'wishlist' };
  if (clean.startsWith('/product/')) {
    const productId = decodeURIComponent(clean.slice('/product/'.length));
    if (productId && PRODUCTS.some((p) => p.id === productId)) {
      return { page: 'product', productId };
    }
  }
  return { page: 'home' };
}

function routeToPathname(route: PageRoute): string {
  switch (route.page) {
    case 'home':
      return '/';
    case 'categories':
      return '/categories';
    case 'catalogue':
      return '/catalogue';
    case 'compare':
      return '/compare';
    case 'wishlist':
      return '/wishlist';
    case 'product':
      return `/product/${encodeURIComponent(route.productId)}`;
  }
}

function readStoredIds(key: string): string[] {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (id): id is string => typeof id === 'string' && PRODUCTS.some((p) => p.id === id)
    );
  } catch {
    return [];
  }
}

function readStoredBag(): CartItem[] {
  try {
    const raw = window.localStorage.getItem(BAG_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is CartItem =>
        item &&
        typeof item.productId === 'string' &&
        typeof item.quantity === 'number' &&
        item.quantity > 0 &&
        PRODUCTS.some((p) => p.id === item.productId)
    );
  } catch {
    return [];
  }
}

function readStoredProfile(): {
  goal: ShoppingGoal | null;
  knowledgeLevel: KnowledgeLevel | null;
  visibleCount: number;
} {
  try {
    const raw = window.localStorage.getItem(PROFILE_STORAGE_KEY);
    if (!raw) {
      return { goal: null, knowledgeLevel: null, visibleCount: DEFAULT_VISIBLE_PRODUCTS };
    }
    const parsed = JSON.parse(raw);
    const validGoal: ShoppingGoal | null =
      parsed.goal === 'ready_to_buy' || parsed.goal === 'just_exploring' ? parsed.goal : null;
    const validLevel: KnowledgeLevel | null =
      parsed.knowledgeLevel === 'beginner' ||
      parsed.knowledgeLevel === 'somewhat_familiar' ||
      parsed.knowledgeLevel === 'very_familiar'
        ? parsed.knowledgeLevel
        : null;
    const validCount =
      typeof parsed.visibleCount === 'number'
        ? clampVisibleCount(parsed.visibleCount)
        : validGoal && validLevel
          ? getInitialRecommendationCount(validGoal, validLevel)
          : DEFAULT_VISIBLE_PRODUCTS;

    return { goal: validGoal, knowledgeLevel: validLevel, visibleCount: validCount };
  } catch {
    return { goal: null, knowledgeLevel: null, visibleCount: DEFAULT_VISIBLE_PRODUCTS };
  }
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const initialProfile = readStoredProfile();

  const [route, setRoute] = useState<PageRoute>(() =>
    parseRouteFromPathname(window.location.pathname)
  );
  const [goal, setGoal] = useState<ShoppingGoal | null>(initialProfile.goal);
  const [knowledgeLevel, setKnowledgeLevel] = useState<KnowledgeLevel | null>(
    initialProfile.knowledgeLevel
  );
  const [onboardingStep, setOnboardingStep] = useState<1 | 2 | 3>(() =>
    initialProfile.goal && initialProfile.knowledgeLevel ? 3 : initialProfile.goal ? 2 : 1
  );
  const [visibleCount, setVisibleCount] = useState<number>(initialProfile.visibleCount);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | CategoryId>('All');
  const [priceRange, setPriceRange] = useState<PriceRangeFilter>('all');
  const [sortBy, setSortBy] = useState<SortOption>('recommended');

  const [wishlistIds, setWishlistIds] = useState<string[]>(() =>
    readStoredIds(WISHLIST_STORAGE_KEY)
  );
  const [compareIds, setCompareIds] = useState<string[]>(() =>
    readStoredIds(COMPARE_STORAGE_KEY).slice(0, 3)
  );
  const [bagItems, setBagItems] = useState<CartItem[]>(() => readStoredBag());
  const [isBagOpen, setIsBagOpen] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<FeedbackOption | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
  }, []);

  const dismissToast = useCallback(() => {
    setToastMessage(null);
  }, []);

  useEffect(() => {
    if (!toastMessage) return;
    const timer = window.setTimeout(() => setToastMessage(null), 3500);
    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  useEffect(() => {
    const handlePopState = () => {
      setRoute(parseRouteFromPathname(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlistIds));
    } catch {
      // Ignore storage quota errors
    }
  }, [wishlistIds]);

  useEffect(() => {
    try {
      window.localStorage.setItem(COMPARE_STORAGE_KEY, JSON.stringify(compareIds));
    } catch {
      // Ignore storage quota errors
    }
  }, [compareIds]);

  useEffect(() => {
    try {
      window.localStorage.setItem(BAG_STORAGE_KEY, JSON.stringify(bagItems));
    } catch {
      // Ignore storage quota errors
    }
  }, [bagItems]);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        PROFILE_STORAGE_KEY,
        JSON.stringify({ goal, knowledgeLevel, visibleCount })
      );
    } catch {
      // Ignore storage quota errors
    }
  }, [goal, knowledgeLevel, visibleCount]);

  const navigate = useCallback((nextRoute: PageRoute) => {
    setRoute(nextRoute);
    const nextPath = routeToPathname(nextRoute);
    try {
      if (window.location.pathname !== nextPath) {
        window.history.pushState({}, '', nextPath);
      }
    } catch {
      // Safe fallback in restricted frames
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateToProduct = useCallback(
    (productId: string) => {
      navigate({ page: 'product', productId });
    },
    [navigate]
  );

  const navigateToCategory = useCallback(
    (category: CategoryId) => {
      setSelectedCategory(category);
      navigate({ page: 'catalogue' });
    },
    [navigate]
  );

  const selectGoal = useCallback(
    (selected: ShoppingGoal) => {
      setGoal(selected);
      if (knowledgeLevel) {
        setVisibleCount(getInitialRecommendationCount(selected, knowledgeLevel));
      }
      setOnboardingStep(2);
    },
    [knowledgeLevel]
  );

  const selectKnowledgeLevel = useCallback(
    (level: KnowledgeLevel) => {
      setKnowledgeLevel(level);
      const activeGoal = goal ?? 'ready_to_buy';
      if (!goal) {
        setGoal(activeGoal);
      }
      setVisibleCount(getInitialRecommendationCount(activeGoal, level));
      setOnboardingStep(3);
    },
    [goal]
  );

  const showMoreProducts = useCallback(() => {
    setVisibleCount((prev) => {
      const next = Math.min(MAX_VISIBLE_PRODUCTS, prev + STEP_VISIBLE_PRODUCTS);
      showToast(`Display limit increased to ${next} products.`);
      return next;
    });
  }, [showToast]);

  const showFewerProducts = useCallback(() => {
    setVisibleCount((prev) => {
      const next = Math.max(MIN_VISIBLE_PRODUCTS, prev - STEP_VISIBLE_PRODUCTS);
      showToast(`Display limit reduced to ${next} products.`);
      return next;
    });
  }, [showToast]);

  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('All');
    setPriceRange('all');
    setSortBy('recommended');
    showToast('All search and filter controls cleared.');
  }, [showToast]);

  const toggleWishlist = useCallback(
    (productId: string) => {
      const product = PRODUCTS.find((p) => p.id === productId);
      setWishlistIds((prev) => {
        if (prev.includes(productId)) {
          showToast(product ? `Removed ${product.name} from wishlist.` : 'Removed from wishlist.');
          return prev.filter((id) => id !== productId);
        }
        showToast(product ? `Saved ${product.name} to wishlist.` : 'Saved to wishlist.');
        return [...prev, productId];
      });
    },
    [showToast]
  );

  const isInWishlist = useCallback(
    (productId: string) => wishlistIds.includes(productId),
    [wishlistIds]
  );

  const toggleCompare = useCallback(
    (productId: string) => {
      const product = PRODUCTS.find((p) => p.id === productId);
      setCompareIds((prev) => {
        if (prev.includes(productId)) {
          showToast(
            product ? `Removed ${product.name} from comparison.` : 'Removed from comparison.'
          );
          return prev.filter((id) => id !== productId);
        }
        if (prev.length >= 3) {
          showToast('Comparison limit reached (maximum 3 products). Remove one to add another.');
          return prev;
        }
        showToast(
          product
            ? `Added ${product.name} to comparison (${prev.length + 1}/3).`
            : 'Added to comparison.'
        );
        return [...prev, productId];
      });
    },
    [showToast]
  );

  const removeCompare = useCallback(
    (productId: string) => {
      const product = PRODUCTS.find((p) => p.id === productId);
      setCompareIds((prev) => prev.filter((id) => id !== productId));
      showToast(
        product ? `Removed ${product.name} from comparison.` : 'Removed from comparison.'
      );
    },
    [showToast]
  );

  const clearCompare = useCallback(() => {
    setCompareIds([]);
    showToast('Cleared product comparison.');
  }, [showToast]);

  const isInCompare = useCallback(
    (productId: string) => compareIds.includes(productId),
    [compareIds]
  );

  const addToBag = useCallback(
    (productId: string) => {
      const product = PRODUCTS.find((p) => p.id === productId);
      setBagItems((prev) => {
        const existing = prev.find((item) => item.productId === productId);
        if (existing) {
          return prev.map((item) =>
            item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        return [...prev, { productId, quantity: 1 }];
      });
      showToast(
        product
          ? `Added ${product.name} to your demonstration shopping bag.`
          : 'Added to demonstration bag.'
      );
    },
    [showToast]
  );

  const updateBagQuantity = useCallback((productId: string, delta: number) => {
    setBagItems((prev) =>
      prev
        .map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const removeFromBag = useCallback(
    (productId: string) => {
      const product = PRODUCTS.find((p) => p.id === productId);
      setBagItems((prev) => prev.filter((item) => item.productId !== productId));
      showToast(product ? `Removed ${product.name} from demonstration bag.` : 'Removed from bag.');
    },
    [showToast]
  );

  const clearBag = useCallback(() => {
    setBagItems([]);
    showToast('Demonstration shopping bag cleared.');
  }, [showToast]);

  const bagTotalItems = bagItems.reduce((sum, item) => sum + item.quantity, 0);

  const startAgain = useCallback(() => {
    setGoal(null);
    setKnowledgeLevel(null);
    setOnboardingStep(1);
    setVisibleCount(DEFAULT_VISIBLE_PRODUCTS);
    setSearchQuery('');
    setSelectedCategory('All');
    setPriceRange('all');
    setSortBy('recommended');
    setFeedback(null);
    navigate({ page: 'home' });
    showToast('Personalisation and filters reset. Start fresh whenever you are ready.');
  }, [navigate, showToast]);

  return (
    <AppContext.Provider
      value={{
        route,
        navigate,
        navigateToProduct,
        navigateToCategory,
        goal,
        knowledgeLevel,
        onboardingStep,
        setOnboardingStep,
        selectGoal,
        selectKnowledgeLevel,
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
        wishlistIds,
        toggleWishlist,
        isInWishlist,
        compareIds,
        toggleCompare,
        removeCompare,
        clearCompare,
        isInCompare,
        bagItems,
        isBagOpen,
        setIsBagOpen,
        addToBag,
        updateBagQuantity,
        removeFromBag,
        clearBag,
        bagTotalItems,
        feedback,
        setFeedback,
        startAgain,
        toastMessage,
        dismissToast,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useApp must be used inside AppProvider');
  }
  return ctx;
}
