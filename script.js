function ShoppingCart(){
    this.total= 0;
    this.items = {};
}

//add item method

ShoppingCart.prototype.addItem = function(itemName, quantity , price){
    //add cost of added items to the current value of total.
    this.total += price*quantity;

    // add an entry to the items dict
    this.items[itemName]= quantity;

};

//remove item method

ShoppingCart.prototype.removeItem = function(itemName, quantity, pric){
    //deduct the cost of the items that have been removed from the shopping cart
    this.total = price*quantity;

    //remove items from the items dict
    this.items[itemName]= this.items[itemName] - quantity ;

};

// checkout method

ShoppingCart.prototype.checkout = function(cashPaid){
    if(cashPaid < this.total){
        return "Cash paid not enough";
    }
    return cashPaid-this.total;
};


//shop, sub class of ShoppinCart
function Shop() {
    this.quantity =100;
}
Shop.prototype = Object.create(ShoppingCart.prototype);
//remove item method
Shop.prototype.removeItem = function(){
    //remove items from the items dict
    this.quantity = this.quantity-1;
};

