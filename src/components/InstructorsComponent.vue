<template>
    <!-- Instructors -->
    <section class="bg-primary p-5">
        <div class="container">
            <h2 class="text-center text-white">{{ $t("OurInstructors") }}</h2>
            <p class="lead text-center text-white mb-5">
                {{ $t("OurInstructorsText") }}
            </p>
            <div class="row g-4">
                <!-- Intructor 1 -->
                <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="" class="rounded-circle mb-3" />
                            <h3 class="card-title mb3">{{$t("Instructor1Name")}}</h3>
                            <p class="card-text">
                               {{$t("Instructor1Text")}}
                            </p>
                            <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                            <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                            <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                            <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
                        </div>
                    </div>
                </div>
                <!-- Intructor 2 -->
                <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <img src="https://randomuser.me/api/portraits/women/11.jpg" alt=""
                                class="rounded-circle mb-3" />
                            <h3 class="card-title mb3">{{$t("Instructor2Name")}}</h3>
                            <p class="card-text">
                                {{$t("Instructor2Text")}}
                            </p>
                            <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                            <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                            <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                            <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
                        </div>
                    </div>
                </div>
                <!-- Intructor 3 -->
                <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="" class="rounded-circle mb-3" />
                            <h3 class="card-title mb3">{{$t("Instructor3Name")}}</h3>
                            <p class="card-text">
                                {{$t("Instructor3Text")}}
                            </p>
                            <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                            <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                            <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                            <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
                        </div>
                    </div>
                </div>
                <!-- Intructor 4 -->
                <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <img src="https://randomuser.me/api/portraits/women/76.jpg" alt=""
                                class="rounded-circle mb-3" />
                            <h3 class="card-title mb3">{{$t("Instructor4Name")}}</h3>
                            <p class="card-text">
                                {{$t("Instructor4Text")}}
                            </p>
                            <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                            <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                            <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                            <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>