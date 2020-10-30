<template>
  <div id="app"> <h1>Clapper Clicker</h1> 
    <b-row>
      <b-col class="col1">
        <Clicker></Clicker>
      </b-col>
      <b-col class="col2"> A venir... </b-col>
      <b-col class="col3">
        <Shop></Shop>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Clicker from "./components/Clicker";
//import Units from "./components/Units";
import Shop from "./components/Shop";

export default {
  components: {
    Clicker,
    //Units,
    Shop,
  },
  methods: {},
  computed: {},
};
</script>

<style>
#app {
  text-align: center;
}

.col1 {
  background-color: #c6f419;
  height: 100vh !important;
}

.col2 {
  background-color: #1990f4;
  height: 100vh !important;
}
.col3 {
  background-color: paleturquoise;
  height: 100vh !important;
}
</style>
