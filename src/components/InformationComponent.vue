<template>
    <!-- Contact & Maps -->
    <section class="p-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-md">
                    <h3 class="text-center mb-4">{{$t("ContactInfo")}}</h3>
                    <ul class="list-group list-group-flush lead">
                        <li class="list-group-item">
                            <span class="fw-bold">{{$t("MainLocation")}}: </span> {{$t("location")}}
                        </li>
                        <li class="list-group-item">
                            <span class="fw-bold">{{$t("PhoneNumber")}}: </span> {{$t("number")}}
                        </li>
                        <li class="list-group-item">
                            <span class="fw-bold">{{$t("EmailAddress")}}: </span> {{$t("email")}}
                        </li>
                    </ul>
                </div>
                <!-- TODO: Change location -->
                <div class="col-md">
                    <iframe class="container rounded-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.0946105047797!2d13.833693856093136!3d46.4864389968439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477a7d79d9cb4d91%3A0x489a0308c0013708!2sJezerci%2023b%2C%204282%20Gozd%20Martuljek!5e0!3m2!1ssl!2ssi!4v1701881390231!5m2!1ssl!2ssi" width="600" height="450" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>