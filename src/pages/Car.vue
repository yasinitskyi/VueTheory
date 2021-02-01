<template>
  <div>
    <h1>Car id {{ id }}</h1>
    <button class="btn btn-small btn-primary mb-2" @click="goBackToCars">Back</button>
    <br>
    <router-link tag="button" :to="{name: 'carFull', params: {id: id}, query: {
      name: 'Mazda', year: '2000'}, hash: '#scroll'}" class="btn btn-info mt-2">Full info</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
 data() {
   return {
     id: this.$route.params['id']
   }
 },
 methods: {
   goBackToCars() {
     this.$router.push('/cars')
   }
 },
 watch: {
   $route(toR, fromR) {
     this.id = toR.params['id']
   }
 }
}
</script>

<style>

</style>