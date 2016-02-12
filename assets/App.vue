<template>
  <h1>Hello from VUE</h1>
  <template v-if="isAnonymous">
    <button @click="selectUser">Sign in</button>
  </template>
  <template v-else>
    {{ certId }}
  </template>
</template>

<style lang="stylus">
  body, html
    padding 0
    margin 0
</style>

<style lang="stylus" scoped>

</style>

<script>
  import store from 'store'

  export default {
    computed: {
      isAnonymous() {
        return (store.state.certId === null)
      },

      certId() {
        return store.state.certId
      }
    },

    methods: {
      selectUser() {
        store.actions.selectUser();
      }
    }
  }
</script>
