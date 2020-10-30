<template>
  <b-container>
    <b-button v-on:click="applause">Applaudir</b-button>
  </b-container>
</template>

<script>
export default {
    methods: {
        applause: function(){
            return this.$store.dispatch("applause");
        }
    }
}
</script>