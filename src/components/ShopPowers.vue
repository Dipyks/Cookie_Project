<template>
  <b-row align-h="center">
    <b-col>
      <b-button v-on:click="buyPower(power.id)">
        <div class="item-button">
          <div class="inner">
            <b-img :src="require('../assets/pouvoir.png')"></b-img>
          </div>
          <div class="inner">
            <p v-if="power.price > 0">{{format(power.price)}}</p>
             <p v-else>✔</p>
          </div>
        </div>    
      </b-button>
    </b-col>
    <b-col>
      Ce pouvoir fait {{power.name}} !
    </b-col>
  </b-row>
</template>

<script>
import {numberFunction} from "../utility/number"

export default {
    props: ["power"],
    methods: {
        buyPower: function(id){
            return this.$store.dispatch("buyPower", id);
        },
        format: function(n){
            return numberFunction.formatNumber(n);
        },
    },
}
</script>