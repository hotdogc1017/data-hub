<script lang="ts" setup>
import { } from "vue";
</script>

<template>
    <div class="container header-container">
        <div class="row">
            <div class="stain col-2"></div>
            <div class="stain col-8"></div>
            <div class="stain col-2"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../styles/global/index.scss';

.header-container {
    border-bottom: 1px solid $line-color;
}

.stain {
    height: 50px;
    border: 5px solid black;
    background-color: rgb(51, 255, 153, 0.2) !important;
}
</style>
