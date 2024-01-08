<template>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div class="container">
            <!--  <img src="\images\logo.png" width="30" height="30"
                class="d-inline-block align-top me-4 " alt=""> -->
            <div class="d-inline">
                <a href="#" class="navbar-brand">Top Ski</a>
                <p class="small text-secondary m-0 p-0">Skiing And Lodging</p>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navMenu">
                <ul class="navbar-nav ms-auto text-center">
                    <li class="nav-item">
                        <a href="#learn" class="nav-link">{{ $t("nav1") }}</a>
                    </li>
                    <li class="nav-item">
                        <a href="#questions" class="nav-link">{{ $t("nav2") }}</a>
                    </li>
                    <li class="nav-item">
                        <a href="#instructors" class="nav-link">{{ $t("nav3") }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
</script>

<style scoped>
.navbar-brand {
    font-family: optima, sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
}
p{
    font-size: 0.8rem;
}
</style>