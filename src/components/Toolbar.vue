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
               <v-dialog v-model="loginDialog" persistent>
                   <v-btn small slot="activator">login</v-btn>
                    <v-card>
                        <v-card-title>
                        <span class="headline">User login</span>
                        </v-card-title>
                        <v-card-text>
                            <v-text-field label="Email" required></v-text-field>
                            <v-text-field label="Password" type="password" required></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="blue--text darken-1" flat @click.native="loginDialog = false">Close</v-btn>
                        <v-btn class="blue--text darken-1" flat @click.native="loginDialog = false">Login</v-btn>
                        </v-card-actions>
                    </v-card>
               </v-dialog>
               <v-dialog v-model="createDialog" persistent>
                   <v-btn small slot="activator">join</v-btn>
                   <v-card>
                        <v-card-title>
                        <span class="headline">Join Brassboard</span>
                        </v-card-title>
                        <v-card-text>
                            <v-text-field label="Email" required></v-text-field>
                            <v-text-field label="Password" type="password" required></v-text-field>
                            <v-text-field label="Location" type="text"></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="blue--text darken-1" flat @click.native="createDialog = false">Close</v-btn>
                        <v-btn class="blue--text darken-1" flat @click="handleSave">Save</v-btn>
                        </v-card-actions>
                    </v-card>
               </v-dialog>
            </div>
    </v-toolbar>
</template>
<script>
import {db} from '../firebase'
import firebase from 'firebase'
export default {
    name: 'toolbar',
    data () {
        return {
            loginDialog: false,
            createDialog: false,
            items: [
                {name: 'Main', title: 'Home'},
                {name: 'About', title: 'About'},
                {name: 'MapComp', title: 'Map'}
            ],
            email: '',
            password: '',
            location: ''
        }
    },
    methods: {
        handleRouteChange(route) {
            this.$router.push({name: route})
        },
        handleSave () {
            this.createDialog = false
            console.log(this.email)
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)  
            });
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

