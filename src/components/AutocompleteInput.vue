<template>
    <div class="auto-complete-container">
        <!--You should add Click outside modal = false-->
        <div class="form-control">
            <div class="input-group mx-auto">
                <input v-model="search" type="text" autocomplete="off" placeholder="Search user" class="auto-complete" @focus="modal = true"/>
                <button class="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>
        </div>
        <div v-if="filtredItems && modal" class="suggestions">
            <ul>
                <li v-for="(item, index) in filtredItems" :key="index" @click="setItem(item.name)"> 
                    <router-link :to="'/card#'+item.id">{{ item.name }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AutocompleteInput',
    props:['items'],
    data() {
        return {
            search: '',
            filtredItems: [],
            modal: false
        }
    },

    methods: {
        // filter suggestions while user is searching
        filterItems() {
            // if user doen't type anything yet, show all suggestions
            if(this.search === "") {
                this.filtredItems = this.items
            }else {
                // autocomplete suggestions depend on what user typed
                this.filtredItems = this.items.filter(item => {
                    return item.name.toLowerCase().startsWith(this.search.toLowerCase())
                })
            }
        },
        // set value when user click on a suggestion
        setItem(item) {
            this.search = item
            //hide suggestions list
            this.modal = false
        }
    },
    mounted() {
        this.filterItems()
    },

    watch: {
        search() {
            this.filterItems()
        }
    }
}
</script>
<style lang="scss">
.auto-complete-container {
    @apply relative;
}
.auto-complete {
    @apply input input-primary w-96 text-base-content;
    &:focus, &:active {
        outline: none
    }
}
.suggestions {
    @apply absolute z-20 w-96 shadow rounded;
    ul {
        @apply w-full ml-0 bg-primary-content text-base-content max-h-44 overflow-y-scroll;

        li {
            @apply w-full p-2 border-b cursor-pointer;
            a {
                @apply block h-full w-full;
            }
        }
    }
}
</style>
