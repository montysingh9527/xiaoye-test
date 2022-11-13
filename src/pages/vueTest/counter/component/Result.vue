<template>
  <div>
    <h3>{{ result }}</h3>    
  </div>
</template>
  
<script>
export default {
  name: "CounterResult",
  props: {
    result: Number,
  },
};
</script>