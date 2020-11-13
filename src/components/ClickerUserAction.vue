<template>
  <b-container>
    <b-img class="piece" :src="require('../assets/stonks.png')" v-on:click="applause">Applaudir</b-img>
  </b-container>
</template>

<script>
export default {
    methods: {
        applause: function(){
            return this.$store.dispatch("applause");
        },
    }
}
</script>

