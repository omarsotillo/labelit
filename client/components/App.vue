<template>
    <div id="app">
        <TopBarMenu></TopBarMenu>
        <router-view></router-view>
    </div>
</template>
<script>
  import TopBarMenu from './General/TopBarMenu.vue';

  export default {
    components: {
      TopBarMenu,
    },
  };
</script>
<style>
    body {
        display: block;
        margin: 0;
        background: linear-gradient(135deg, #6046E8 15%, #3B7EE9 85%);
    }
</style>
