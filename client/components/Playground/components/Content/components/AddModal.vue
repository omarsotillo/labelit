<template>
    <div>
        <!-- Add button of label -->
        <button @click="openAddLabelModal()" class="ui blue button">
            <i class="icon add"></i>
            Add new label
        </button>
        <!-- Modal of adding event ( Change modal to component) -->
        <div id="addLabelModal" class="ui modal">
            <i class="close icon"></i>
            <div class="header">
                New label! :D
            </div>
            <div class="content">
                <div class="ui form">
                    <div class="field">
                        <label>Color :</label>
                        <input v-model="color" type="text" name="color" placeholder="Color of the label">
                    </div>
                    <div class="field">
                        <label>Description :</label>
                        <input v-model="description" type="text" name="description"
                               placeholder="Description of the label">
                    </div>
                </div>
                <div class="ui center aligned container">
                    <div class="ui divider"></div>
                    <h3><i class="ui empty star icon"></i> Preview of the label <i class="ui empty star icon"></i></h3>
                    <div class="ui tag label" v-bind:style="{'background-color': color }" :data-hex="color">
                        {{color}}
                    </div>
                    {{description}}
                </div>
            </div>
            <div class="actions">
                <div class="ui black deny button">
                    Return! :c
                </div>
                <div @click='addLabel({color:color, description:description})'
                     class="ui positive right labeled icon button">
                    Add a new label!
                    <i class="checkmark icon"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        description: '',
        color: '',
      };
    },
    methods: {
      openAddLabelModal() {
        $('#addLabelModal')
          .modal({
            duration: 300,
            blurring: true,
            observeChanges: true,
          })
          .modal('show')
        ;
      },
    },
    computed: {
      ...mapActions(['addLabel']),
    },
  };
</script>