<template>
  <div class="about">
    <DialogModal @confirmed="isConfirmed" />
    <div class="about-container">
      <IndexCard v-for="(item, index) in items" :title="item.name" :subTitle="item.team" :id="item.id" :key="index" @getCurrentUser="deleteCard"/>
    </div>
  </div>
</template>
<script>
import IndexCard from "@/components/IndexCard.vue";
import DialogModal from "@/components/DialogModal.vue";
import store from "@/store/index"
export default {
  name: "CardsPage",
  components: {
    IndexCard,
    DialogModal
  },
  data() {
    return {
      currentUser: '',
      items: store.state.users
    }
  },
  methods: {
    // get the id of selected User
    deleteCard(id) {
      this.currentUser = id
    },
    // remove the selected one from array
    isConfirmed(val) {
      if(val) {
        this.items = this.items.filter((item) => {
          return item.id !== this.currentUser
        })
        store.commit("setUsers", this.items)
      }
    }
  },
  mounted() {
    console.log(this.$route.hash)
  },

  watch:{
    $route() {
      console.log(this.$route.hash)
    }
  }
}
</script>
<style lang="scss">
.about-container {
  @apply w-10/12 mx-auto py-5 px-2 flex flex-row justify-center items-start flex-wrap;
}
</style>
