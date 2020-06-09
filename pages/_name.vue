<template>
  <div class="container">
    <b-row>
      <b-col cols="12" sm="8">
        <h1 class="title">
          {{ name }}
        </h1>
        <table style="width: 100%">
          <tr v-for="(fieldValue, field) in fields" :key="field">
            <th>{{ field }}:</th><td>{{ fieldValue }}</td>
          </tr>
        </table>
        <b-form-group class="text-center d-block d-md-none">
          <b-form-radio-group
            id="btn-radios-1"
            v-model="selected"
            :options="options"
            buttons
            button-variant="outline-secondary"
            name="radios-btn-default"
            class="mt-2 mb-2"
          />
        </b-form-group>
      </b-col>
      <b-col cols="12" sm="4">
        <b-img
          thumbnail
          block
          :src="'../photo/' + user.images.ProfilePhoto0"
          :alt="user.name"
          style="max-height: 20em; width: auto; margin: 0 auto;"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" sm="8">
        <b-alert v-for="comment in comments" :key="comment.user_id + comment.message" show variant="secondary">
          <p>{{ comment.message }}</p>
          <p style="text-align: right">
            <a :href="'../' + encodeURI(comment.user_name) + '/'"><i class="text-muted">{{ comment.user_name }}</i></a>
          </p>
        </b-alert>
      </b-col>
      <b-col cols="12" sm="4">
        <b-img
          thumbnail
          block
          :src="'../photo/' + user.images.Photo0"
          :alt="user.name"
          style="max-height: 20em; width: auto; margin: 0 auto;"
        />
        <b-img
          thumbnail
          block
          :src="'../photo/' + user.images.Photo1"
          :alt="user.name"
          style="max-height: 20em; width: auto; margin: 0 auto;"
        />
        <b-img
          thumbnail
          block
          :src="'../photo/' + user.images.Photo2"
          :alt="user.name"
          style="max-height: 20em; width: auto; margin: 0 auto;"
        />
        <b-form-group class="text-center d-none d-md-block">
          <b-form-radio-group
            id="btn-radios-1"
            v-model="selected"
            :options="options"
            buttons
            button-variant="outline-secondary"
            name="radios-btn-default"
            class="mt-4"
          />
        </b-form-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// import UserIcon from '~/components/UserIcon.vue'
import Yearbook from '~/src/Yearbook.js'

export default {
  components: {
    // UserIcon
  },
  validate ({ params }) {
    return Yearbook.allNames().includes(params.name)
  },
  data () {
    const name = this.$route.params.name
    return {
      name,
      selected: false,
      options: [
        { text: 'Printed comments', value: false },
        { text: 'All comments', value: true }
      ],
      user: Yearbook.getUserByName(name)
    }
  },
  computed: {
    fields () {
      const fields = {}
      Object.keys(this.user.fields).forEach((key) => {
        const value = this.user.fields[key]
        if (value) { fields[key] = value }
      })
      return fields
    },
    comments () {
      return this.user.comments.filter(x => this.selected || x.included)
    }
  }
}
</script>

<style>

</style>
