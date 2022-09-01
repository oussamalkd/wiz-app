<template>
    <div class="overflow-y-scroll h-96">
        <table class="table table-zebra w-full">
          <!-- head -->
          <thead>
            <tr>
              <th></th>
              <th>API</th>
              <th>Auth</th>
              <th>Category</th>
              <th>Cors</th>
              <th>Description</th>
              <th>HTTPS</th>
              <th>Link</th>
            </tr>
          </thead>
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
      items: []
    },
    data() {
      return {
        count: 0
      }
    }
  }
</script>