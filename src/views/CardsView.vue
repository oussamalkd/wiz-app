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
    },

    // search the selected user and highlight the card
    getSelectedUser() {
      // first remove highlites card if exist
      const cards = document.querySelectorAll(".index-card")
      cards.forEach(card => {
        card.classList.remove("highlited")
      })
      if (store.state.id !== "") {
        const selectedCard = document.getElementById(store.state.id);
        selectedCard.classList.add("highlited")
      }
    },

    // scroll to selected user
    scrollToSelectedUser() {
      if(store.state.id !== "") {
        document.getElementById(store.state.id).scrollIntoView()
      }
    }
  },
  mounted() {
    this.getSelectedUser()
    this.scrollToSelectedUser()
  },

  watch:{
    '$store.state.id': function() {
      this.getSelectedUser()
      this.scrollToSelectedUser()
    }
  }
}
</script>
<style lang="scss">
.about-container {
  @apply w-10/12 mx-auto py-5 px-2 flex flex-row justify-center items-start flex-wrap;
}
</style>
