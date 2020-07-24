<template>
  <ul>
      <FragmentDemo :data="[5,3,1,6,9,4,2,8]"></FragmentDemo>
  </ul>
</template>


<script>
    // import { ref, watch, computed } from "vue";
    import FragmentDemo from '../components/FragmentDemo.vue'

    export default {
        name: 'quick',       
        components:{
            FragmentDemo
        }
    }
</script>