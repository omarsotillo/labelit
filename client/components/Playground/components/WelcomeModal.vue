<template>
    <div id="welcome" class="ui basic modal">
        <div class="ui icon header">
            <i class="github icon"></i>
            {{ ModalText }}
        </div>
        <div class="content">
            <FirstStepModal v-if="!firstStepCompleted"></FirstStepModal>
            <SecondStepModal v-else></SecondStepModal>
            <div class="ui center aligned basic segment">
                <div class="ui steps">
                    <div v-bind:class="{active: isActiveFirstStep, completed: firstStepCompleted}" class="step">
                        <i class="github icon"></i>
                        <div class="content">
                            <div class="title">Original Project</div>
                            <div class="description">
                                Choose the project you want the labels from!
                            </div>
                        </div>
                    </div>
                    <div v-bind:class="{active: firstStepCompleted}" class="step">
                        <i class="arrow right icon"></i>
                        <div class="content">
                            <div class="title">Target project</div>
                            <div class="description">Choose the project you want to push labels.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="actions">
            <div v-on:click="nextStep()" class="ui green approved inverted button">
                <i class="checkmark icon"></i>
                {{buttonText}}
            </div>
        </div>
    </div>
</template>
<script>
  import FirstStepModal from './WelcomeModal/FirstStep.vue';
  import SecondStepModal from './WelcomeModal/SecondStep.vue';

  export default {
    components: {
      FirstStepModal,
      SecondStepModal,
    },
    data() {
      return {
        firstStepCompleted: false,
        isActiveFirstStep: true,
        ModalText: 'Tutorial: Select the project you want labels from: ',
        buttonText: 'Next',
      };
    },
    methods: {
      nextStep() {
        if (this.firstStepCompleted === true) {
          $('#welcome')
            .modal('hide')
          ;
        } else {
          this.firstStepCompleted = true;
          this.isActiveFirstStep = false;
          this.ModalText = 'Select the project you want to send labels:';
          this.buttonText = 'Finish';
        }
      },
    },
    mounted() {
      $('#welcome')
        .modal({
          blurring: true,
          observeChanges: true,
        })
        .modal('show')
      ;
    },
  };
</script>
<style scoped>
    #welcome {
    }
</style>