<template>
    <div class="ui styled accordion">
        <div v-for="project in projects">
            <div class="title ">
                <i class="dropdown icon"></i>
                Repo: {{ project.name }}
            </div>
            <div class="scrolling content ">
                <div class="ui divided selection list">
                    <a class="item" v-for="label in project.labels">
                        <div class="ui tag label" v-bind:style="{'background-color': label.color }" :data-hex="label.color">{{label.description}}</div>

                    </a>
                </div>
                <div class="ui button" @click="setOriginalProject(project)">
                    Set project
                </div>
            </div>
        </div>

    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'projects',
      ]),
    },

    methods: {
      ...mapActions([
        'setOriginalProject',
      ]),
    },
    mounted() {
      $('.ui.accordion')
        .accordion();
    },
  };
</script>
<style scoped>
    .ui.styled.accordion {
        width: 1000px;
    }

    p {
        color: black;
    }
</style>
