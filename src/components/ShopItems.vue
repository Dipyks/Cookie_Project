<template>
  <b-row>
    <b-col>
      <b-button v-on:click="buyClap(item.id)">
          <b-img :src="require('../assets/dollar.png')"></b-img>
          Acheter
        </b-button>
    </b-col>
    <b-col>
      Acheter {{item.name}} pour {{format(item.price)}}
    </b-col>
  </b-row>
</template>

<script>
import {numberFunction} from "../utility/number"

export default {
    props: ["item"],
    methods: {
        buyClap: function(id){
            return this.$store.dispatch("buyClap", id);
        },
        format: function(n){
            return numberFunction.formatNumber(n);
        }
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