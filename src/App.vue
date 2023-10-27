<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import SideBar from './components/sidebar-components/SideBar.vue'
</script>

<template>
  <SideBar>
    <router-view class="flex-shrink-1"></router-view>
  </SideBar>
</template>

<style scoped></style>
