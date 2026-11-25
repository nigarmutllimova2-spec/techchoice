import { KnowledgeLevel, ShoppingGoal } from '../types';

export const MIN_VISIBLE_PRODUCTS = 3;
export const MAX_VISIBLE_PRODUCTS = 15;
export const STEP_VISIBLE_PRODUCTS = 5;
export const DEFAULT_VISIBLE_PRODUCTS = 5;

const RECOMMENDATION_RULE_TABLE: Record<
  ShoppingGoal,
  Record<KnowledgeLevel, number>
> = {
  ready_to_buy: {
    beginner: 3,
    somewhat_familiar: 5,
    very_familiar: 7,
  },
  just_exploring: {
    beginner: 8,
    somewhat_familiar: 10,
    very_familiar: 12,
  },
};

export function getInitialRecommendationCount(
  goal: ShoppingGoal,
  knowledgeLevel: KnowledgeLevel
): number {
  return RECOMMENDATION_RULE_TABLE[goal][knowledgeLevel];
}

export function clampVisibleCount(count: number): number {
  return Math.max(MIN_VISIBLE_PRODUCTS, Math.min(MAX_VISIBLE_PRODUCTS, count));
}

export function getGoalLabel(goal: ShoppingGoal | null): string {
  if (goal === 'ready_to_buy') return "I'm ready to buy";
  if (goal === 'just_exploring') return "I'm just exploring";
  return 'Not selected yet';
}

export function getKnowledgeLabel(level: KnowledgeLevel | null): string {
  if (level === 'beginner') return 'Beginner';
  if (level === 'somewhat_familiar') return 'Somewhat familiar';
  if (level === 'very_familiar') return 'Very familiar';
  return 'Not selected yet';
}

export function getAdaptiveExplanation(
  goal: ShoppingGoal | null,
  knowledgeLevel: KnowledgeLevel | null
): string {
  if (!goal || !knowledgeLevel) {
    return 'Showing a default selection of products. Complete the quick 2-step personalisation on the Home page to tailor the list size and explanation depth.';
  }

  if (knowledgeLevel === 'beginner' && goal === 'ready_to_buy') {
    return "We've simplified the product selection to 3 focused devices and highlighted everyday explanations to make your decision easier.";
  }

  if (knowledgeLevel === 'beginner') {
    return "We've simplified the product selection and highlighted the most important information to help you get started.";
  }

  if (goal === 'ready_to_buy') {
    return "We've prepared a focused selection to make your decision easier, balancing clear comparisons with your stated familiarity.";
  }

  return "We've included more products to help you discover different possibilities across brands, price points, and technical capabilities.";
}

export function formatGBP(amount: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(amount);
}
