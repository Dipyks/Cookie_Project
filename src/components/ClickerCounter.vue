<template>
  <div>
    <div>
      <p>Vous avez recu {{ applause }} applaudissements.</p>
    </div>
  </div>
</template>

<script>
export default {
    name: "ClickerCounter",
    computed: {
        applause: function(){
            return this.$store.getters.applause;
        }
    }
}
</script>


 