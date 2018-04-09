<template>
  <div >
    <h2>{{ msg }} - </h2>   
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