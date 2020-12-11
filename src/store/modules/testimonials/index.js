'use strict'

import * as type from './types'
import actions from './actions'
import getters from './getters'

const state = {
  testimonials: null
}

const mutations = {
  [type.SET_TESTIMONIAL_DATA] (state, action) {
    state.testimonials = action.payload
  },
}

export default {
  state,
  mutations,
  actions,
  getters
}
