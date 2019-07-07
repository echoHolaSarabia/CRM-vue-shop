export function setCategories (state, categories) {
    state.categories = categories
 }

 export function setCategory (state, category) {
    state.selectedCategory = category
  }
  
  export function updateCategoryStatus (state, payload) {
    const category = state.categories.find(t => t.id === payload.id)
    if (category) {
      category.done = ! category.done
    }
  }
  
  export function categoriesError (state, payload) {
    state.error = true
    state.errorMessage = payload
    state.categories = []
  }