<template>
    <div class="index-card" :id="id">
        <div class="card-wrapper">
            <div class="card-header">
                {{ title }}
            </div>
            <div class="card-content">
                {{ subTitle }}
            </div>
            <!-- The button to open dialog modal -->
            <!-- Send the id of selected user to parent  -->
            <label for="my-modal" class="btn btn-link modal-button" @click="$emit('getCurrentUser',id)">Delete</label>
        </div>
    </div>
</template>
<script>
export default {
    name: "IndexCard",
    props: {
        title: {
            default: 'Card Title',
        },
        subTitle: {
            default: 'Subtitle content'
        },
        id: {
            require: true
        }
    }
}
</script>
<style lang="scss">
.index-card {
    @apply bg-neutral-content shadow-lg flex flex-col rounded-lg w-full xl:w-5/12 2xl:w-3/12 m-5;
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    .card-wrapper {
        @apply p-4 text-left;

        .card-header {
            @apply text-xl font-medium text-gray-900
        }
        .card-content {
            @apply text-gray-400 font-medium text-lg

        }
    }

    &:hover {
        @apply bg-gray-50
    }
}
</style>