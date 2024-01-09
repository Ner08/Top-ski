<template>
  <!-- Newsletter area -->
  <section class="bg-primary text-light p-4">
    <div class="container">
      <div class="d-md-flex justify-content-between align-items-center">
        <h3 class="mb-3 mb-md-0">{{ $t("Newsletter") }}</h3>
        <div class="input-group news-input">
          <input type="text" class="form-control" placeholder="E-mail" />
          <button class="btn btn-dark btn-lg" type="button">{{ $t("Confirm") }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
@media (min-width: 768px) {
  .news-input {
    width: 50%;
  }
}
</style>