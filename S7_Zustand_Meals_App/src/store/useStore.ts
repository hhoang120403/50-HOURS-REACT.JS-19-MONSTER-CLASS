import { create } from 'zustand';

interface Meals {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface MealStore {
  meals: Meals[];
  searchQuery: string;
  setMeals: (meals: Meals[]) => void;
  setSearchQuery: (query: string) => void;
}

export const useStore = create<MealStore>((set) => ({
  meals: [],
  searchQuery: '',
  setMeals: (meals: Meals[]) => set({ meals }),
  setSearchQuery: (query: string) => set({ searchQuery: query }),
}));
