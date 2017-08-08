<template>
  <div>
    <v-app light>
      <v-layout>
       <v-flex xs12 sm6 offset-sm3>
            <v-text-field
              v-model="city"
              name="input-2"
              label="Search location by city name"
              class="mt-5"
              @keyup.enter="getWeather"
            ></v-text-field>
        </v-flex>
      </v-layout>
      <v-parallax class="img" height="500" src="http://www.topindonesiaholidays.com/blog/wp-content/uploads/2015/02/Tirtagangga-rice-paddies-3.jpg">
       <WeatherDisplay></WeatherDisplay>
      </v-parallax>
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
import WeatherDisplay from './WeatherDisplay'
import {Bus} from '../bus'
import axios from 'axios'
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
      ],
      city: '',
      location: ''
    }
  },
  methods: {
      getWeather() {
         axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&APPID=99e9435258bbe95f5b8fd0df39c49667`)
                .then(res => {
                    console.log(res)
                    Bus.$emit('search', res)
                })
                .catch(err => {
                    console.log(err)
                })
        this.city = ''
      }
  },
  components: {
    WeatherDisplay
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
  opacity: 0.5;
}
.search-button {
  margin-top: -10px;
}
</style>
