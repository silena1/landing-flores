class product{
    constructor(name, price, stock) {
        this.name= name;
        this.price = price;
        this.stock = stock;
    }
    stockproduct(cantidad) {

       // this.stock--;
       this.stock= this.stock-cantidad;

    }


}

const box1 = new product('largebox', 20, 100);
const box2 =new product('smallbox',15, 100);

// box2.stockproduct() 
// console.log (box2)

box1.stockproduct(20)
console.log (box1.stock);
