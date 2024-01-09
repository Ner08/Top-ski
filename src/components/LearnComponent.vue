<template>
    <!-- Learn Sections-->
    <section id="learn" class="p-5">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-md">
                    <img src="\images\group-ski.jpg" class="img-fluid rounded-2" alt="" />
                </div>
                <div class="col-md p-5">
                    <h2>{{ $t("SkiPassPetrol") }}</h2>
                    <p class="lead">
                        {{ $t("SkiPassPetrolDescription1") }}
                    </p>
                    <p>
                        {{ $t("SkiPassPetrolDescription2") }}
                    </p>
                    <a href="#" class="btn btn-dark mt-3"><i class="bi bi-chevron-right"></i> {{ $t("Readmore") }}</a>
                </div>
            </div>
        </div>
    </section>

    <section class="p-5 bg-dark text-light">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-md p-5">
                    <h2>{{ $t("Childcare") }}</h2>
                    <p class="lead">
                        {{ $t("ChildcareDescription1") }}
                    </p>
                    <p>
                        {{ $t("ChildcareDescription2") }}
                    </p>
                    <a href="#" class="btn btn-light mt-3"><i class="bi bi-chevron-right"></i> {{ $t("Readmore") }}</a>
                </div>
                <div class="col-md">
                    <img src="\images\child.jpg" class="img-fluid rounded-2" alt="" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>