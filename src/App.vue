<template>
  <div id="app">
    <TestimonialWrapper />
  </div>
</template>

<script>
import TestimonialWrapper from './components/TestimonialWrapper.vue'

export default {
  name: 'App',
  components: {
    TestimonialWrapper
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500;600&display=swap');
html, body {
  font-family: 'Barlow Semi Condensed', sans-serif;
  background-color: hsl(210, 46%, 95%);
  height: 99%;
}

body {
  display: flex;
  align-items: center;
}

#app {
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 13px;
}

@media screen and (max-width: 1200px) {
  body {
    display: unset;
    align-items: unset;
  } 
}
</style>
