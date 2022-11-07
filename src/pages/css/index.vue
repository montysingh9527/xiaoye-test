<template>
    <div>
      <HeaderBar class="home-index"></HeaderBar>
      <q-btn to="css/ios" label="IOS-switch" no-caps></q-btn>
    </div>
  </template>
  
  <script>
  import HeaderBar from "src/components/header.vue"
  export default {
    name: 'CssHome',
    components:{HeaderBar}
  }
  </script>
  