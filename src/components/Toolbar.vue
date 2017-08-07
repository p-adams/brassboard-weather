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
            <div class="routes" v-if="!isSignedIn">
               <v-dialog v-model="loginDialog" persistent>
                   <v-btn small slot="activator">Sign In</v-btn>
                    <v-card>
                        <v-card-title>
                        <span class="headline">User Sign In</span>
                        </v-card-title>
                        <v-card-text>
                            <v-text-field label="Email" v-model="email" required></v-text-field>
                            <v-text-field label="Password" type="password" v-model="password" required></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="blue--text darken-1" flat @click.native="loginDialog = false">Close</v-btn>
                        <v-btn class="blue--text darken-1" flat @click="handleLogin">Login</v-btn>
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
                            <v-text-field label="Email" v-model="email" required></v-text-field>
                            <v-text-field label="Password" v-model="password" type="password" required></v-text-field>
                            <v-text-field label="Location" v-model="location" type="text"></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="blue--text darken-1" flat @click.native="createDialog = false">Close</v-btn>
                        <v-btn class="blue--text darken-1" flat @click="handleSave">Save</v-btn>
                        </v-card-actions>
                    </v-card>
               </v-dialog>
            </div>
            <div v-else>
                <v-btn @click="signOut">Sign Out</v-btn>
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
            isSignedIn: false,
            loginDialog: false,
            createDialog: false,
            items: [
                {name: 'Main', title: 'Home'},
                {name: 'About', title: 'About'},
                {name: 'MapComp', title: 'Map'}
            ],
            email: '',
            password: '',
            location: '',
            userLocation: ''
        }
    },
    methods: {
        handleRouteChange(route) {
            this.$router.push({name: route})
        },
        setLocation (user) {
            let ref = db.ref('users')
            ref.on("value", snapshot => {
                 snapshot.forEach(u => {
                     if(user.uid == u.val().uuid){
                         this.userLocation = u.val().location
                     }
                 })
            },  (errorObject) => {
                console.log("The read failed: " + errorObject.code);
            });
        },
        getCurrentUser () {
            let user = firebase.auth().currentUser
            if (user) {
                this.setLocation(user)
                console.log(`${user.email} is currently signed in`)
            } else {
                console.log('no user signed in')
            }
        },
        handleSaveLocation (uuid) {
            // save user's location in users database
            let ref = db.ref('users')
            ref.push({
                    uuid,
                    location: this.location
            })
            this.getCurrentUser()
            this.location = ''
        },
        handleSave () {
            this.createDialog = false
            firebase.auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(res => {
                    this.handleSaveLocation(res.uid)
                    this.isSignedIn = true
                    }
                )
                .catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode)  
            });
            this.email = ''
            this.password = ''
        },
        handleLogin () {
            this.loginDialog = false
            firebase.auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(res => {
                    this.isSignedIn = true
                    this.getCurrentUser()
                    }
                )
                .catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode)
            });
            this.email = ''
            this.password = ''
        },
        signOut () {
            firebase.auth().signOut().then(() => {
                console.log('Goodbye')
                this.isSignedIn = false
                this.userLocation = ''
            }).catch((error) => {
                console.log(error)
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

