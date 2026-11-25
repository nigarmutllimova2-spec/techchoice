export type ShoppingGoal = 'ready_to_buy' | 'just_exploring';

export type KnowledgeLevel = 'beginner' | 'somewhat_familiar' | 'very_familiar';

export type CategoryId =
  | 'Laptops'
  | 'Smartphones'
  | 'Headphones & Audio'
  | 'Smartwatches'
  | 'Tablets'
  | 'Gaming';

export type PriceRangeFilter =
  | 'all'
  | 'under_300'
  | '300_700'
  | '700_1200'
  | 'above_1200';

export type SortOption =
  | 'recommended'
  | 'price_asc'
  | 'price_desc'
  | 'rating_desc'
  | 'alphabetical';

export type FeedbackOption = 'helpful' | 'prefer_different';

export type PageRoute =
  | { page: 'home' }
  | { page: 'categories' }
  | { page: 'catalogue' }
  | { page: 'product'; productId: string }
  | { page: 'compare' }
  | { page: 'wishlist' };

export interface ProductSpecs {
  processor: string;
  display: string;
  memoryStorage: string;
  battery: string;
  connectivity: string;
  weight: string;
}

export interface KnowledgeExplanations {
  beginner: {
    summary: string;
    specTips: Array<{ label: string; plainExplanation: string }>;
  };
  somewhat_familiar: {
    summary: string;
    highlights: string[];
  };
  very_familiar: {
    summary: string;
    technicalDetails: Array<{ metric: string; detail: string }>;
  };
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: CategoryId;
  subType: string;
  price: number;
  sampleRating: number;
  recommendedRank: number;
  shortDescription: string;
  fullDescription: string;
  image: string;
  specs: ProductSpecs;
  keyFeatures: string[];
  knowledgeExplanations: KnowledgeExplanations;
}

export interface CategoryInfo {
  id: CategoryId;
  name: string;
  description: string;
  image: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
}
