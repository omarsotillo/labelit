<template>
    <div class="page">
    </div>
</template>

<script type="text/babel">
  import { mapActions, mapGetters } from 'vuex';

  export default {
    methods: {
      ...mapActions(['setState']),
    },
    computed: {
      ...mapGetters({
        appState: 'appState',
      }),
    },
    components: {},
    mounted() {
      this.setState('Mounted');
    },
  };
</script>
<style>

</style>
