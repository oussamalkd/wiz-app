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
            <label for="my-modal" class="btn btn-link text-error modal-button" @click="$emit('getCurrentUser',id)">Delete</label>
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
    @apply bg-primary-content shadow-lg flex flex-col rounded-lg w-full xl:w-5/12 2xl:w-3/12 m-5;
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    .card-wrapper {
        @apply p-4 text-left;

        .card-header {
            @apply text-xl font-medium text-primary-focus
        }
        .card-content {
            @apply text-base-content font-normal text-lg

        }
    }

    &:hover {
        @apply bg-base-200
    }

    &.highlited {
        @apply border border-blue-600;
        animation: highlight 2s ease-in-out;
    }
}
// highligh animation
@keyframes highlight {
    0% {
        @apply opacity-100 border-opacity-100;
    }
    30% {
        @apply opacity-10 border-opacity-10;
    }
    70% {
        @apply opacity-90 border-opacity-90;
    }
    85% {
        @apply opacity-20 border-opacity-20;
    }
    100% {
        @apply opacity-100 border-opacity-100;
    }
}
</style>