<template>
    <div class="table-container overflow-y-scroll">
        <table class="table table-zebra w-full">
          <!-- head -->
          <thead class="rounded">
            <tr>
              <th>#</th>
              <th>API</th>
              <th>Auth</th>
              <th>Category</th>
              <th>Cors</th>
              <th>Description</th>
              <th>HTTPS</th>
              <th>Link</th>
            </tr>
          </thead>
          <!-- body -->
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <th> {{index}} </th>
              <td> {{ item.API }} </td>
              <td> {{ item.Auth }} </td>
              <td> {{ item.Category }} </td>
              <td> {{ item.Cors }} </td>
              <td> {{ item.Description }} </td>
              <td> {{ item.HTTPS }} </td>
              <td> 
                <a :href="item.Link" target="_blank" rel="noopener noreferrer">{{ item.Link }}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
</template>
<script>
export default {
    name: "IndexTable",
    props: {
        items: {
          default: []
        },
        isLoading: {
          default: false
        }
    }
}
</script>
<style lang="scss">
.table-container {
  height: 80vh;
}
thead {
  position: relative;
  z-index: 12;
}
.table-zebra thead tr, .table-zebra tbody tr th {
  position: sticky;
  z-index: 11;
}
.table-zebra thead tr  {
  top: 0px;
}
.table-zebra tbody tr th {
  left: 0px;
  background: #eee!important;
}
</style>