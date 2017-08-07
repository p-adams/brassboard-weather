<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
        <v-card class="weather">
            <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
            </v-card-media>
            <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
            </div>
            </v-card-title>
        </v-card>
        </v-flex>
  </v-layout>
</template>
<script>
export default {
  
}
</script>
<style>
    .weather {
        z-index: 10000;
        background-color: rgba(0,0,0,0.4);
    }
</style>

