<template>
    <nav class="navbar">
        <div class="logo">
            <router-link to="/">WizzApp-on-Web</router-link>
        </div>
        <div class="navbar-items">
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
    </nav>
</template>
<script>
export default {
name: 'IndexNavBar'
}   
</script>
<style lang="scss">
.navbar {
    @apply bg-secondary-content shadow-lg text-accent-focus;
    .logo {
        @apply flex-1;
        a {
            @apply btn btn-ghost normal-case text-xl
        }
    }
    .navbar-items {
        @apply flex-none;
        ul {
            @apply menu menu-horizontal p-0
        }
    }
}
</style>