<template>
  <div id="app"> <h1>Gangst'eirb Clicker</h1> 
    <b-row>
      <b-col class="col1">
        <Clicker></Clicker>
      </b-col>
      <b-col class="col2">
        <Units></Units>
      </b-col>
      <b-col class="col3">
        <Shop></Shop>
      </b-col>
    </b-row>
  </div>
</template>


<script>
import Clicker from "./components/Clicker";
import Units from "./components/Units";
import Shop from "./components/Shop";

export default {
  components: {
    Clicker,
    Units,
    Shop,
  },
  methods: {
    AutoIncrement: function(){
      setInterval(() => {
        this.$store.dispatch('AutoIncrement');
      }, 1000);
    }
  },
  created: function(){
    this.AutoIncrement();
  },
  computed: {},
};
</script>

<style>
  @import './assets/style.css';
</style>
