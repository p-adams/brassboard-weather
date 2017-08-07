<template>
    <v-toolbar light class="primary">
        <v-toolbar-title class="white--text">
             <v-menu bottom>
            <v-btn icon slot="activator">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </v-btn>
            <v-list>
                <v-list-tile v-for="(item, key) in items" :key="key">
                    <v-list-tile-title :style="{color: 'black'}">{{item.title}}</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
            <span
                class="home"
                @click="returnHome()"
            >Brassboard Weather
            </span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <h6>Want the most exact hyperlocal weather?</h6>
            <div class="routes">
               login
               join
            </div>
    </v-toolbar>
</template>
<script>
export default {
    name: 'toolbar',
    data () {
        return {
            items: [
                {title: 'Home'},
                {title: 'About'},
                {title: 'Map'}
            ]
        }
    },
    methods: {
        returnHome() {
            this.$router.push({name: 'Main'})
        }
    }
  
}
</script>
<style scoped>
    .home {
        cursor: pointer;
    }
    .link {
        color: white;
        margin: 5px;
    }
    .routes {
        margin-top: 15px;
        padding: 20px;
    }
    h6 {
        margin-top: 32px;
        color: white;
        font-size: 14px;
    }
</style>

