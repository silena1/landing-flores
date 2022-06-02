// let datos=["auto", 1987,  true, "buenos dias"]

// //array-vector-arreglo
// //creación de un array


// let artista=["Taylor Swift", "Mitsky", "Eve"]

// console.log (artista [2])
// //mostrar elementos
// console.log ( artista[4])
// //mostrar elemento inexistente
// let canciones=["wait a minute", "angel ayes", "dont blame me"]
// console.log (canciones, "canciones de la playlist")
// //mostrar el array completo y texto 
// console.log ( canciones.length)
// //mostrar la cantidad de elementos del array


let platos=["kimchi", "empanadas", "sushi"]
let paises=["corea", "argentina","japon"]
console.log (platos,paises)
//mostrar varias listas
let menu=[platos,paises]
//unir arrays en una sola lista
console.log(menu[0][0])

platos.push ("caviche")
console.log(platos)
//agregar un elemento nuevo el final del array

platos.pop()
console.log(platos)
//eliminar el ultimo elemento del array
platos.unshift ("banana")
console.log (platos)
//agregar elementos al principio del array
platos.shift("hamburguesa")
console.log(platos)
//eliminar elementos al principio del array

