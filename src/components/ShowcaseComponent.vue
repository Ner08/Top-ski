<template>
    <!-- Showcase -->
    <section class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start ">
        <div class="container">
            <div class="d-sm-flex align-items-center justify-content-between">
                <div>
                    <h1> {{$t("Moto1")}} <span class="text-warning">{{$t("Moto2")}}</span></h1>
                    <p class="lead my-4">
                        {{$t("MotoDescription")}}
                    </p>
                    <button class="btn btn-primary btn-lg mb-4" data-bs-toggle="modal" data-bs-target="#enroll">
                        {{$t("SendEmail")}}
                    </button>
                </div>
                <!--   <img
            class="img-fluid w-50 d-none d-md-block"
            src="src\assets\images\ski.png"
            alt=""
          /> -->
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>