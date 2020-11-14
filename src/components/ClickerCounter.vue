<template>
  <div class="clic">
      <p>Moula par seconde : {{ format(countseconde) }}</p>
      <p>Vous avez {{ format(applause) }} moula.</p>
  </div>
</template>

<script>
import { numberFunction } from "../utility/number";

export default {
    name: "ClickerCounter",
    computed: {
        applause: function(){
            return this.$store.getters.applause;
        },
        countseconde: function(){
          return this.$store.getters.countseconde;
        },
    },
    methods: {
        format: function(n){
            return numberFunction.formatNumber(n);
        },
    }
}
</script>


 