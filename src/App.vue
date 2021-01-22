<template>
  <div>
    <app-counter></app-counter>
    <app-car :carName="carName" 
             :carYear="carYear" 
             :changeFunc="changeNameToAudi" 
             @nameChanged="carName = $event" 
             >
    </app-car>
  </div>
</template>

<script>
export default {
  name: 'app',
  
    data () {
    return {
      carName: 'Ford',
      carYear: '2018',
    }
  },
  methods: {
    changeNameToAudi() {
      this.carName = 'Audi'
    }
  }
}
</script>

<style lang="scss">

</style>
