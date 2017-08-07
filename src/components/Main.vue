<template>
  <div class="hello">
    <h3>Is this thing on?</h3>
    <v-btn flat primary>Primary</v-btn>
      <ul>
        <li v-for="(user, key) in users" :key="key">
          {{user.username}}
        </li>
      </ul>
  </div>
</template>

<script>
import {db} from '../firebase'
export default {
  name: 'hello',
  firebase: {
    users: {
      source: db.ref('user')
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
