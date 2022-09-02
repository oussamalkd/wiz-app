<template>
  <nav>
    <router-link to="/">Table</router-link> |
    <router-link to="/card">Card</router-link> |
    <router-link to="/settings">Settings</router-link>
  </nav>
  <AutocompleteInput :items="users" />
  <router-view />
</template>
<script>
import AutocompleteInput from './components/AutocompleteInput.vue';
import store from '@/store/index';

export default {
  components: {
    AutocompleteInput
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
