import { objects } from "./objects";

export const storageFunctions = {
    getStorage: function(name, baseValue = 0) {
        return (parseFloat(localStorage.getItem(name)) > 0) ? parseFloat(localStorage.getItem(name)) : baseValue;
    },
    getStorageItem: function(name, baseValue) {
        return (localStorage.getItem(name)) ? 
            getItems(Array.from(JSON.parse(localStorage.getItem(name))))
        :
            baseValue;
    },
    getStoragePower: function(name, baseValue) {
        console.log(localStorage.getItem(name));
        return (localStorage.getItem(name)) ? 
            getPower(Array.from(JSON.parse(localStorage.getItem(name))))
        :
            baseValue;
    },
}

function getItems(array) {
    var items = [];
    array.forEach(item => {
        items[item.id] = new objects.Item(
            item.id,
            item.price,
            item.name,
            item.boostclic,
            item.nbItem,
            item.nextPrice,
            item.counter,
            item.img,
        )
    });
    return items;
}

function getPower(array) {
    var powers = [];
    array.forEach(power => {
        powers[power.id] = new objects.Power(
            power.id,
            power.price,
            power.name,
            power.boostPower,
        )
    });
    console.log(powers);
    return powers;
}