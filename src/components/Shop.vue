<template>
<div>
  <div class="list power-list">
    <h2>Pouvoir</h2>
      <ShopPowers v-for='power in powers' :key='power.id' v-bind:power='power'></ShopPowers>
  </div>
      <hr>
  <div class="list item-list">
    <h2>Items</h2>
      <ShopItems v-for='item in items' :key='item.id' v-bind:item='item'></ShopItems>
  </div>
</div>
</template>

<script>
import ShopItems from "./ShopItems";
import ShopPowers from "./ShopPowers";

export default {
  components: {
    ShopItems,
    ShopPowers,
  },
  computed: {
    items: function(){
      return this.$store.getters.tabItem;
    },
    powers: function(){
      return this.$store.getters.tabPower;
    },
  }
};
</script>

<style>
</style>