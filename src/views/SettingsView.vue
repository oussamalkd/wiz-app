<template>
    <div class="settings-page">
        <div class="setting-container flex mx-auto justify-center items-center">
            <div class="form-control">
                <label class="label cursor-pointer">
                <span class="label-text text-xl mx-2">Dark Mode</span>
                <input type="checkbox" class="toggle toggle-primary" :checked="isChecked" @click="toggleCheckbox" />
                </label>
            </div>
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

        // toggle checkbox depend on current theme
        getCheckBoxValue() {
            const theme = window.localStorage.getItem('theme')
            // get current theme
            if(theme === 'night') {
                this.isChecked =  true
            } else {
                this.isChecked = false
            }
            }
    },

    mounted() {
        // get Check Box Value anytime the settings page opens
        this.getCheckBoxValue()
    }
}    
</script>
