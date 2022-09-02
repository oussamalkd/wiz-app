<template>
    <div class="auto-complete-container">
        <!--You should add Click outside modal = false-->
        <div class="form-control">
            <div class="input-group mx-auto">
                <input v-model="search" type="text" autocomplete="off" placeholder="Search user" class="auto-complete" @focus="modal = true"/>
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
        setItem() {
            this.search = ''
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
    @apply input input-bordered w-96 text-base-content;
    border-radius: 5px !important;
    position: relative;
    z-index: 30;
    &:focus, &:active {
        outline: none
    }
}
.suggestions {
    @apply absolute z-20 w-96 shadow rounded;
    ul {
        @apply w-full bg-primary-content text-base-content max-h-44 overflow-y-scroll;

        li {
            @apply w-full p-2 border-b cursor-pointer;
            a {
                @apply block h-full w-full;
            }
        }
    }
}
</style>
