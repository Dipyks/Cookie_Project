import Vue from "vue";
import Vuex from "vuex";
import {storageFunctions} from "../utility/storage";
import { objects } from "../utility/objects";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        applause: storageFunctions.getStorage('applause'),
        clic: storageFunctions.getStorage('clic',1),
        priceClap: storageFunctions.getStorage('priceClap',5),
        nbClap: storageFunctions.getStorage('nbClap'),
        countseconde: storageFunctions.getStorage('countseconde'),
        tabItem: storageFunctions.getStorageItem('tabItem',[
            new objects.Item(0, 5, "Action", 2, 0, 1.2, 0, "action.png"),
            new objects.Item(1, 50, "Entreprise", 10, 0, 1.3, 0, "office.png"),
            new objects.Item(2, 500, "Banque", 100, 0, 1.4, 0, "bank.png"),
            new objects.Item(3, 1000, "Clic x2", "aucun", 0, 2.5, 0, "click.png"),
        ]),
        tabPower: storageFunctions.getStoragePower('tabPower',[
            new objects.Power(0, 100, "Action x4", 4),
            new objects.Power(1, 500, "Entreprise x4", 4),
            new objects.Power(2, 10000, "Banque x4", 4),
        ]),
    },
    mutations: {
        APPLAUSE: function(state) {
            state.applause += state.clic;
        },
        PRICECLAP: function(state, id) {
            if (state.applause >= state.tabItem[id].price && state.tabItem[id].id != 3) {
                state.applause -= state.tabItem[id].price;
                state.tabItem[id].price *= state.tabItem[id].nextPrice;
                state.tabItem[id].price = Math.round(state.tabItem[id].price);
                state.tabItem[id].nbItem += 1;
                state.countseconde += state.tabItem[id].boostclic;
                state.tabItem[id].counter += state.tabItem[id].boostclic;
            }
            if (state.applause >= state.tabItem[id].price && state.tabItem[id].id == 3) {
                state.applause -= state.tabItem[id].price;
                state.clic *= 2;
                state.tabItem[id].price *= state.tabItem[id].nextPrice;
                state.tabItem[id].price = Math.round(state.tabItem[id].price);
                state.tabItem[id].nbItem += 1;
                state.tabItem[id].counter += state.tabItem[id].boostclic;               
            }
            localStorage.setItem('tabItem', JSON.stringify(state.tabItem));
        },
        PRICEPOWER: function(state, id) {
            if (state.applause >= state.tabPower[id].price && state.tabPower[id].price != -1) {
                state.applause -= state.tabPower[id].price;
                state.countseconde += 3 * state.tabItem[id].counter;
                state.tabItem[id].boostclic = state.tabItem[id].boostclic * 4;
                state.tabPower[id].price = -1;
            }
            localStorage.setItem('tabItem', JSON.stringify(state.tabItem));
            localStorage.setItem('tabPower', JSON.stringify(state.tabPower));
        },
        AUTOINCREMENT: function(state) {
            state.applause += state.countseconde;
        }
    },
    actions: {
        applause: function(context) {
            context.commit("APPLAUSE");
        },
        buyClap: function(context, id) {
            context.commit("PRICECLAP", id);
        },
        nbClap: function(context) {
            context.commit("NBCLAP");
        },
        AutoIncrement: function(context) {
            context.commit("AUTOINCREMENT");
        },
        buyPower: function(context, id) {
            context.commit("PRICEPOWER", id);
        },
    },
    getters: {
        applause: function(state) {  
            localStorage.setItem('applause', state.applause);
            return state.applause;
        },
        clic: function(state) {  
            localStorage.setItem('clic', state.clic);
            return state.clic;
        },      
        priceClap: function(state) {
            localStorage.setItem('priceClap', state.priceClap);
            return state.priceClap;
        },
        nbClap: function(state) {
            localStorage.setItem('nbClap', state.nbClap);
            return state.nbClap;
        },
        countseconde: function(state) {
            localStorage.setItem('countseconde', state.countseconde);
            return state.countseconde;
        },
        tabItem: function(state) {
            return state.tabItem;
        },
        tabPower: function(state) {
            return state.tabPower;
        }
    }
})