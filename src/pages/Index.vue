<template>
  <div class="q-ma-md">
    <HeaderBar class="home-index"></HeaderBar>
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
<style lang="scss" scoped>
.home-index {
    background-color: var(--f-color-secondary);
    /* 动画 */
    animation: pulse 2s linear infinite;
}
@keyframes pulse {
    from {
        filter: hue-rotate(0);
    }
    to {
        filter: hue-rotate(360deg);
    }
}
</style>
