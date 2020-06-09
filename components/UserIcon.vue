<template>
  <b-col cols="6" sm="6" lg="3">
    <div class="name">
      <b-link :href="encodeURI(user.name) + '/'">
        <h5>{{ user.name }}</h5>
      </b-link>
    </div>
    <b-img-lazy thumbnail fluid-grow :src="'photo/' + user.images.ProfilePhoto0" :alt="user.name" />
  </b-col>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
  .name {
    height: 4em;
    display: table-cell;
    vertical-align: bottom;
  }
</style>
