<template>
  <div>
    <HeaderBar></HeaderBar>
    <q-btn @click="$router.push('css')" label="css案例"></q-btn>
  </div>
</template>

<script>
import HeaderBar from "src/components/header.vue"
export default {
  name: 'HomeIndex',
  components:{HeaderBar}
}
</script>
