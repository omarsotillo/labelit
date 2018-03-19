<template>
    <div id="topSegment" class="ui center aligned segment">
        <div class="ui info message">
            <i class="close icon"></i>
            <div class="header">
                These are projects you have pushing access! :D
            </div>
            <ul class="list">
                <li>With <b>Preview</b> you will see how all the issues labels will look.</li>
                <li>Directly ship your project to Github with finish!</li>
            </ul>
        </div>
        <div class="ui header">Output project</div>
        <div id="dropdownMiddle" class="ui center aligned selection dropdown">
            <input type="hidden" name="Projects">
            <i class="dropdown icon"></i>
            <div class="default text">{{projectToBeAdded.name}}</div>
            <div class="menu">
                <div class="header">
                    <i class="tags icon"></i>
                    Output Projects
                </div>
                <div class="divider"></div>
                <div v-for="project in projects" class="item" @click="setToBeAddedProject(project)">{{project.name}}</div></div>
            <div class="divider"></div>
        </div>

    </div>

</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    computed: {
      ...mapGetters(['projects', 'projectToBeAdded']),
    },
    methods: {
      ...mapActions([
        'setToBeAddedProject',
        'addLabel',
      ]),
    },
    mounted() {
      $('#dropdownMiddle')
        .dropdown();
      $('.message .close')
        .on('click', function() {
          $(this)
            .closest('.message')
            .transition('fade')
          ;
        })
      ;
    },
  };
</script>

<style>
#topSegment{
    margin-top: 3em;
    margin-bottom: 3em;
}
</style>