<template>
  <div>
    <h4>Car name: {{ $route.query.name }}</h4>
    <h5>Car year: {{ $route.query.year }}</h5>
    <div class="scroll"></div>
    <h6 id="scroll">Hello from the bottom</h6> 
  </div>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    if(window.confirm('Yes?')) {
      next()
    } else {
      next(false)
    }
  }
}
</script>

<style lang="sass" scoped>
  .scroll
    width: 100px
    height: 1000px
    background-color: pink

</style>