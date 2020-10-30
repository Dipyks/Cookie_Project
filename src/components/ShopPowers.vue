<template>
  <b-container>
    <b-button v-on:click="buyClap">Supporter : {{priceClap}}</b-button>
    Vous avez {{ nbClap }} supporter(s)!
  </b-container>
</template>

<script>
export default {
    methods: {
        buyClap: function(){
            return this.$store.dispatch("buyClap");
        },
    },
    computed: {
        nbClap: function(){
            return this.$store.getters.nbClap;
        },
        priceClap: function(){
            return this.$store.getters.priceClap;
        }
    }
}
</script>