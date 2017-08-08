<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
            <v-card class="weather">
                <v-card-title primary-title>
                <div :style="{marginLeft: '15%'}">
                    <h6 class="headline mb-2">Weather in {{location}} right now</h6>
                    <div>
                        <h6>Conditions: {{conditions}}</h6>
                        <h6>Current temp: {{current}} &#8457; </h6>
                        <h6>Hi: {{max}} &#8457; </h6>
                        <h6>Low: &#8457; {{min}}</h6>
                        <h6>Humidity: {{humidity}}%</h6>
                    </div>
                </div>
                </v-card-title>
            </v-card>
        </v-flex>
  </v-layout>
</template>
<script>
import {Bus} from '../bus'
import axios from 'axios'
export default {
    created () {
        Bus.$on('location', loc => {
            this.location = loc
            console.log(loc)
            this.fetchLocalWeather(this.location)
        })
        if(!this.location) {
            this.fetchStaticWeather()
        }
        Bus.$on('search', res => {
            this.setData(res)
        })
        Bus.$on('reset', city => {
            this.fetchLocalWeather(city)
        })
    },
    data () {
        return {
            location: '',
            conditions: '',
            current: '',
            max: '',
            min: '',
            humidity: ''
        }
    },
    methods: {
        fetchLocalWeather (locality) {
            console.log(locality)
            axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${locality}&units=imperial&APPID=99e9435258bbe95f5b8fd0df39c49667`)
                .then(res => {
                    console.log(res)
                    this.setData(res)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        fetchStaticWeather () {
             axios.get(`http://api.openweathermap.org/data/2.5/weather?q=San Francisco&units=imperial&APPID=99e9435258bbe95f5b8fd0df39c49667`)
                .then(res => {
                    console.log(res.data)
                    this.setData(res)
                    
                })
                .catch(err => {
                    console.log(err)
                })
        },
        setData (res) {
            let weather = res.data.main
            this.location = res.data.name
            this.conditions = res.data.weather[0].description
            this.current = weather.temp
            this.max = weather.temp_max
            this.min = weather.temp_min
            this.humidity = weather.humidity
        }
    },

}
</script>
<style>
    .weather {
        z-index: 10000;
        background-color: rgba(0,0,0,0.4);
    }
    .headline.mb-5 {
        text-align: center;
    }
</style>

