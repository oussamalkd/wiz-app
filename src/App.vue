<template>
  <IndexNavBar v-if="!isMobile" />
  <MobileNavBar v-else />
  <div class="search-box w-full mx-auto flex justify-center items-center py-5">
    <AutocompleteInput :items="users" />
  </div>
  <router-view />
</template>
<script>
import AutocompleteInput from './components/AutocompleteInput.vue';
import store from '@/store/index';
import IndexNavBar from './components/NavBar/IndexNavBar.vue';
import MobileNavBar from './components/NavBar/MobileNavBar.vue';

export default {
  components: {
    AutocompleteInput,
    IndexNavBar,
    MobileNavBar
},
  data() {
    return {
      users: store.state.users,
      isMobile: false
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
    },

    // Check mobile size to change the navbar
    checkMobileSize() {
      const windowWidth = window.innerWidth
      if (windowWidth < 786) {
        this.isMobile = true
      }else {
        this.isMobile = false
      }
    }
  },

  mounted() {
    // get theme anytime runing the App
    this.getTheme()

    // check screen size
    this.checkMobileSize()
    window.addEventListener("resize", this.checkMobileSize)
  },
  unmounted() {
    // remove eventListner on destroy
    removeEventListener("resize", this.checkMobileSize)
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
