<template>
  <div>
    <v-app dark>
      selected weather panel
      <v-parallax class="img" src="http://www.topindonesiaholidays.com/blog/wp-content/uploads/2015/02/Tirtagangga-rice-paddies-3.jpg"></v-parallax>
      <ul>
        <li v-for="(con, index) in continents" :key="index">
          <router-link to="/">{{con.name}}</router-link>
        </li>
      </ul>
    </v-app>
  </div>
</template>

<script>
import {db} from '../firebase'
export default {
  name: 'main',
  data () {
    return {
      continents: [
        {name: 'Africa', link: '#'},
        {name: 'Asia', link: '#'},
        {name: 'Australasia', link: '#'},
        {name: 'Europe', link: '#'},
        {name: 'North America', link: '#'},
        {name: 'South America', link: '#'},
      ]
    }
  },
  firebase: {
    users: {
      source: db.ref('user')
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
.img {
  opacity: 0.1;
  margin-top: 60px;
}
</style>
