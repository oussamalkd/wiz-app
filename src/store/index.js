import { createStore } from 'vuex'

export default createStore({
  state: {
    id: '',
    users: [
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
      },

      {
        id: "5s",
        name: "Luka Doncic",
        team: "Dallas Mavs"
      },

      {
        id: "5r",
        name: "Luka Doncic",
        team: "Dallas Mavs"
      },

      {
        id: "v5",
        name: "Luka Doncic",
        team: "Dallas Mavs"
      },

      {
        id: "v5",
        name: "Luka Doncic",
        team: "Dallas Mavs"
      },

      {
        id: "5ddfdf",
        name: "Luka Doncic",
        team: "Dallas Mavs"
      },

      {
        id: "5sgfd",
        name: "Luka Doncic",
        team: "Dallas Mavs"
      },
      {
        id: "5sgfg",
        name: "Luka Doncic",
        team: "Dallas Mavs"
      },
      {
        id: "5ssds",
        name: "Luka Doncic",
        team: "Dallas Mavs"
      },
      {
        id: "5sff",
        name: "Luka Doncic",
        team: "Dallas Mavs"
      },
      {
        id: "5sss",
        name: "Luka Doncic",
        team: "Dallas Mavs"
      },
      {
        id: "6",
        name: "Russell Westbrook",
        team: "Los Angeles Lakers"
      }
    ],
  },
  getters: {
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    }
  },
  actions: {
  },
  modules: {
  }
})
