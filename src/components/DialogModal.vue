<template>
    <div class="modal-container">
        <input type="checkbox" id="my-modal" class="modal-toggle" />
        <div class="modal">
        <div class="modal-box">
            <h3 class="font-bold text-lg">Are You Sure?</h3>
            <p class="py-4">Do you really want to delete this user? This process canoot be undone.</p>
            <div class="modal-action">
                <label for="my-modal" class="btn btn-ghost">Cancel</label>
                <!-- check the user if click delete button and send the value to parent-->
                <label for="my-modal" class="btn btn-error" @click="$emit('confirmed', true)">Delete</label>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DialogModal',
}
</script>
