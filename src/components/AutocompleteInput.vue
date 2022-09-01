<template>
    <div class="auto-complete-container">
        <!--You should add Click outside modal = false-->
        <div class="form-control">
            <div class="input-group mx-auto">
                <input v-model="search" type="text" autocomplete="off" placeholder="Type here" class="auto-complete" @focus="modal = true"/>
                <button class="btn btn-square">
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
        filterItems() {
            if(this.search === "") {
                this.filtredItems = this.search
            }else {
                this.filtredItems = this.items.filter(item => {
                    return item.name.toLowerCase().startsWith(this.search.toLowerCase())
                })
            }
        },
        setItem(item) {
            this.search = item
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
.auto-complete {
    @apply input input-bordered input-primary w-full max-w-xs;
}
.suggestions {
    ul {
        @apply max-w-xs ml-2 bg-slate-800 text-white;

        li {
            @apply p-2 border-b cursor-pointer
        }
    }
}
</style>
