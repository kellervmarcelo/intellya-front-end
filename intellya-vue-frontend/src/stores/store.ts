import { defineStore } from 'pinia';

export const useSearchStore = defineStore({
  id: 'search',
  state: () => ({
    searchQuery: '' 
  }),
  actions: {
    updateSearchQuery(query: string) {
      this.searchQuery = query;
    }
  },
  getters: {
    getSearchQuery(): string {
      return this.searchQuery
    }
  }
});