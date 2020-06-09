<template>
  <div class="container">
    <div>
      <h1 class="title">
        Yearbook
      </h1>
      <div v-for="form in forms" :key="form">
        <h3>{{ form }}</h3>
        <b-row>
          <UserIcon v-for="student in students(form)" :key="student.user_id" :user="student" />
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import UserIcon from '~/components/UserIcon.vue'
import Yearbook from '~/src/Yearbook.js'

export default {
  components: {
    UserIcon
  },
  data () {
    return {
      users: Yearbook.getUsers()
    }
  },
  computed: {
    forms () {
      return Object.keys(this.users).sort()
    }
  },
  methods: {
    students (form) {
      const students = Object.keys(this.users[form]).map(Yearbook.getUser)
      students.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
      return students
    }
  }
}
</script>

<style>
h3 {
  padding-top: 4em;

}
h1, h3 {
  text-align: center;
}
</style>
