<template>
  <b-row>
    <b-col>
      <b-button v-on:click="buyPower(power.id)">{{power.price}}</b-button>
    </b-col>
    <b-col>
      Ce pouvoir fait {{power.name}} !
    </b-col>
  </b-row>
</template>

<script>
export default {
    props: ["power"],
    methods: {
        buyPower: function(id){
            return this.$store.dispatch("buyPower", id);
        },
    },
}
</script>