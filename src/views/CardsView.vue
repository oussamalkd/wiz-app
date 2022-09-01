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
import DialogModal from "../components/DialogModal.vue";
export default {
  name: "CardsPage",
  components: {
    IndexCard,
    DialogModal
},
  data() {
    return {
      items: [
        {
          id: "1",
          name: "Lebron James",
          team: "Los Angeles Lakers"
        },
        {
          id: "2",
          name: "Stephen Curry",
          team: "Golden State Warriors"
        },
        {
          id: "3",
          name: "Kawhi Leonard",
          team: "Los Angeles Clippers"
        },
        {
          id: "4",
          name: "Kevin Durant",
          team: "Broklyn Nets"
        },
        {
          id: "5",
          name: "Luka Doncic",
          team: "Dallas Mavs"
        }
      ],
      currentUser: ''
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
      }
    }
  }
}
</script>
<style lang="scss">
.about-container {
  @apply w-10/12 mx-auto py-5 px-2 flex flex-row justify-center items-start flex-wrap;
}
</style>
