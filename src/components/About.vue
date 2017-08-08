<template>
  <div :style="{marginTop: '120px'}">
      <v-app light>
        <v-flex xs12 sm6 offset-sm3>
        <v-card class="weather">
            <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
            </v-card-media>
            <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">About Brassboard Weather</h3>
                <div>Brassboard Weather is an automated weather data aggregator that takes the weather predictions from various forecasters and calculates the most likely outcome.
              The thinking is that the combined knowledge of the forecasters will produce a better prediction.</div>
            </div>
            </v-card-title>
        </v-card>
        </v-flex>
        </v-app>
    </div>
</template>
<script>
export default {
  
}
</script>