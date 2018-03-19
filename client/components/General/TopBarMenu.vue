<template>
    <header class="ui container">
        <div id="main-menu" class="ui large secondary inverted menu">
            <router-link class="item" to="/"><i class="ui home icon"></i></router-link>
            <router-link class="item" to="/">Features</router-link>
            <div class="right item">
                <a v-if="!isAuthenticated" class="ui inverted button" @click="authenticate('github')">Login</a>
                <router-link v-if="isAuthenticated" class="ui inverted button" to="/playground">Playground</router-link>
            </div>
        </div>
    </header>
</template>
<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters(['isAuthenticated']),
    },
    methods: {
        authenticate: function (provider) {
            this.$auth.authenticate(provider).then( function(response){
                console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }
    },
  };
</script>
<style scoped>
    .ui.secondary.inverted.menu {
        padding-top: 10px;
    }

    .item {
        margin: 0 40px 0 0 !important;
    }

    .ui.inverted.button {
        margin: 0 10px 0 0 !important;
    }
</style>
