<template>
    <div class="settings-page">
        <h1 class="text-blue-600 text-4xl">Settings Page</h1>
        <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
        <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Dark Mode</span>
              <input type="checkbox" class="toggle toggle-primary" :checked="isChecked" @click="toggleCheckbox" />
            </label>
        </div>
    </div>
</template>
<script>
export default {
    name: "SettingsPage",
    data() {
        return {
            isChecked: false
        }
    },
    methods:{
        // toggle the checked value on click
        toggleCheckbox() {
            this.isChecked = !this.isChecked

            // toggle theme
            if(this.isChecked) {
                document.querySelector('html').setAttribute('data-theme','night')
            }else {
                document.querySelector('html').setAttribute('data-theme','light')
            }
            // save current theme to local storage
            window.localStorage.setItem('theme', this.isChecked ? 'night' : 'light')
        },

        // get theme from local storage
        getTheme() {
            const theme = window.localStorage.getItem('theme')
            // get current theme and toggle to checkbox
            if(theme === 'night') {
                this.isChecked = true
                document.querySelector('html').setAttribute('data-theme','night')
            } else {
                this.isChecked = false
                document.querySelector('html').setAttribute('data-theme','light')
            }
        }
    },

    mounted() {
        // get theme anytime the settings page opens
        this.getTheme()
    }
}    
</script>
