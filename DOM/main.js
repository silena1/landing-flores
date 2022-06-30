
//boton.addEventListener('click', function(){
//console.log("chau")
//})

// let texto= document.querySelector ("#text")
// console.log (texto)
 
// boton.addEventListener("click", function(){texto.textContent ="chau";})

let botonNumberUser=document.querySelector("#mostrar")

function numero(){
   let numberUser =document.querySelector("#numeroUsuario").value
   console.log(parseInt(numberUser))
}

botonNumberUser.addEventListener("click",numero)