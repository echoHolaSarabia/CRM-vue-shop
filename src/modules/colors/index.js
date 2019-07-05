import state from './state'
//Hay varias mutations y actions. Asíq es más sencillo importarlo todo bajo un alias
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const namespaced = true

export default {
    namespaced,
    state,
    mutations,
    actions,
    getters
}