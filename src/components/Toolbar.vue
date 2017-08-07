<template>
    <v-toolbar light :style="{height: '100px'}" class="primary">
        <v-toolbar-title class="white--text">
             <v-menu bottom>
            <v-btn icon slot="activator">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </v-btn>
            <v-list>
                <v-list-tile v-for="(item, key) in items" :key="key">
                    <v-list-tile-title
                        @click="handleRouteChange(item.name)"
                        :style="{color: 'black'}"
                    >
                        {{item.title}}
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
            Brassboard Weather
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <h6>Want the most exact hyperlocal weather?</h6>
            <div class="routes">
               <v-dialog v-model="dialog" persistent>
                   <v-btn small slot="activator">login</v-btn>
               </v-dialog>
               <v-dialog v-model="dialog" persistent>
                   <v-btn small slot="activator">join</v-btn>
               </v-dialog>
            </div>
    </v-toolbar>
</template>
<script>
export default {
    name: 'toolbar',
    data () {
        return {
            dialog: false,
            items: [
                {name: 'Main', title: 'Home'},
                {name: 'About', title: 'About'},
                {name: 'MapComp', title: 'Map'}
            ]
        }
    },
    methods: {
        handleRouteChange(route) {
            this.$router.push({name: route})
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

