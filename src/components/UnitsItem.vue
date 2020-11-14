<template>
    <b-container>
        <b-row>
            <div class="unitsItem">
                <b-row>
                    <b-col col lg="2">
                        <b-img class="imgUnitsItem" :src="require('../assets/'+(item.name).toLowerCase().replace(' ', '_')+'.png')"></b-img>
                    </b-col>
                    <b-col>
                        Vous avez {{item.nbItem}} {{item.name}} !
                    </b-col>
                </b-row>
                <p class="item">
                    (Un item rapporte {{item.boostclic}} MPS.)
                </p>
            </div>
        </b-row>
    </b-container>
</template>

<script>
export default {
    props: ["item"],
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