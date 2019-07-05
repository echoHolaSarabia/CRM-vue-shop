export function setColors (state, colors) {
    state.colors = colors
 }

  export function setColor (state, color) {
    state.selectedColor = color
  }
  
  export function updateColorStatus (state, payload) {
    const color = state.colors.find(t => t.id === payload.id)
    if (color) {
      color.done = ! color.done
    }
  }
  
  export function colorsError (state, payload) {
    state.error = true
    state.errorMessage = payload
    state.colors = []
  }