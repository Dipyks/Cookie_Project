export const objects = {
     Item: function Item (id, price, name, boostclic, nbItem, nextPrice, counter, img) {
        this.id = id;
        this.price = price;
        this.name = name;
        this.boostclic = boostclic;
        this.nbItem = nbItem;
        this.nextPrice = nextPrice;
        this.counter = counter;
        this.img = img;
    },
    Power: function Power(id, price, name, boostPower) {
        this.id = id;
        this.price = price;
        this.name = name;
        this.boostPower = boostPower;
    },
}