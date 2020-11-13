<template>
  <div class="clic">
      <p>Moula par seconde : {{ countseconde }}</p>
      <p>Vous avez {{ applause }} moula.</p>
  </div>
</template>

<script>
export default {
    name: "ClickerCounter",
    computed: {
        applause: function(){
            return this.$store.getters.applause;
        },
        countseconde: function(){
          return this.$store.getters.countseconde;
        }
    }
}
</script>


 