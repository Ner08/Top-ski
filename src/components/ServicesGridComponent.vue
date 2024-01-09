<template>
    <div>
        <!-- Services Grid -->
        <section class="p-5">
            <div class="container">
                <div class="row text-center g-4">
                    <div class="col-md">
                        <div class="card bg-dark text-light h-100 ">
                            <img class="card-img-top" src="\images\vila.jpg" alt="Card image">
                            <div class="card-body text-center">
                                <h3 class="card-title">{{$t("Acomodations")}}</h3>
                                <p class="card-text">
                                    {{$t("AccomodationsText")}}
                                </p>
                                <a href="#" class="btn btn-primary">{{$t("Readmore")}}</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="card bg-dark text-light  h-100">
                            <img class="card-img-top" src="\images\instruktor.jpg" alt="Card image">
                            <div class="card-body text-center">
                                <h3 class="card-title">{{$t("Instructions")}}</h3>
                                <p class="card-text">
                                    {{$t("InstructorsText")}}
                                </p>
                                <a href="#" class="btn btn-primary">{{$t("Readmore")}}</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="card bg-dark text-light  h-100">
                            <img class="card-img-top" src="\images\skier.jpg" alt="Card image">
                            <div class="card-body text-center">
                                <h3 class="card-title">{{$t("Skiing")}}</h3>
                                <p class="card-text">
                                    {{$t("SkiPassText")}}
                                </p>
                                <a href="#" class="btn btn-primary">{{$t("Readmore")}}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>