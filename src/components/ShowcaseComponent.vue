<template>
    <!-- Showcase -->
    <section class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start ">
        <div class="container">
            <div class="d-sm-flex align-items-center justify-content-between">
                <div>
                    <h1> {{ $t("Moto1") }} <span class="text-warning">{{ $t("Moto2") }}</span></h1>
                    <p class="lead my-4">
                        {{ $t("MotoDescription") }}
                    </p>
                    <button class="btn btn-primary btn-lg mb-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        {{ $t("SendEmail") }}
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

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{ $t("SendEmailModal") }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="sendEmail" ref="form">
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="exampleInputEmail1">{{ $t("EmailAddress") }}</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="Enter email">
                            <small id="emailHelp" class="form-text text-muted">{{ $t("SharingEmail") }}</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">{{ $t("Message") }}</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="12"></textarea>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ $t('Close') }}</button>
                        <button type="submit" class="btn btn-primary">{{ $t('Send') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import emailjs from '@emailjs/browser';
import { ref } from 'vue'

const form: any = ref(null);

const bla = () => {
    console.log('here')
}

const sendEmail = () => {
    emailjs.sendForm('service_ll0surm', 'template_4s7ueje', form.value, 'RjXdvGN84KQqd6uZ7')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
}
</script>

<style scoped></style>