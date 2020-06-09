<template>
  <b-container>
    <nuxt />

    <footer class="container py-5">
      <hr>
      <p class="text-center">
        <a class="text-muted" href="https://github.com/ictrobot/yearbook-site">Archived by Ethan Jones</a>
      </p>
    </footer>
  </b-container>
</template>

<script>
export default {
}
</script>

<style>
  .container {
    max-width: 960px;
  }

  .flex-equal > * {
    -ms-flex: 1;
    -webkit-box-flex: 1;
    flex: 1;
  }

  @media (min-width: 768px) {
    .flex-md-equal > * {
      -ms-flex: 1;
      -webkit-box-flex: 1;
      flex: 1;
    }
  }
</style>
