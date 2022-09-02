<template>
    <div class="mobile-navbar">
        <div class="toggle-button">
            <!--toggle navbar-->
            <button @click = "isOpen = !isOpen">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
        </div>
        <div class="logo">
            <router-link to="/">WizzApp-on-Web</router-link>
        </div>
    </div>
    <div class="mobile-navbar-items" v-if="isOpen">
        <ul>
            <li>
                <router-link to="/">Table</router-link>
            </li>
            <li>
                <router-link to="/card">Card</router-link>
            </li>
            <li>
                <router-link to="/settings">Settings</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "MobileNavBar",
    data() {
        return {
            isOpen: false
        }
    },
}
</script>
<style lang="scss">
.mobile-navbar {
    @apply navbar bg-base-200 text-primary;
    .toggle-button {
        @apply flex-none;
        button {
            @apply btn btn-ghost btn-square;
        }
    }
    .logo {
        @apply flex-1;
        a {
            @apply btn btn-ghost normal-case text-xl;
        }
    }
}
.mobile-navbar-items {
    @apply flex-none bg-base-300 text-primary;
    ul {
        @apply menu menu-horizontal p-0;
    }
}
</style>
