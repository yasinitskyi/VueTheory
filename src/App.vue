<template>
  <div>
    <app-counter></app-counter>
    <app-car></app-car>
    <app-onoff v-model="switched"></app-onoff>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      switched: false,
    }
  }
}
</script>

<style lang="sass">

</style>
