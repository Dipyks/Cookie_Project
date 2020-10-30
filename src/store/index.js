import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        applause: 0,
        priceClap: 5,
        nbClap: 0,
    },
    mutations: {
        APPLAUSE: function(state) {
            state.applause += 1;
        },
        priceCLAP: function(state) {
            state.getClap += 5;
            state.nbClap += 1;
        },
    },
    actions: {
        applause: function(context) {
            context.commit("APPLAUSE");
        },
        priceClap: function(context) {
            context.commit("priceCLAP");
        },
        nbClap: function(context) {
            context.commit("NBCLAP");
        }
    },
    getters: {
        applause: function(state) {
            return state.applause;
        },
        priceClap: function(state) {
            return state.priceClap;
        },
        nbClap: function(state) {
            return state.nbClap;
        }
    }
})