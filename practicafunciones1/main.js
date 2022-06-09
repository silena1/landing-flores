// function square(number) {
//     return number * number;
//   }

// function nombreDescriptivo()

// let num1=10
// let num2=5
// function sumar(){
//     resultado= num1 + num2
//     document.write("el resultado es "+resultado)
// }
// sumar();
// //en  este caso se le asigna un valor en la misma función

// function suma(num1,num2){
//     return num1 + num2
    
// }

// document.write(suma(10,5))

// // En este, los valores se le asignan fuera de function y pueden modificarse a lo largo del programa


// // funcion arrow/flecha

// let saludar = nombre => "hola " + nombre;
// console.log(saludar("susana"));

// // // función tradicional 
// function= suma (a,b){
//     let chuck = 42;
//     return a + b + chuck;
// }
// document.write(suma (1,2));

// // función flecha
// sumar (c,d) => {
//     let chuck = 42;
//     return c +d + chunck;
// }
// document.write (sumar (1,2));

// let persona = (nombre,apellido) =>{
// return nombre + "" + apellido}
// console.log(opbtenerNombre("mario". "perez"))

// let persona = (nombre) => "susana" + nombre;
// console.log (persona("gimenez")) 

// // === función glogal: los valores se asignan fuera de una función, etc, por lo que estos pueden modificarse a lo largo del programa
// // === función local: los valores se asignan dentro de porej una función, por lo que estos no pueden modificarse lugo y solo pueden utilizarse dentro de dicha función.

// let operacion = (a,b) =>{return a - b}
// console.log (operacion(5,3))

let valor = (numero) => { 
    if (numero>=0) {
        document.write ("el valor es positivo")
    }
    else{
        document.write ("el valor es negativo")
    }
}
console.log (valor (3,))
