<template>
    <div>
        <b-row>
            <UnitsItem v-for='item in items' :key='item.id' v-bind:item='item'></UnitsItem>
        </b-row>
        <b-row>

        </b-row>
        <b-row>

        </b-row>
    </div>
</template>

<script>

import UnitsItem from './UnitsItem'

export default {
    components: {
        UnitsItem,
    },
    computed: {
        items: function(){
            return this.$store.getters.tabItem;
        },
    }
}
</script>