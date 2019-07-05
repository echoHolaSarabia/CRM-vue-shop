//Los getters solo tienen state, el state de su propio modulo
export function totalCost (state) {
    return state.cart.reduce((sum, product) => {
        return (parseFloat(product.price) * product.qty) + sum
    }, 0 /*0 es el valor inicial. Si pongo ...}, 20) pues sería 20 */)
}

