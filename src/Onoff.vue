<template>
  <div>
    <button class="on" :class="{'active': value}" @click="onChanged(true)">ON</button>
    <button class="off" :class="{'active': !value}" @click="onChanged(false)">OFF</button>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    onChanged(newValue) {
      this.$emit('input', newValue);
    }
  }
}
</script>

<style scoped lang="sass">
  div
    margin-top: 50px
  button
    cursor: pointer
  .on.active 
    background-color: green
    color: white
  .off.active
    background-color: red
    color: white
</style>
