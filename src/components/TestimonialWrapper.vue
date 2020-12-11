<template>
  <div class="testimonial-wrapper">
    <template :style="gridArea" v-for="testimonial in getTestimonialData">
      <Testimonial :key="testimonial.id" :testimonial="testimonial"/>
    </template>
  </div>
</template>

<script>
import Testimonial from '@/components/Testimonial.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TestimonialWrapper',
  components: {
    Testimonial
  },
  props: {},
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      getTestimonialData: 'getTestimonialData'
    })
  },
  methods: {
    ...mapActions({
      setTestimonialData: 'setTestimonialData'
    })
  },
  created () {},
  mounted () {
    this.setTestimonialData()
  }
}
</script>

<style scoped>
.testimonial-wrapper {
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 27% 25% 24% 22%;
  grid-template-rows: minmax(min-content, max-content);
  grid-gap: 30px;
}

@media screen and (max-width: 1200px) {
  .testimonial-wrapper {
    width: 95%;
    margin: 0 auto;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    grid-gap: 10px;
    margin-top: 5%;
  }
}

@media screen and (max-width: 600px) {
  .testimonial-wrapper {
    width: 90%;
    margin: 0 auto;
    padding-top: 5%;
    padding-bottom: 10%;
    display: flex;
    flex-direction: column;
  }
}
</style>