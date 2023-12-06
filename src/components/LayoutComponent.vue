<template>
        <NavbarComponent/>
        <slot></slot> 
        <FooterComponent/>
</template>

<script setup lang="ts">
    import NavbarComponent from './NavbarComponent.vue';
    import FooterComponent from './FooterComponent.vue';
</script>

<style scoped>

</style>