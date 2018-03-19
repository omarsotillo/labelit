<template>
    <div class="ui segment">
        <div class="ui header">Summary of labels</div>
        <table class="ui single line  table">
            <thead>
            <tr>
                <th>Color</th>
                <th>Title</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="label in this.middlewareLabels">
                <td>
                    <div class="ui tag label" v-bind:style="{'background-color': label.color }" :data-hex="label.color">
                        {{label.color}}
                    </div>
                </td>
                <td>{{label.description}}</td>
                <td>
                    <button class="ui compact blue icon button">
                        <i class="icon edit"></i>
                    </button>
                    <button @click="removeLabel(label)" class="ui compact blue icon button">
                        <i class="icon delete"></i>
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
        <!-- Modals and buttons -->
        <AddModal></AddModal>

    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import AddModal from './components/AddModal.vue';

  export default {
    components: {
      AddModal,
    },
    methods: {
      ...mapActions(['setToBeAddedProject', 'removeLabel', 'editLabel']),
    },
    computed: {
      ...mapGetters(['projects', 'middlewareLabels']),
    },
    mounted() {
      $('#dropdownSecond')
        .dropdown();
    },
  };
</script>
<style scoped>

</style>