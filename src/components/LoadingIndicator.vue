<template>
    <div class="indicator-container">
        <div class="loading-indicator">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>
<style lang="scss">
.indicator-container {
    @apply mx-auto flex justify-center items-center;
}
.loading-indicator {
    display: inline-block;
    position: relative;
    width: inherit;
    height: 80px;

    span {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #333;
        border-radius: 50%;
        animation: load 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #333 transparent transparent transparent;

        &:nth-child(1) {
            animation-delay: -0.45s;
        }
        &:nth-child(2) {
            animation-delay: -0.3s;
        }
        &:nth-child(3) {
            animation-delay: -0.15s;
        }
    }
}
@keyframes load {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>