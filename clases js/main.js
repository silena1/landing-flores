class product{
    constructor(name, price, stock) {
        this.name= name;
        this.price = price;
        this.stock = stock;
    }
    stockproduct() {

        this.stock--;

    }
}

const box1 = new product('largebox', 20, 100);
const box2 =new product('smallbox',15, 100);

console.log(box1)
