export function pending (state) {
    return state.colors.filter(color => ! color.done)
  }
  
  
  export function done (state) {
    return state.colors.filter(color => color.done)
  }