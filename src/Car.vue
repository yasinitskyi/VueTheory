<template>
  <div class="car">
    <h3>Name: {{ carName }} </h3>
    <p>Year: {{ carYear }}  </p>
    <button @click="changeName">Change name</button>
    <button @click="changeFunc">Change from parent</button>
    <button @click="updateCounter">Update counter</button>
  </div>
</template>

<script>
import {eventEmitter} from './main.js'
  export default {
    props: ['carName', 'carYear', 'changeFunc'],
    methods: {
      changeName() {
        this.carName = 'Mazda';
        this.$emit('nameChanged', this.carName)
      },
      updateCounter() {
        // this.counter++;
        // this.$emit('counterUpdated', this.counter)
        eventEmitter.$emit('counterUpdated');
      }
    }
  }
</script>

<style lang="sass">
  .car 
    border: 1px solid black,
</style>
