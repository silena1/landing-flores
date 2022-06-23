//array que contiene objetos
const product =[
    {name:'iphone', price=1000},
    {name:'samsung', price=600},
    {name:'motorola', price=500},
    {name:'xiaomi', price=800},
]

//Recorre el array y busca el primer elemento cuyo precio es 600
const iphone = products.find(product => product.price ===600);
console.log (iphone);

//Crea una copia del array anterior pero que contenga solo los precios de los productos
const newPrices = products.map (product =>{
    return {name:product.name, price: product.price*1.500}
});
console.log (newPrices);
