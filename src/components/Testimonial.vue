<template>
  <div class="testimonial" :style="userStyle">
    <img v-if="testimonial.bgImage" :src="testimonial.bgImage" class="quotation-img">
    <div class="testimonial-content">
    <div class="user">
        <div class="images">
          <img :src="testimonial.image" :style="photoBorder" alt="user-photo" class="user-img">
        </div>
        <div class="user-info">
          <p class="user-name">{{ testimonial.name }}</p>
          <p class="user-type">{{ testimonial.type }}</p>
        </div>
    </div>
    <h1>{{ testimonial.title }}</h1>
    <p class="user-comment">" {{ testimonial.comment }} "</p>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Testimonial',
  components: {},
  props: {
    testimonial: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      windowWidth: null
    }
  },
  computed: {
      userStyle () {
        if (this.windowWidth > 1200) {
          switch (this.testimonial.id) {
            case 0:
              return "background-color: hsl(263, 55%, 52%); color: white; grid-column: 1 / 3; grid-row: 1 / 2;"
            case 1:
              return "background-color: hsl(217, 19%, 35%); color: white; grid-column: 3 / 4; grid-row: 1 / 2;"
            case 2:
              return "background-color: white; color: hsl(217, 19%, 35%); grid-column: 1 / 2; grid-row: 2 / 3; box-shadow: 11px 11px 9px 0px rgba(207, 207, 207, 0.64);"
            case 3:
              return "background-color: hsl(219, 29%, 14%); color: white; grid-column: 2 / 4; grid-row: 2 / 3;" 
            case 4:
              return "background-color: white; color: hsl(217, 19%, 35%); grid-column: 4 / 5; grid-row: 1 / 3; box-shadow: 11px 11px 9px 0px rgba(207, 207, 207, 0.64);"
            default:
              return ""
          }
        } else {
          switch (this.testimonial.id) {
            case 0:
              return "background-color: hsl(263, 55%, 52%); color: white; grid-column: 1 / 3; grid-row: 1 / 2;"
            case 1:
              return "background-color: hsl(217, 19%, 35%); color: white; grid-column: 3 / 4; grid-row: 1 / 2;"
            case 2:
              return "background-color: white; color: hsl(217, 19%, 35%); grid-column: 1 / 2; grid-row: 2 / 3; box-shadow: 11px 11px 9px 0px rgba(207, 207, 207, 0.64);"
            case 3:
              return "background-color: hsl(219, 29%, 14%); color: white; grid-column: 2 / 4; grid-row: 2 / 3;" 
            case 4:
              return "background-color: white; color: hsl(217, 19%, 35%); grid-column: 1 / 4; grid-row: 3 / 4; box-shadow: 11px 11px 9px 0px rgba(207, 207, 207, 0.64);"
            default:
              return ""
          }
        }
      },
      photoBorder () {
        switch (this.testimonial.id) {
          case 0:
            return "border: 2px solid #A875F2"
          case 1:
            return "border: 2px solid transparent"
          case 2:
            return "border: 2px solid transparent"
          case 3:
            return "border: 2px solid hsl(263, 55%, 52%)" 
          case 4:
            return "border: 2px solid transparent"
          default:
            return ""
        }
      },
  },
  methods: {},
  created () {},
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  }
}
</script>

<style scoped>
p, h1 {
  margin: 0;
  padding: 0;
}
.testimonial {
    border: 1px hidden;
    border-radius: 10px;
    padding: 30px 40px 20px 25px;
    position: relative;
}
.testimonial-content {
    z-index: 9;
    position: relative;
}
h1 {
    font-size: 25px;
    padding-bottom: 15px;
}
.user-info {
    padding-left: 10px;
    margin-top: 5px;
}
.user-name {
    padding-bottom: 5px;
}
.user-type {
    opacity: 50%;
}
.user-comment {
    opacity: 70%;
    line-height: 1.5;
}
.user-img {
  border-radius: 100%;
  width: 80%;
}
.user {
    display: flex;
    flex-direction: row;
}
.quotation-img {
    position: absolute;
    right: 20%;
}

@media screen and (max-width: 1200px) {
  h1 {
    font-size: 20px;
  }
  .quotation-img {
    right: 10%;
  }
}

@media screen and (max-width: 800px) {
  .testimonial-wrapper {
    width: 100%;
    margin: 0 auto;
    grid-template-columns: 15% 15% 15% 15%;
    grid-gap: 10px;
    margin-left: 3%;
  }
}

@media screen and (max-width: 600px) {
  .testimonial {
    grid-column: unset;
    padding: 30px 35px;
  }
  h1 {
    font-size: 18px;
  }
  .quotation-img {
    right: 5%;
    top: 2%;
  }
  .user-img {
    width: 70%;
  }
}
</style>