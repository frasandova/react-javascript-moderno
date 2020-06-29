// Variables y Constantes

//Variables que no van a cambiar
const nombre = 'Francisco';
let apellido = 'Sandoval';


let valorDado = 5;
valorDado = 4;

// var no se debe usar nunca mas...
if(true){
    let valorDado = 6;
    console.log(valorDado);
    const nombre = 'Camila';
    console.log(nombre);
}
console.log(`${nombre} ${apellido} ${valorDado}`)