<template>
    <div class="content">
        <div id="mainGrid" class="ui grid container">
            <div class="two column row">
                <div class="column">
                    <OriginalProject></OriginalProject>
                </div>
                <div class="column">
                    <MiddlewareLabels></MiddlewareLabels>
                    <TargetProject></TargetProject>
                    <ActionsButtons></ActionsButtons>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import OriginalProject from './Content/OriginalProject.vue';
  import MiddlewareLabels from './Content/MiddlewareLabels.vue';
  import TargetProject from './Content/TargetProject.vue';
  import ActionsButtons from './Content/ActionsButtons.vue';

  export default {
    components: {
      OriginalProject,
      MiddlewareLabels,
      TargetProject,
      ActionsButtons,
    },
  };
</script>

<style scoped>
    .content {
        margin: 3em 0 1em 0;
    }
    #mainGrid{
        width: 2000px !important;
    }
</style>