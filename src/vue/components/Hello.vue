<script>
import AsyncLoading from './AsyncLoading.vue'
const AsyncComponent = import('./AsyncComponent.vue')

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
      delay: 100,
      // If this timeout is reached, the async component is considered
      // to have failed loading.
      timeout: 3000
    })
  },

  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>