<template>
  <div class="home">
    <div class="container mx-auto">
      <LoadingIndicator v-if="loading" />
      <IndexTable v-if="!hasError && !loading" :items="entries" :isLoading="loading"/>
      <InfoAlert class="error" v-if="hasError">
        Something went wrong, Please try again..
      </InfoAlert>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import IndexTable from '@/components/IndexTable.vue'
import LoadingIndicator from '@/components/LoadingIndicator.vue'
import InfoAlert from '@/components/InfoAlert.vue'
// import Axios module Locally
const axios = require("axios").default

export default {
  name: 'HomeView',
  components: {
    IndexTable,
    LoadingIndicator,
    InfoAlert
},
  data () {
    return {
      entries: [],
      loading: false,
      hasError: false
    }
  },
  methods: {
    // get data from API
    getData() {
      // enable loading indicator
      this.loading = true
      axios.get("https://api.publicapis.org/entries").then((res) => {
        this.entries = res.data.entries
      }).catch(() => {
        // show error alert if anything goes wrong
        this.hasError = true
      }).finally(() => {
        // disable loading indicator
        this.loading = false
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style lang="scss">
.container {
  @apply w-10/12;
}
</style>
