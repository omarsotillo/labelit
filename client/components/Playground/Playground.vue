<template>
    <div class="page">
        <WelcomeModal></WelcomeModal>
        <Content></Content>
    </div>
</template>
<script>
  import WelcomeModal from './components/WelcomeModal.vue';
  import Content from './components/Content.vue';

  export default {
    components: {
      WelcomeModal,
      Content,
    },
  };
</script>
