import axios from 'axios'
import * as type from './types'

const actions = {
  setTestimonialData ({ commit }) {
    axios.get('http://localhost:3000/testimonials').then((response) => {
      commit(type.SET_TESTIMONIAL_DATA, {
        payload: response.data
      })
    })
  }
}

export default actions