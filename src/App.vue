<template>
  <IndexNavBar />
  <div class="search-box w-full mx-auto flex justify-center items-center py-5">
    <AutocompleteInput :items="users" />
  </div>
  <router-view />
</template>
<script>
import AutocompleteInput from './components/AutocompleteInput.vue';
import store from '@/store/index';
import IndexNavBar from './components/NavBar/IndexNavBar.vue';

export default {
  components: {
    AutocompleteInput,
    IndexNavBar
},
  data() {
    return {
      users: store.state.users
    }
  },

  methods: {
    // get theme from local storage
    getTheme() {
      const theme = window.localStorage.getItem('theme')
      // get current theme
      if(theme === 'night') {
          document.querySelector('html').setAttribute('data-theme','night')
      } else {
          document.querySelector('html').setAttribute('data-theme','light')
      }
    }
  },

  mounted() {
      // get theme anytime runing the App
      this.getTheme()
    }
}
</script>

<style lang="scss">

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
