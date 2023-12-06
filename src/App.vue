<script setup lang="ts">
import { RouterView } from 'vue-router'
import LayoutComponent from './components/LayoutComponent.vue';
</script>

<template>
  <LayoutComponent>
    <router-view></router-view>
  </LayoutComponent>
</template>

<style scoped></style>
