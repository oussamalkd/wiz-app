<template>
  <div class="home">
    <div class="container mx-auto">
      <IndexTable :items="entries"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import IndexTable from '@/components/IndexTable.vue'
const axios = require("axios").default
export default {
  name: 'HomeView',
  components: {
    IndexTable
  },
  data () {
    return {
      entries: []
    }
  },
  methods: {
    getData() {
      axios.get("https://api.publicapis.org/entries").then((res) => {
        this.entries = res.data.entries
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style lang="scss">

</style>
