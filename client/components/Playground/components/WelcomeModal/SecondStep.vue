<template>
    <div id="secondAccordionWelcome" class="ui styled accordion">
        <div v-for="project in projects">
            <div class="title ">
                <i class="dropdown icon"></i>
                Repo: {{ project.name }}
            </div>
            <div class="content ">
                <div class="ui divided selection list">
                    <a class="item" v-for="label in project.labels">
                        <div class="ui red horizontal label">{{label.color}}</div>
                        {{label.description}}
                    </a>
                </div>
                <div class="ui button" @click="setToBeAddedProject(project)">
                    Set project
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters(['projects']),
    },
    methods: {
      ...mapActions(['setToBeAddedProject']),
    },
    mounted() {
      $('#secondAccordionWelcome')
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