import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        applause: 0,
        clic: 1,
        priceClap: 5,
        nbClap: 0,
        countseconde: 0,
        tabItem: [
            new Item(0, 5, "Action", 2, 0, 1.2, 0, "action.png"),
            new Item(1, 50, "Entreprise", 10, 0, 1.3, 0, "office.png"),
            new Item(2, 500, "Banque", 100, 0, 1.4, 0, "bank.png"),
            new Item(3, 1000, "Clic x2", 0, 0, 1.8, 0, "click.png"),
        ],
        tabPower: [
            new Power(0, 100, "Action x4", 4),
            new Power(1, 500, "Entreprise x4", 4),
            new Power(2, 10000, "Banque x4", 4),
        ],
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
        },
        PRICEPOWER: function(state, id) {
            if (state.applause >= state.tabPower[id].price && state.tabPower[id].price != "Achat effectué") {
                state.applause -= state.tabPower[id].price;
                state.countseconde += 3 * state.tabItem[id].counter;
                state.tabItem[id].boostclic = state.tabItem[id].boostclic * 4;
                state.tabPower[id].price = "Achat effectué";
            }
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
            return state.applause;
        },
        priceClap: function(state) {
            return state.priceClap;
        },
        nbClap: function(state) {
            return state.nbClap;
        },
        countseconde: function(state) {
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

function Item(id, price, name, boostclic, nbItem, nextPrice, counter, img) {
    this.id = id;
    this.price = price;
    this.name = name;
    this.boostclic = boostclic;
    this.nbItem = nbItem;
    this.nextPrice = nextPrice;
    this.counter = counter;
    this.img = img;
}

function Power(id, price, name, boostPower) {
    this.id = id;
    this.price = price;
    this.name = name;
    this.boostPower = boostPower;
}