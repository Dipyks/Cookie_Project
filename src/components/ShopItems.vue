<template>
  <b-row>
    <b-col>
      <b-button v-on:click="buyClap(item.id)">
        <div class="item-button">
          <div class="inner">
            <b-img :src="require('../assets/'+(item.name).toLowerCase().replace(' ', '_')+'.png')"></b-img>
          </div>
          <div class="inner">
            <p>{{format(item.price)}}</p>
          </div>
        </div>
        </b-button>
    </b-col>
    <b-col>
      Acheter {{item.name}} pour 
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