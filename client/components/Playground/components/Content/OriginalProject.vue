<template>
    <div class="ui segment">
        <div class="ui header">Projects:</div>
        <div id="dropdown" class="ui selection dropdown">
            <input type="hidden" name="Projects">
            <i class="dropdown icon"></i>
            <div class="default text">{{projectOriginal.name}}</div>
            <div class="menu">
                <div class="header">
                    <i class="tags icon"></i>
                    Original Projects
                </div>
                <div class="divider"></div>
                <div v-for="project in projects" class="item" @click="setOriginalProject(project)">{{project.name}}</div></div>
            <div class="divider"></div>
        </div>
        <table class="ui single line  table">
            <thead>
            <tr>
                <th>Color</th>
                <th>Title</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="label in this.projectOriginal.labels">
                <td>
                    <div class="ui tag label" v-bind:style="{'background-color': label.color }" :data-hex="label.color">{{label.color}}</div>
                </td>
                <td>{{label.description}}</td>
                <td>
                    <button @click="addLabel(label)" class="ui compact icon blue button">
                        <i class="icon add"></i>
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
        <div class="ui bottom attached warning message">
            <i class="icon help"></i>
            Select labels from this table that you would like adding.
        </div>
    </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    computed: {
      ...mapGetters(['projects', 'projectOriginal']),
    },
    methods: {
      ...mapActions([
        'setOriginalProject',
        'addLabel',
      ]),
    },
    mounted() {
      $('#dropdown')
        .dropdown();
    },
  };
</script>
<style scoped>


</style>