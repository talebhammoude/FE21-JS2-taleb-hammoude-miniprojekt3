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

