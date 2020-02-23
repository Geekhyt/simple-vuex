<template>
  <div id="app">
    你的年龄 {{$store.state.age}} <br>
    我的年龄 {{$store.getters.myAge}}
    <button @click="syncChange()">点我更改</button>
    <button @click="asyncChange()">异步更改</button>
    {{$store.state.a.age}}
    {{$store.state.b.age}}
    {{$store.state.b.c.age}}
  </div>
</template>

<script>

export default {
  methods: {
    syncChange() {
      this.$store.commit('syncChange', 10);
    },
    asyncChange() {
      this.$store.dispatch('asyncChange', 5);
    }    
  }
}
</script>

<style>

</style>
