export function pending (state) {
    return state.categories.filter(category => ! category.done)
  }
  
  
  export function done (state) {
    return state.categories.filter(category => category.done)
  }