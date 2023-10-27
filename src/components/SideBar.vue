<script setup lang="ts">

/* defineProps<{
  
}>()
 */
</script>

<template>
    <div class="container-fluid border-right border-light">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-2 col-lg-2 col-xl-2 col-xxl-3 px-sm-1 bg-black">
                <div class="d-flex flex-column align-items-center align-items-sm-end px-3 pt-2 text-white min-vh-100">
                    <a href="/" class="d-flex align-items-start px-3 pb-3">
                        <i class="h2 bi bi-twitter text-light"></i>
                    </a>
                    <ul class="nav flex-column mb-auto mb-0 align-items-center align-items-sm-end" id="menu">
                        <li class="nav-item mb-2">
                            <a href="/" class="nav-link align-middle  btn">
                                <i class="h3 bi bi-house-door-fill text-light"></i>
                            </a>
                        </li>
                        <li class="nav-item mb-2">
                            <a href="#" class="nav-link align-middle btn ">
                                <i class="h3 bi bi-search text-light"></i> </a>
                        </li>
                        <li class="nav-item mb-2">
                            <a href="#submenu2" class="nav-link align-middle btn">
                                <i class="h3 bi bi-bell text-light"></i></a>
                        </li>
                        <li class="nav-item mb-2">
                            <a href="#submenu3" class="nav-link align-middle btn">
                                <i class="h3 bi bi-envelope text-light"></i></a>
                        </li>
                        <li class="nav-item mb-2">
                            <a href="#" class="nav-link align-middle btn">
                                <i class="h3 bi bi-journal-text text-light"></i> </a>
                        </li>
                        <li class="nav-item mb-2">
                            <a href="#" class="nav-link align-middle btn">
                                <i class="h3 bi bi bi-bookmark text-light"></i> </a>
                        </li>
                        <li class="nav-item mb-2">
                            <a href="#" class="nav-link align-middle btn">
                                <i class="h3 bi bi bi-people text-light"></i> </a>
                        </li>
                        <li class="nav-item mb-2">
                            <a href="#" class="nav-link align-middle btn">
                                <i class="h3 bi bi-twitter text-light"></i> </a>
                        </li>
                        <li class="nav-item mb-2">
                            <a href="#" class="nav-link align-middle btn">
                                <i class="h3 bi bi-person text-light"></i> </a>
                        </li>
                        <li class="nav-item mb-2">
                            <a href="#" class="nav-link align-middle btn">
                                <i class="h3 bi bi-three-dots text-light"></i> </a>
                        </li>
                    </ul>
                    <hr>
                    <div class="dropdown pb-4">
                        <a href="#"
                            class="d-flex align-items-center text-white btn btn btn-outline-secondary border-0 rounded-pill outline-none"
                            id="dropdownUser1" data-bs-toggle="dropdown">
                            <img src="https://github.com/mdo.png" alt="avatar" width="40" height="40"
                                class="rounded-circle">
                            <span class="d-none d-xl-inline mx-1">
                                <p class="mb-0">
                                    <strong>Nejc Robič</strong>
                                </p>
                                <p class="my-0"><small>@NejcRobic</small></p>
                            </span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark rounded border"
                            style="background-color: rgb(5, 0, 0);">
                            <li><a class="dropdown-item btn btn-dark p-3 px-5 text-left" href="#">Add an existing account
                                </a></li>
                            <li><a class="dropdown-item btn btn-dark p-3 px-5 text-left" href="#">Logout @NejcRobic</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <slot />
        </div>
    </div>
</template>

<style scoped></style>