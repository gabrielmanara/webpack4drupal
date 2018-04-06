<template>
  <div >
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    
    <async-component></async-component>
  </div>
</template>

<script>

import AsyncLoading from '@components/AsyncLoading'
const AsyncComponent = import('./AsyncComponent')

export default {
  components: {
    AsyncComponent: () => ({
      // The component we want to load.
      component: AsyncComponent,
      // The component to use as a placeholder while the
      // async component is loading.
      loading: AsyncLoading,
      // The component to render instead if there is an error
      // loading the async component.
      error: AsyncLoading,
      // The delay before the loading component is shown.
      delay: 10000,
      // If this timeout is reached, the async component is considered
      // to have failed loading.
      timeout: 9000
    })
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>